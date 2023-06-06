import { Component } from '@angular/core';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartShopping = faCartShopping;
}
