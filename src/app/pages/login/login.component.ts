import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  loginForm!: FormGroup;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Check if the username and password are correct (Dummy check)
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      
      // Here, you can implement your authentication logic
      // For demo purposes, let's assume the username is 'user' and password is 'password'
      if (username === 'user' && password === 'password') {
        // Navigate to the dashboard if login details are correct
        this.router.navigate(['/dashboard']);
      } else {
        // Provide feedback if the login details are incorrect
        console.log('Invalid username or password');
      }
    }
    
  }
  navigateToSignup() {
    console.log("hyy");
    this.router.navigate(['signup']); // Navigate to the signup route
  }

}
