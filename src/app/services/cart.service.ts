import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  getCartProducts(): Product[] {
    return this.products;
  }

  addProductToCart(product: Product): void {
    this.products.push(product)
  }

}
