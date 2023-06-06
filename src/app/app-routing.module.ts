import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { UsersComponent } from './components/users/users.component';
import { ShowComponent } from './components/dashboard/show/show.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { ProductListComponent } from './components/dashboard/product-list/product-list.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'item', component: ItemComponent },
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: ShowComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'products', component: ProductListComponent},
  { path: '', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
