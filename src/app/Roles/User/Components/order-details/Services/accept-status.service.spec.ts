import { TestBed } from '@angular/core/testing';

import { AcceptStatusService } from './accept-status.service';

describe('AcceptStatusService', () => {
  let service: AcceptStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
