import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateCreateGuard } from './can-activate-create.guard';

describe('CanActivateCreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateCreateGuard]
    });
  });

  it('should ...', inject([CanActivateCreateGuard], (guard: CanActivateCreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
