import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

const routes = [{ path: '', redirectTo: 'produit', pathMatch: 'full' }]; // 'produit' est un path quelques part

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule {}
