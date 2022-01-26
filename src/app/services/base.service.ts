import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../global/global.service';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  url?: string = process.env.url;
  endpoint: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    public globals: GlobalService
  ) {}

  setEndPoint(endpoint: string) {
    this.endpoint = endpoint;
  } //setea el endpoint

  setHeaders(obj: any) {}

  handlerError(err: any) {
    if (err.status == 401) this.router.navigate(['account/login']);
    else if (err.status == 404) return this.router.navigate(['notfound']);
    return err;
  }

  async get() {
    try {
      return await this.http
        .get(
          `${this.url}/${this.endpoint}`,
          this.globals.token
            ? {
                headers: {
                  token: this.globals.token,
                },
              }
            : {}
        )
        .toPromise();
    } catch (error) {
      return this.handlerError(error);
    }
  }

  async post(obj: any) {
    try {
      const endp = await this.http
        .post(`${this.url}/${this.endpoint}`, obj)
        .toPromise();
      return endp;
    } catch (error) {
      return this.handlerError(error);
    }
  }
}
