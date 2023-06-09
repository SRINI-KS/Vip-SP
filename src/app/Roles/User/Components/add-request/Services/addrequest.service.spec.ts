import { TestBed } from '@angular/core/testing';

import { AddrequestService } from './addrequest.service';

describe('AddrequestService', () => {
  let service: AddrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
