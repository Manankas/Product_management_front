import { Component, OnInit } from '@angular/core';

import { ProduitDto } from '../../../donnee/produit';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  selectedProduct: ProduitDto ;
  constructor() { }

  ngOnInit() {
  this.selectedProduct = new ProduitDto(0, '', 0 , '');
  }

  saveProduct(p: ProduitDto) {

  }

  cancelEdit() {

  }
}
