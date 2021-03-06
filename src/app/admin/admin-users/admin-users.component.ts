import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: any[] = [];

  constructor(
    private userService: UsersService,
    public globals: GlobalService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    let _temp = await this.userService.getUsers();
    this.users = _temp.users;
    console.log(this.users);
  }
}
