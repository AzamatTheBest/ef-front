import { TestBed } from '@angular/core/testing';

import { UnivsService } from './univs.service';

describe('UnivsService', () => {
  let service: UnivsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnivsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
