import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  title = 'Register';
  formData = { email: '', password: '', confirmPassword: '' };

  constructor(private router: Router, private authService:AuthService) {}

  ngOnInit(): void {}
  validate() {
    if (
      this.formData.email === this.formData.email ||
      this.formData.password === this.formData.password ||
      this.formData.confirmPassword === this.formData.confirmPassword
    ) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid boarding point';
    }
  }

  isValid() {
    return this.errorMessage === '';
  }

  register() {this.authService.register(this.formData).subscribe({
    next: (response: any) => {
      this.router.navigate(['/login']);
    },
    error: (error: any) => {
      console.log(error);
    },
  });

}
}
