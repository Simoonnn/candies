import { url } from '../../../../base-url';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emailPasswordInvalid = false;
  constructor(private fb: FormBuilder, private http: HttpClient,
              private router: Router) { }
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  onSubmit() {
    const message = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.http.post( url + 'api/admin/login', message).subscribe((resp) => {
      // @ts-ignore
      const response = resp.success;
      if (response === 'true') {
        // @ts-ignore
        const token = resp.token;
        // @ts-ignore
        const email = resp.email;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', email);
        this.emailPasswordInvalid = false;
        this.router.navigateByUrl('/admin/create');
      } else {
        this.emailPasswordInvalid = true;
      }
    });
  }
}
