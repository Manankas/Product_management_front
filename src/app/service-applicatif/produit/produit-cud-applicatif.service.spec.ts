import { TestBed, inject } from '@angular/core/testing';

import { ProduitCudApplicatifService } from './produit-cud-applicatif.service';

describe('ProduitCudApplicatifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitCudApplicatifService]
    });
  });

  it('should be created', inject([ProduitCudApplicatifService], (service: ProduitCudApplicatifService) => {
    expect(service).toBeTruthy();
  }));
});
