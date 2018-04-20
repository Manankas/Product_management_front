import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { ProduitComponent } from './produit-root/produit.component';

// Produit route module:
import { ProduitRoutingModule } from '../../contrainte/config/produit/produit-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ProduitRoutingModule],
  declarations: [ProduitListComponent, ProduitEditComponent, ProduitComponent],
  exports: []
})
export class ProduitPresentationModule {}
