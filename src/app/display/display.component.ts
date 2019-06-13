import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public items: Array<any>;
  public inputValue;
  public order = "init";
  private initOrder = this.order;
  public perPage = "init";;
  private initPerPage = this.perPage;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const body = {
      page: (this.route.snapshot.queryParams['page'] || 1),
      limit: (this.route.snapshot.queryParams['limit'] || 5)
    };
    this.http.get('http://localhost:4200/api/items/get', { params: body }).subscribe((res) => {
      // @ts-ignore
      this.items = res.response;
    })
  }
  onSearch() {
    console.log(this.inputValue);
    console.log(this.perPage);
    console.log(this.order);
  }

}
