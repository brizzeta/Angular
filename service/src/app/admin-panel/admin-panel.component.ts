import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
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
  addProduct(){
    if(this.name !== '' && this.discription !== '' && this.price !== null && this.discount !== null){
      this.product.addProduct(this.name, this.discription, this.price, this.discount);
      this.name = '';
      this.discription = '';
      this.price = 0;
      this.discount = 0;
    }
  }

  editProduct(index:number){
    if(this.name !== '' && this.discription !== '' && this.price !== null && this.discount !== null && index !== null){
      this.product.editProduct(this.name, this.discription, this.price, this.discount, index);
      this.name = '';
      this.discription = '';
      this.price = 0;
      this.discount = 0;
    }
  }

  removeProduct(index:number){
    if(index !== null){
      this.product.removeProduct(index);
    }
  }
}
