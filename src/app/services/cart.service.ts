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
    let c =0;

      this.products.forEach( p => {
        if( p.id == product.id) {
          p.amount = +p.amount + +product.amount;
          c++;
        } 
      });
      if(c==0){
        this.products.push(product);
      }           
  }

  removeProductFromCart(product: Product): void {
    this.products = this.products.filter( p => p.id != product.id);
  }

  clearCart(): void {
    this.products = [];
  }

  changeAmount(newAmount: number, id: number): void {
    this.products = this.products.map( p => {
      if(p.id == id) {
        p.amount = newAmount;
      }
      return p;
    });

  }

}
