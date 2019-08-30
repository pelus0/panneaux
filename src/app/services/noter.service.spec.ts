import { TestBed } from '@angular/core/testing';

import { NoterService } from './noter.service';

describe('NoterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoterService = TestBed.get(NoterService);
    expect(service).toBeTruthy();
  });
});
