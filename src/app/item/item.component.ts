import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'single-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input('itemObject') object;
  ngOnInit() {

  }

}
