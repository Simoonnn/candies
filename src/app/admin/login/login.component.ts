import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emailPasswordValid;
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  onSubmit() {
    const message = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.http.post('http://localhost:4200/api/admin/login', message).subscribe((resp) => {
      // @ts-ignore
      const response = resp.success;
      if (response) {
        // @ts-ignore
        const token = resp.token;
        // @ts-ignore
        const email = resp.email;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', email);
        console.log(sessionStorage);
      } else {
        this.emailPasswordValid = false;
      }
    });
  }
}
