import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', () => {
    const service = new CartService();
    service.setItemDict('apple', -111);
    service.setItemDict('apple', 1);
    expect(service.getItemDict()['apple']).toBe(1);
  });
});
