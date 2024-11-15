import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from '../../componts/profil/profil.component';
import { MainUserComponent } from '../../componts/main-user/main-user.component';
import { FormUserComponent } from 'src/app/componts/form-user/form-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilComponent,
    MainUserComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule
  ]
})
export class ProfilModule { }
