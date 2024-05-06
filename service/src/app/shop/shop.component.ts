import { Component } from '@angular/core';
import { ItemsService } from '../items.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: any[] = [];
  name:string = '';
  discription:string = '';
  price:number = 0;
  discount: number = 0;
  constructor(private product: ItemsService){

  }
  ngOnInit(): void {
    this.products = this.product.products;
  }
}
