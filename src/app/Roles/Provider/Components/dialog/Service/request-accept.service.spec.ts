import { TestBed } from '@angular/core/testing';

import { RequestAcceptService } from './request-accept.service';

describe('RequestAcceptService', () => {
  let service: RequestAcceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestAcceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
