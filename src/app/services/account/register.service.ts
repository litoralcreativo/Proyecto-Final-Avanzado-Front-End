import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends BaseService {
  postUser(obj: any) {
    this.setEndPoint('auth/signup');
    obj = { ...obj, age: parseInt(obj.age), cel: parseInt(obj.cel) };
    console.log(obj);

    return this.post(obj);
  }
}
