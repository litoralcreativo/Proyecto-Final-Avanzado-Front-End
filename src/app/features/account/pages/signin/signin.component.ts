import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SigninService } from 'src/app/services/account/signin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formObj: any = {
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  };

  signinForm: FormGroup = new FormGroup(this.formObj);
  errorMessagge: string = '';
  signing: boolean = false;

  constructor(private signinService: SigninService, private router: Router) {}

  ngOnInit() {
    this.signinForm;
  }

  verifyField(field: string): string {
    let msg = ``;
    const control = this.signinForm.controls[field];
    control.status === 'INVALID' && control.touched
      ? (msg = `*Este campo es obligatorio!`)
      : '';
    return msg;
  }

  async signin() {
    this.errorMessagge = '';
    try {
      const data: any = await this.signinService.auth(this.signinForm.value);
      console.log(data);

      if (!data.token) {
        this.errorMessagge = 'no pudimos validar tus credenciales';
        console.log(this.errorMessagge);
      } else {
        localStorage.setItem('token', data.token);
        this.router.navigate(['']);
      }
    } catch (error) {
      return error;
    }
  }
}
