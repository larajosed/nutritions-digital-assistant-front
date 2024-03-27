import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorLogin = false;
  login: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {}

  onSave() {
    this.userService
      .getUsuario(
        this.login.controls['email'].value,
        this.login.controls['password'].value
      )
      .subscribe({
        next: (response) => {
          if (response == null) {
            this.errorLogin = true;
          } else {
            localStorage.setItem('user', JSON.stringify(response));
            this.router.navigate(['/', 'diets']);
          }
        },
      });
  }
}
