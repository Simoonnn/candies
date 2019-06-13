import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items;
  constructor(private http: HttpClient, private router: Router, private helper: CartService) { }

  ngOnInit() {
    const itemsDict = this.helper.getItemDict();
    let idArray: Array<string>   = [];
    for (let i in itemsDict) {
      idArray.push(i);
    }
    const body = {array: idArray};
    this.http.post('http://localhost:4200/api/items/get_specific_items', body)
      .subscribe((res) => {
        // @ts-ignore
      this.items = res.items;
    });
  }
  onDelete(id) {
    this.helper.deleteItem(id);
    window.location.reload();
  }

}
