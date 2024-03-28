import { Component, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomUserDetails } from 'src/app/Model/CustomUserDetails';
import { AuthService } from 'src/app/services/auth.service';
import { DialogService } from 'src/app/services/dialog-service.service';
import { ScrollProgressService } from 'src/app/services/scroll-progress-service.service';

export interface Section {
  name: string;
  updated: Date;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users!: CustomUserDetails[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'country', 'email'];

  dataSource!: MatTableDataSource<CustomUserDetails>;

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
    });
  }

  isAdmin(): boolean {
    const authorities = this.userService.extractAuthoritiesFromToken();
    return authorities.includes('ADMIN');
  }
}