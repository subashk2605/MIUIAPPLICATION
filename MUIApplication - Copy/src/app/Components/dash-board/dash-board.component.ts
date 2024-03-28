import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {


  constructor(private router: Router,) {}

  isDrawerOpen = true;
  drawerMode = 'side';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDrawerState(event.target.innerWidth);
  }

  updateDrawerState(screenWidth: number) {
    if (screenWidth < 768) { // Adjust this value based on your design requirements
      this.isDrawerOpen = false;
      this.drawerMode = 'over';
    } else {
      this.isDrawerOpen = true;
      this.drawerMode = 'side';
    }
  }

  logout() {
    this.router.navigate(['/signin']);
  }

}

