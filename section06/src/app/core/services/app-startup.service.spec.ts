import { TestBed } from '@angular/core/testing';

import { AppStartupService } from './app-startup.service';

describe('AppStartupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStartupService = TestBed.get(AppStartupService);
    expect(service).toBeTruthy();
  });
});
