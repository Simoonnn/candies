import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'single-cart-item',
  templateUrl: './single-cart-item.component.html',
  styleUrls: ['./single-cart-item.component.scss']
})
export class SingleCartItemComponent implements OnInit{
  @Input("item-object") object;
  @Output('delete-item') delete = new EventEmitter();
  public totalPrice;
  public quantity;
  constructor(private helper: CartService, private router: Router) { }
  ngOnInit(): void {
    this.quantity = this.helper.findById(this.object.id);
    this.totalPrice = this.quantity * this.object.price;
  }
  onQuantityChange() {
    if (+this.quantity > 30) {
      this.quantity = 30;
    }
    this.totalPrice = this.quantity * this.object.price;
    const change = this.quantity - this.helper.getItemDict()[this.object.id];
    this.helper.setItemDict(this.object.id, change);
  }
  deleteItem() {
    this.delete.emit(this.object.id);
  }

}
