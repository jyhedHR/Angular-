import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApropotRoutingModule } from './apropot-routing.module';
import { PropotComponent } from '../../componts/propot/propot.component';


@NgModule({
  declarations: [
    PropotComponent
  ],
  imports: [
    CommonModule,
    ApropotRoutingModule
  ]
})
export class ApropotModule { }
