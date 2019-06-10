import { url } from '../../../base-url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService {

  constructor(private http: HttpClient) { }
  check() {
    const email = sessionStorage.getItem('email');
    const token = sessionStorage.getItem('token');
    // @ts-ignore
    const object = { email, token };
    const request = this.http.post(url + 'api/admin/is_logged_in', object);
    return request;
  }
}
