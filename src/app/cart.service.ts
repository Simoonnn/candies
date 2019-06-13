import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storage = localStorage;
  constructor() { }
  getItemDict() {
    const cart = this.storage.getItem('cart');
    if (!cart) return;
    const lists = cart.split(', ');
    let temp_cart = {};
    for (let index in lists) {
      // 0 index for item name, 1 for quantity (separated by '=')
      const sublist = lists[index].split('=');
      temp_cart[sublist[0]] = +sublist[1];
    }
    
    return temp_cart;
  }
  setItemDict(item, diff) {
    const cart = this.getItemDict();
    if (!cart) return;
    // Diff can be both negative and positive
    if (item in cart) {
      if (cart[item] + diff < 0) {
        cart[item] = 0;
      } else {
        cart[item] = cart[item] + diff;
      }
    } else {
      cart[item] = 1;
    }
    this.setLocalStorageItem(cart);
  }
  setLocalStorageItem(dict) {
    let sublists = [];
    for (let name in dict) {
      let seq = (name+'='+dict[name]);
      sublists.push(seq);
    }
    const cartItems = sublists.join(', ');
    localStorage.setItem('cart', cartItems);
  }
  count() {
    let count = 0;
    const cart = this.getItemDict();
    if (!cart) return 0;
    for (let name in cart) {
      count += cart[name];
    }
    return count;
  }
}
