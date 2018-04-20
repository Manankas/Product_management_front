import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components:
import { ProduitComponent } from '../../../presentation/produit/produit-root';
import { ProduitListComponent } from '../../../presentation/produit/produit-list/produit-list.component';

const routes: Routes = [
  {
    path: 'produit',
    component: ProduitComponent, // on passe d'abord ici et on fait un router-outlet dans l'html
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' }, // list est un path
      { path: 'list', component: ProduitListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // à ne surtout pas oublié
  exports: [RouterModule] // à ne surtout pas oublié
})

// cette module sera importer dans Produit-presentation.module pour fonctionner
export class ProduitRoutingModule {}
