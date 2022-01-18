import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public globals: GlobalService) {}

  ngOnInit(): void {}

  logout() {
    this.globals.removeToken();
    this.router.navigate(['/']);
  }
}
