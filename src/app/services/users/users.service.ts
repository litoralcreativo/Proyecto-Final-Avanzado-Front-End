import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  getUsers() {
    this.setEndPoint('users');
    return this.get();
  }
}
