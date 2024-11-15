import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from '../../componts/produit/produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterproduitPipe } from 'src/app/pipe/filterproduit.pipe';
import { FormProductComponent } from 'src/app/componts/produit/form-product/form-product.component';
import { SingleProductComponent } from 'src/app/componts/single-product/single-product.component';


@NgModule({
  declarations: [
    ProduitComponent,
    FilterproduitPipe,
    FormProductComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProduitModule { }
