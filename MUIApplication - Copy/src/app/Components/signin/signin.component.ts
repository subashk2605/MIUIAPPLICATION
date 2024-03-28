import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {


  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const { username, password } = this.signinForm.value;
      this.authService.signin(username, password).subscribe(
        response => {
          // Handle successful signin response
          this.authService.storeTokenInCookie(response); // Store token in cookie
          console.log('Token stored in cookie');
          this.router.navigate(['/dashboard']);
          
        },
        error => {
          // Handle error
          console.error(error);
        }
      );
    } else {
      // Form is invalid
    }
  }
}


