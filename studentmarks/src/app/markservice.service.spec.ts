import { TestBed } from '@angular/core/testing';

import { MarkserviceService } from './markservice.service';

describe('MarkserviceService', () => {
  let service: MarkserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
