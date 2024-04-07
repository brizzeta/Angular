import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:any[] = [];
  constructor(private productService:ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }
}
