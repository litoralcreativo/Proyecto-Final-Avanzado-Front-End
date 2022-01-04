import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url: string = environment.url;
  endpoint: string = '';
  constructor(private http: HttpClient, private router: Router) { }
  
  setEndPoint(endpoint: string) {
    this.endpoint = endpoint;
  } //setea el endpoint

  handlerError(err: any) {
    err.status == 401 ? this.router.navigate(['account/login']) : null;
    err.status == 404 ? this.router.navigate(['notfound']) : null;
  }

  async get() {
    try {
      return await this.http.get(`${this.url}/${this.endpoint}`).toPromise();
    } catch (error) {
      return this.handlerError(error);
    }
  }

  async post (obj:any)  {
    try {
        return await this.http.post(`${this.url}/${this.endpoint}`, obj).toPromise();
    } catch (error) {
      return this.handlerError(error);
    }
  }

}
