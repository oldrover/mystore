import { Component, OnInit , Input} from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = this.cartService.getCartProducts();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
   
  }

}
