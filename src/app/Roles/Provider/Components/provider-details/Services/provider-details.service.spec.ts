import { TestBed } from '@angular/core/testing';

import { ProviderDetailsService } from './provider-details.service';

describe('ProviderDetailsService', () => {
  let service: ProviderDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
