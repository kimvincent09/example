import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProductsComponent } from './components/products/products.component';
import { BannerComponent } from './components/banner/banner.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { UsersComponent } from './components/users/users.component';
import { ShowComponent } from './components/dashboard/show/show.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { ProductListComponent } from './components/dashboard/product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    ProductsComponent,
    BannerComponent,
    CartComponent,
    ItemComponent,
    UsersComponent,
    ShowComponent,
    OrdersComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
