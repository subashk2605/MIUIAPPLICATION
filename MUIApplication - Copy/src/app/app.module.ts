import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { SignupFormComponent } from './Components/signup-form/signup-form.component';
import { HomeComponent } from './Components/home/home.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { SigninComponent } from './Components/signin/signin.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomeComponent,
    SignupFormComponent,
    DialogComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AsyncPipe,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    // NgOtpInputModule,
    MatTableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('authtoken');
        }
      }
    })
  ],
  providers: [AuthService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
