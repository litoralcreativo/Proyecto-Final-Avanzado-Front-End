import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/account/register.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formObj: any = {
    email: new FormControl('', []),
    cel: new FormControl('', []),
    username: new FormControl('', []),
    name: new FormControl('', []),
    surname: new FormControl('', []),
    birthYear: new FormControl('', []),
    password: new FormControl('', []),
  };

  registrandoSpinner: boolean;
  registrationError: boolean;
  registrationErrorMessage: string;
  modalShow: boolean;

  signupForm: FormGroup = new FormGroup(this.formObj);

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registrandoSpinner = false;
    this.registrationError = false;
    this.registrationErrorMessage = '';
    this.modalShow = false;
  }

  ngOnInit() {
    this.signupForm;
  }

  async signup() {
    this.registrandoSpinner = true;
    try {
      const data = await this.registerService.postUser(this.signupForm.value);
      console.log(data);

      if (data.error) {
        throw data.error.message;
      } else {
        this.registrationErrorMessage = '';
        this.registrationError = false;
        this.modalShow = true;
        setTimeout(() => this.router.navigate(['/']), 8000);
      }
    } catch (error: any) {
      this.registrationError = true;
      this.registrationErrorMessage = error;
    }
    this.registrandoSpinner = false;
  }
  getMinBirthYear(): number {
    const dt = new Date();
    return dt.getFullYear() - 120;
  }

  getMaxBirthYear(): number {
    const dt = new Date();
    return dt.getFullYear() - 18;
  }
}
