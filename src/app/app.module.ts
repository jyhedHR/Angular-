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
    NotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProduitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
