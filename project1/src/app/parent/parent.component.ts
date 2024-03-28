import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  products = [
    {name: "Сок", price: 54, quantity: 1},
    {name: "Чай", price: 76, quantity: 5}
  ];
  clicks = this.getQuantity(); 
  totalPrices = this.getTotalPrices();

  getQuantity() {
    return this.products.reduce((sumQuantity, item) => sumQuantity + item.quantity, 0);
  }
  getTotalPrices() {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }
  onChanged(event: boolean, i:number) {
    this.products[i].quantity += event == true ? 1 : -1;
    this.totalPrices = this.getTotalPrices();
    
  }
}
