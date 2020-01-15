import { TestBed } from '@angular/core/testing';

import { TryingService } from './trying.service';

describe('TryingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TryingService = TestBed.get(TryingService);
    expect(service).toBeTruthy();
  });
});
