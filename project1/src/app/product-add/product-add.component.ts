import { Component } from '@angular/core';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  name:string = "";
  constructor(private productService: ProductsService) {}
  addProduct() {
    this.productService.addProduct(this.name);
  }
}
