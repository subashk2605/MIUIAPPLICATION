import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required] // If you have confirmPassword field
    });
  }

  // Add submit method to handle form submission
  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(
        response => {
          // Handle successful signup response
          console.log(response);
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