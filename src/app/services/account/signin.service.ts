import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService extends BaseService {

    auth(obj:any){
      this.setEndPoint("auth/signin");
      return this.post(obj);
    }
}