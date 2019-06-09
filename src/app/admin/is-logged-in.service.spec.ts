import { TestBed } from '@angular/core/testing';

import { IsLoggedInService } from './is-logged-in.service';

describe('IsLoggedInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsLoggedInService = TestBed.get(IsLoggedInService);
    expect(service).toBeTruthy();
  });
});
