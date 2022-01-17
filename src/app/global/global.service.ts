import { Injectable, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  token: any = null;
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: any = null;

  setToken(t: any) {
    localStorage.setItem('token', t);
    this.token = t;
    this.decodedToken = this.helper.decodeToken(this.token);
  }

  grabToken() {
    this.token = localStorage.getItem('token');
    this.decodedToken = this.helper.decodeToken(this.token);
  }

  removeToken() {
    localStorage.removeItem('token');
    this.token = null;
    this.decodedToken = null;
  }
}
