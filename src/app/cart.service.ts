import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storage = localStorage;
  constructor(private router: Router) { }
  getItemDict() {
    const cart = this.storage.getItem('cart');
    if (!cart) return;
    const lists = cart.split(', ');
    let temp_cart = {};
    for (let index in lists) {
      // 0 index for item id, 1 for quantity (separated by '=')
      const sublist = lists[index].split('=');
      temp_cart[sublist[0]] = +sublist[1];
    }
    return temp_cart;
  }
  setItemDict(item, diff: string | number) {
    let cart = this.getItemDict();
    if (!cart) {
      cart = [];
    }
    // Diff can be both negative and positive or 'delete'
    if (item in cart) {
      if (cart[item] + diff <= 0) {
        cart[item] = 0;
      } else if (diff == 'delete'){
        cart[item] = 'deleted';
      } else {
        cart[item] = cart[item] + diff;
      }
    } else if (diff != 'delete') {
      cart[item] = 1;
    }
    this.setLocalStorageItem(cart);
  }
  setLocalStorageItem(dict) {
    let sublists = [];
    for (let id in dict) {
      if (dict[id] == 'deleted') {
        continue;
      }
      let seq = (id + '=' + dict[id]);
      sublists.push(seq);
    }
    const cartItems = sublists.join(', ');
    localStorage.setItem('cart', cartItems);
  }
  // doesnt count all the items, kind of groups
  count() {
    let count = 0;
    const dict = this.getItemDict();
    for (let i in dict) {
      count++;
    }
    return count;
  }
  generateMessage() {
    let message;
    const count = this.count();
    if (count == 0 || count > 1) {
      message = count + " items in the cart";
    } else {
      message = "1 item in the cart";
    }
    return message;
  }
  findById(id) {
    return this.getItemDict()[id];
  }
  deleteItem(id) {
    this.setItemDict(id, 'delete');
  }
}
