import { TestBed } from '@angular/core/testing';

import { FetchuserdataService } from './fetchuserdata.service';

describe('FetchuserdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchuserdataService = TestBed.get(FetchuserdataService);
    expect(service).toBeTruthy();
  });
});
