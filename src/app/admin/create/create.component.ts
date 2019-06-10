import { Component, OnInit } from '@angular/core';
import { IsLoggedInService } from '../is-logged-in.service';
import { isLoggedInHelper } from '../helper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private isLogged: IsLoggedInService, private router: Router) { }

  ngOnInit() {
    this.isLogged.check().subscribe((res) => {
      if (!isLoggedInHelper(res)) {
        this.router.navigateByUrl('/admin');
      }
    });
  }

}
