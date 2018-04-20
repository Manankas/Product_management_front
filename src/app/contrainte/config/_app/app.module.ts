import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouteModule } from './app-route.module';
import { AppComponent } from '../../../presentation/_app';

import { ProduitPresentationModule } from '../../../presentation/produit/produit-presentation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouteModule,
    ProduitPresentationModule // les modules qui seront utilisés
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
