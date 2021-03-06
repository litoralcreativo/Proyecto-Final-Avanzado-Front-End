import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './account-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerificationComponent } from './pages/verification/verification.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent, VerificationComponent],

  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [SignupComponent, SigninComponent],
})
export class AccountModule {}
