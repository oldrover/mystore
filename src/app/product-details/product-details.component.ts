import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 1;
  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService 
    ) {
      this.product = {
        id: 1,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''
      }
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];      
    });

    this.productService.getProductById(this.id).subscribe(product => {
      this.product= product;
    })
  }  

  addProductToCart(product: Product): void {
    this.cartService.addProductToCart(product);
    window.alert("Product added to cart");
     
  }
}
