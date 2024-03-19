import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  gender = new FormControl();
  address =  new FormControl();
  role = new FormControl();
  date = new FormData();

constructor(){

}
}
