import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/account/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formObj: any = {
    email: new FormControl('', []),
    cel: new FormControl('', []),
    username: new FormControl('', []),
    name: new FormControl('', []),
    surname: new FormControl('', []),
    age: new FormControl('', []),
    password: new FormControl('', []),
  };

  signupForm: FormGroup = new FormGroup(this.formObj);

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit() {
    this.signupForm
  };

  async signup() {
    try {
      const data: any = await this.registerService.postUser(this.signupForm.value)
      console.log(data)
    } catch (error) {
      return error
    }
  }

}
