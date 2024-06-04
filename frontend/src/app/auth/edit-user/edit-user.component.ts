import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  user: { username: string; email: string; role: string; id: string; } | null | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required , Validators.minLength(3)]],
      password: [''], // Password field is optional for editing
      confirmPassword: [''] // Confirm password field is optional for editing
    }, {
      validators: this.passwordMatchValidator // Corrected here
    });
  }

  ngOnInit(): void {
    // Fetch user details from AuthService
    this.user = this.authService.getUser();
    if (this.user) {
      // Pre-fill form fields with user data
      this.editForm.patchValue({
        email: this.user.email,
        username: this.user.username
      });
    }
  }

  onSubmit() {
    if (this.editForm.valid && this.user) {
      const {username, email, password } = this.editForm.value;
      const id = this.user.id;
      this.authService.updateUser(id,username, email, password).subscribe(
        response => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Update user failed', error);
        }
      );
    }
  }

  // Custom validator function for password match
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (!password || !confirmPassword) {
      return null; // Return null if either control is null
    }
  
    if (password.value !== confirmPassword.value) {
      return { passwordMismatch: true }; // Return error object if passwords don't match
    } else {
      return null; // Return null if passwords match
    }
  }
}
