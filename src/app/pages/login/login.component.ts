import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  passwordVisible: boolean = true;
  passwordInpuField: string = 'password';
  email: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  setPasswordVisible = () => {
    this.passwordVisible = !this.passwordVisible;
    this.passwordInpuField =
      this.passwordInpuField === 'password' ? 'text' : 'password';
  };
  onSubmit() {
    if (this.email === '' || this.password === '') {
      this.error = true;
      return;
    }
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigateByUrl('/overview');
  }
}
