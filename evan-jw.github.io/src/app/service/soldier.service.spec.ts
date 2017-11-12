import { TestBed, inject } from '@angular/core/testing';

import { SoldierService } from './soldier.service';

describe('SoldierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoldierService]
    });
  });

  it('should be created', inject([SoldierService], (service: SoldierService) => {
    expect(service).toBeTruthy();
  }));
});
