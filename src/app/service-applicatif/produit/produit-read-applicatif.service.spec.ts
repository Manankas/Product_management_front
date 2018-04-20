import { TestBed, inject } from '@angular/core/testing';

import { ProduitReadApplicatifService } from './produit-read-applicatif.service';

describe('ProduitReadApplicatifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitReadApplicatifService]
    });
  });

  it('should be created', inject([ProduitReadApplicatifService], (service: ProduitReadApplicatifService) => {
    expect(service).toBeTruthy();
  }));
});
