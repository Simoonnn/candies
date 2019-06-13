import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'single-cart-item',
  templateUrl: './single-cart-item.component.html',
  styleUrls: ['./single-cart-item.component.scss']
})
export class SingleCartItemComponent implements OnInit{
  @Input("item-object") object;
  public totalPrice;
  public quantity;
  constructor(private helper: CartService) { }
  ngOnInit(): void {
    this.quantity = this.helper.findById(this.object.id);
    this.totalPrice = this.quantity * this.object.price;
  }
  onQuantityChange(event) {
    if (event.target.value > 30) {
      event.target.value = 30;
    }
    this.totalPrice = event.target.value * this.object.price;
    console.log(this.quantity);
  }

}
