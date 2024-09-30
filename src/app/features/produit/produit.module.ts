import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from '../../componts/produit/produit.component';


@NgModule({
  declarations: [
    ProduitComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule
  ]
})
export class ProduitModule { }
