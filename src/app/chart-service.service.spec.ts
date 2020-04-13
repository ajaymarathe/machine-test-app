import { TestBed, inject } from '@angular/core/testing';

import { ChartServiceService } from './chart-service.service';

describe('ChartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartServiceService]
    });
  });

  it('should be created', inject([ChartServiceService], (service: ChartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
