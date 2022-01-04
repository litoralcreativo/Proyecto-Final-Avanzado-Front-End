import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {

  
  
  postUser(obj:any) {
    this.setEndPoint('auth/signup');
    return this.post(obj);
  }
      
}
