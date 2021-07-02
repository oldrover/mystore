import { Component, OnInit , Input} from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = this.cartService.getCartProducts();
  total: number = 0;
  empty: boolean = true;

  faRemove = faMinusCircle;

  name: string = "";
  address: string = "";
  creditcard: string = "";

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    if (this.products.length > 0) {
      this.total = this.products.reduce((prev, cur) => {
        return prev + (cur.price * cur.amount);
      }, 0);
      this.empty = false;
    }
    else{
      this.empty = true;
    }
  }

  submitOrder(): void {    
    this.router.navigate(['confirmation'],{ queryParams: {name: this.name,total: this.total }});
    this.cartService.clearCart();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeProductFromCart(product);
    this.products = this.cartService.getCartProducts();
    this.ngOnInit();
  }
}
