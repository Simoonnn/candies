import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {distinctUntilChanged, switchMap, map, debounceTime, debounce} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  private pCount = this.helper.count();
  public popupClass = 'static';
  public items: Array<any>;
  public inputValue = '';
  public order = "init";
  private initOrder = this.order;
  public perPage = "init";
  private initPerPage = this.perPage;
  public message;
  constructor(private http: HttpClient, private route: ActivatedRoute,
              private helper: CartService) { }

  ngOnInit() {
    this.message = this.helper.generateMessage();
    const paging = document.getElementById('paging');
    const sorting = document.getElementById('sorting');
    const searchBox = document.getElementById('searchBox');
    this.generateAjax(paging, 'input');
    this.generateAjax(sorting, 'input');
    this.generateAjax(searchBox, 'click');

    this.http.get('http://localhost:4200/api/items/get',
      { params: this.createGetRequestBody() }).subscribe((res) => {
      // @ts-ignore
      this.items = res.response;
    });

  }
  createGetRequestBody() {
    const body = {
      page: (this.route.snapshot.queryParams['page'] || '1'),
      limit: (this.perPage == 'init' ? '5' : this.perPage),
      phrase: this.inputValue,
      sort: (this.order == 'init' ? '' : this.order)
    };
    return body;
  }
  generateAjax(el, eventType) {
    let sub;
    if (eventType == 'click') {
      sub = fromEvent(el, eventType).pipe(
        map((e) => this.inputValue),
        debounceTime(200),
        distinctUntilChanged());
    } else {
      sub = fromEvent(el, eventType).pipe(
      // @ts-ignore
        map((e) => e.target.value),
        debounceTime(300),
        distinctUntilChanged());
    }
    sub.subscribe((data) => {
      this.http.get('http://localhost:4200/api/items/get',
        { params: this.createGetRequestBody() }).subscribe((res) => {
        // @ts-ignore
        this.items = res.response;
      });
    });
  }
  onBuy(message) {
    this.helper.setItemDict(message, 1);
    if (this.pCount != this.helper.count()) {
      this.popupClass = 'show';
      this.pCount = this.helper.count();
    }
    this.message = this.helper.generateMessage();
  }

}
