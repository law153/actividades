import { TestBed } from '@angular/core/testing';

import { ApiexternaService } from './apiexterna.service';

describe('ApiexternaService', () => {
  let service: ApiexternaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiexternaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
