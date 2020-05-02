import { TestBed } from '@angular/core/testing';

import { SqliteStorageService } from './sqlite-storage.service';

describe('SqliteStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqliteStorageService = TestBed.get(SqliteStorageService);
    expect(service).toBeTruthy();
  });
});
