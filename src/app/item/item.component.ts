import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'single-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public showDescription = false;
  constructor() { }
  @Output() buy = new EventEmitter();
  @Input('itemObject') object;
  ngOnInit() {
  }
  onClick() {
    this.buy.emit(this.object.id);
  }
}
