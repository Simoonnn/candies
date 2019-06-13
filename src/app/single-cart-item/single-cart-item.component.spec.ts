import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCartItemComponent } from './single-cart-item.component';

describe('SingleCartItemComponent', () => {
  let component: SingleCartItemComponent;
  let fixture: ComponentFixture<SingleCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
