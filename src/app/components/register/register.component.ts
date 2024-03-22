import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SubTitleComponent } from '../sub-title/sub-title.component';
import { MasterTableService } from '../../service/masterTableService';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [SubTitleComponent, ReactiveFormsModule],
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    birthdate: new FormControl(),
    address: new FormControl(''),
    postalCode: new FormControl(''),
    location: new FormControl(''),
    province: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });

  constructor(private masterTableService: MasterTableService) {}
}
