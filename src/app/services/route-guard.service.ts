import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(private globals: GlobalService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot) {
    if (this.globals.decodedToken)
      if (this.globals.decodedToken.roles[0].name === 'admin') {
        return true;
      }
    this.router.navigate(['/']);
    return false;
  }
}
