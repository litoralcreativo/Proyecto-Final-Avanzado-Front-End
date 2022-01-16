import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends BaseService {
  postUser(obj: any) {
    this.setEndPoint('auth/signup');
    obj = {
      ...obj,
      birthYear: parseInt(obj.birthYear),
      cel: obj.cel,
    };
    console.log(obj);

    return this.post(obj);
  }
  verifyUser(uuid: string) {
    this.setEndPoint(`auth/verify/${uuid}`);
    console.log(uuid);
    return this.get();
  }
}
