import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './componts/navbar/navbar.component';
import { HomeComponent } from './componts/home/home.component';
import { FooterComponent } from './componts/footer/footer.component';
import { HeaderComponent } from './componts/header/header.component';
import { ListCategorieComponent } from './componts/list-categorie/list-categorie.component';
import { FilterPipe } from './pipe/filter.pipe';
import { NotfoundComponent } from './componts/notfound/notfound.component';
import { ProduitModule } from './features/produit/produit.module';
import { FilterproduitPipe } from './pipe/filterproduit.pipe';
import { FormCategoryComponent } from './componts/form-category/form-category.component';
import { FormUserComponent } from './componts/form-user/form-user.component';
import { TestComponent } from './componts/test/test.component';
import { CategoryComponent } from './componts/category/category.component';
import { SingleProductComponent } from './componts/single-product/single-product.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ListCategorieComponent,
    FilterPipe,
    NotfoundComponent,
    FormCategoryComponent,
    TestComponent,
    CategoryComponent,
 




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
