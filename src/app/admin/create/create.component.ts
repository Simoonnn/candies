import { Component, OnInit } from '@angular/core';
import { IsLoggedInService } from '../is-logged-in.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { isLoggedInHelper } from '../helper';
import { url } from '../../../../base-url';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {fromEvent, Observable, of} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public invalidName = false;

  constructor(private fb: FormBuilder, private isLogged: IsLoggedInService,
              private router: Router, private http: HttpClient) { }
  form = this.fb.group({
    name: ['', {validators: [Validators.required], asyncValidators: [this.validateName],
    updateOn: 'blur'}],
    description: ['', [Validators.required, Validators.minLength(30),
    Validators.maxLength(500)]],
    price: ['', [Validators.required, Validators.maxLength(6)]]
  });
  nameControl = this.form.get('name');
  ngOnInit() {
    // Send ajax requests sensibly
    const nameInput = document.getElementById('name');
    const requests = fromEvent(nameInput, 'input').pipe(
      // @ts-ignore
      map((e) => e.target.value),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(() => ajax({url: url + 'api/items/generate_digest', method: 'post',
        // @ts-ignore
      body: {name: nameInput.value}}))
    );
    requests.subscribe((res) => {
      const response = res.response;
      const success = response.success;
      if (success === 'true') {
        // handle success
        const el = document.getElementById('input_text');
        // @ts-ignore
        el.value = response.digest;
        this.invalidName = false;
      } else {
        // handle failure
        this.invalidName = true;
      }
    });
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
    const request = this.isLogged.check();
    request.subscribe((res) => {
      if (isLoggedInHelper(res)) {
        this.http.post(url + 'api/items/create', body).subscribe();
      } else {
        this.router.navigateByUrl('/admin');
      }
    });
  }
  validateName(control: AbstractControl): Observable<null | ValidationErrors> {
    const query = document.querySelectorAll('.error-message.show');
    if (query.length > 0) {
      return of({'unique': 'false'})
    } else {
      return of(null);
    }
  }
}
