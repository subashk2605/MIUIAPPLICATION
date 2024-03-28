import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SignupFormComponent } from './Components/signup-form/signup-form.component';
import { SigninComponent } from './Components/signin/signin.component';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Redirect to signin by default
  { path: 'home', component: HomeComponent  },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'signup', component: SignupFormComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
