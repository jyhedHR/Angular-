import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componts/home/home.component';
import { NotfoundComponent } from './componts/notfound/notfound.component';
import { ProduitComponent } from './componts/produit/produit.component';

const routes: Routes = [
{path:"home",component:HomeComponent},

{path:"",redirectTo:'/home',pathMatch:'full'},
{path:"products/:id",component:ProduitComponent},
// {path:"products",component:ProduitComponent ,children:[
//   {path: ":id",component:ProduitComponent}
// ]},


{path:"**",component:NotfoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
