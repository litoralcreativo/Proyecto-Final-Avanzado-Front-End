import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {

  endpoint: string = 'signup';
  
  postUser() {
    this.setEndPoint(this.endpoint);
    return this.post('');
  }
      
}
