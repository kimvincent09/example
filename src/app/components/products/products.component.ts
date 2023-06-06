import { Component } from '@angular/core';
import home from '@iconify/icons-mdi/home';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent {
  homeIcon = home;
  faCoffee = faCoffee;
  cartShopping = faCartShopping;
}
