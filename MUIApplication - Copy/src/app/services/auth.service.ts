import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { CustomUserDetails } from '../Model/CustomUserDetails';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:9091/api/auth'; // Replace with your API endpoint
  
  constructor(private http: HttpClient,    private cookieService: CookieService  ,private jwtHelper: JwtHelperService  ) { }

  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, userData);
  }

  signin(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`, { username, password }, { responseType: 'text' as 'json' });
  }

  storeTokenInCookie(token: string) {
    this.cookieService.set('authToken', token);
  }

  getAllUsers(): Observable<CustomUserDetails[]> {
    const token = this.cookieService.get('authToken');
    // Set the token in the Authorization header
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Include headers in the HTTP request
    return this.http.get<CustomUserDetails[]>(`${this.apiUrl}/all`, { headers });
  }

  extractAuthoritiesFromToken(): string {
    const token = this.cookieService.get('authToken');
    const payload = this.jwtHelper.decodeToken(token);
    const authorities: string[] = payload ? payload['Authorities'] : [];
    return authorities.join(', ');
  }
  
}

