import { TestBed } from '@angular/core/testing';

import { ApiicampusService } from './apiicampus.service';

describe('ApiicampusService', () => {
  let service: ApiicampusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiicampusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
