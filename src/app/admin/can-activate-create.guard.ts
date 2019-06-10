import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IsLoggedInService } from './is-logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateCreateGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('email') && sessionStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['admin']);
      return false;
    }
  }
}
