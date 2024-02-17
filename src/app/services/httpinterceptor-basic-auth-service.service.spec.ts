import { TestBed } from '@angular/core/testing';

import { HTTPInterceptorBasicAuthServiceService } from './httpinterceptor-basic-auth-service.service';

describe('HTTPInterceptorBasicAuthServiceService', () => {
  let service: HTTPInterceptorBasicAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPInterceptorBasicAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
