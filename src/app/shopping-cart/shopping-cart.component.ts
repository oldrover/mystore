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
  total: number = 0;
  empty: boolean = true;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if (this.products.length > 0) {
      this.total = this.products.reduce((prev, cur) => {
        return prev + cur.price;
      }, 0);
      this.empty = false;
    }
    else {

    }

    

   
  }

}
