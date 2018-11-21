import { TestBed } from '@angular/core/testing';

import { RealQuikService } from './realquik.service';

describe('RealQuikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealQuikService = TestBed.get(RealQuikService);
    expect(service).toBeTruthy();
  });
});
