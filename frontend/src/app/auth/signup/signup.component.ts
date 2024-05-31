// src/app/auth/signup/signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['user']
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password, role } = this.signupForm.value;
      this.authService.signup(email, password, role).subscribe(
        response => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Signup failed', error);
        }
      );
    }
  }
}
