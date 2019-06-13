import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  public message: string;
  constructor(private helper: CartService) {}
  ngOnInit(): void {
    const count = this.helper.count();
    if (count == 0 || count > 1) {
      this.message = count + " items in the cart";
    } else {
      this.message = "1 item in the cart";
    }
  }
}
