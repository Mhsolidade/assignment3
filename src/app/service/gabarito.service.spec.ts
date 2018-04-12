import { TestBed, inject } from '@angular/core/testing';

import { GabaritoService } from './gabarito.service';

describe('GabaritoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GabaritoService]
    });
  });

  it('should be created', inject([GabaritoService], (service: GabaritoService) => {
    expect(service).toBeTruthy();
  }));
});
