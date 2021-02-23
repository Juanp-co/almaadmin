import { TestBed } from '@angular/core/testing';

import { DetallesMiembroService } from './detalles-miembro.service';

describe('DetallesMiembroService', () => {
  let service: DetallesMiembroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesMiembroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
