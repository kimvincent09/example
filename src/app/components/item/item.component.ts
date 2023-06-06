import { Component } from '@angular/core';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  cartShopping = faCartShopping;
}
