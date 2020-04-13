import { TestBed, inject } from '@angular/core/testing';

import { DataConverterService } from './data-converter.service';

describe('DataConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataConverterService]
    });
  });

  it('should be created', inject([DataConverterService], (service: DataConverterService) => {
    expect(service).toBeTruthy();
  }));
});
