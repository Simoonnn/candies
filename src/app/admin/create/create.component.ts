import { Component, OnInit } from '@angular/core';
import { IsLoggedInService } from '../is-logged-in.service';
import { isLoggedInHelper } from '../helper';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private isLogged: IsLoggedInService,
              private router: Router) { }
  form = this.fb.group({
    name: [],
    description: [],
    price: []
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

}
