import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Login';
  errorMessage: string = '';
  formData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.formData).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.isSuccess) {
          localStorage.setItem('email', response.email);
          localStorage.setItem('userId', response.id);
          localStorage.setItem('admin', response.isAdmin);
          this.router.navigate(['/home']);
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
