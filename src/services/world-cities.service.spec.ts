import { TestBed } from '@angular/core/testing';

import { WorldCitiesService } from './world-cities.service';

describe('WorldCitiesService', () => {
  let service: WorldCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
