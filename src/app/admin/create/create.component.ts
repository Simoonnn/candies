import { Component, OnInit } from '@angular/core';
import { IsLoggedInService } from '../is-logged-in.service';
import { isLoggedInHelper } from '../helper';
import { url } from '../../../../base-url';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private isLogged: IsLoggedInService,
              private router: Router, private http: HttpClient) { }
  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(30),
    Validators.maxLength(500)]],
    price: ['', [Validators.required, Validators.maxLength(6)]]
  });
  ngOnInit() {
    this.isLogged.check().subscribe((res) => {
      if (!isLoggedInHelper(res)) {
        this.router.navigateByUrl('/admin');
      }
    });
  }
  copyDigest() {
    // @ts-ignore
    const el: HTMLInputElement = document.getElementById('input_text');
    el.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
  }
  onSubmit() {
    const name = this.form.get('name').value;
    const description = this.form.get('description').value;
    const price = this.form.get('price').value;
    const body = { name, description, price };
    console.log(body);
    const request = this.isLogged.check();
    request.subscribe((res) => {
      if (isLoggedInHelper(res)) {
        console.log('Everything is ok!');
        this.http.post(url + 'api/items/create', body).subscribe();
      } else {
        console.log('something went wrong');
      }
    });
  }

}
