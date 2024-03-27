import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubTitleComponent } from '../sub-title/sub-title.component';
import { MasterTableService } from '../../service/masterTableService';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [SubTitleComponent, ReactiveFormsModule, CommonModule],
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([0-9])*$/),
    ]),
    location: new FormControl('', [Validators.required]),
    province: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    secondPassword: new FormControl('', [Validators.required]),
  });
  provinces: Array<any> = [];
  locations: Array<any> = [];

  constructor(
    private masterTableService: MasterTableService,
    private userService: UserService
  ) {
    this.masterTableService.getAllProvinces().subscribe({
      next: (response: any) => {
        this.provinces = response;
      },
    });
  }

  onProvinceSelection() {
    var idProvince = this.form.controls['province']?.value.id;
    if (idProvince != undefined) {
      this.masterTableService.getLocationByProvinceId(idProvince).subscribe({
        next: (response: any) => {
          this.locations = response;
          this.form.controls['location'].setValue(this.locations[0]);
        },
      });
    }
  }

  saveNewUser() {
    this.userService.saveUser(this.form.value).subscribe({
      next: (response: any) => {
        response;
        console.log(response);
      },
    });
  }

  comparePassword(form: AbstractControl) {
    let password = this.form.get('password')?.value;
    let passwordSecondaty = this.form.get('secondPassword')?.value;
  }
}
