import { TestBed } from '@angular/core/testing';

import { ScrollProgressServiceService } from './scroll-progress-service.service';

describe('ScrollProgressServiceService', () => {
  let service: ScrollProgressServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollProgressServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
