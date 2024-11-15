import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componts/home/home.component';
import { NotfoundComponent } from './componts/notfound/notfound.component';
import { ProduitComponent } from './componts/produit/produit.component';
import { FormCategoryComponent } from './componts/form-category/form-category.component';
import { FormUserComponent } from './componts/form-user/form-user.component';
import { FormProductComponent } from './componts/produit/form-product/form-product.component';

const routes: Routes = [
{path:"home",component:HomeComponent},

{path:"",redirectTo:'/home',pathMatch:'full'},
{path:'products/add',component: FormProductComponent},

{path:'category/add',component: FormCategoryComponent},
{path:'user/add',component: FormUserComponent},
{path:'user/update/:objet',component: FormUserComponent},
{path:'category/update/:objet',component: FormCategoryComponent},
{path:"products",loadChildren:() => 
  import('./features/produit/produit.module').then((mp)=>mp.ProduitModule),
},
{path:"apropot",loadChildren:() => 
  import('./features/apropot/apropot.module').then((mp)=>mp.ApropotModule),
},
{path:"contact",loadChildren:() => 
  import('./features/contact/contact.module').then((mp)=>mp.ContactModule),
},
{path:"profil",loadChildren:() => 
  import('./features/profil/profil.module').then((mp)=>mp.ProfilModule),
},
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
