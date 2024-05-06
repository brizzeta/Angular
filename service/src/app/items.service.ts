import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  products = [{
    name: "Nike",
    discription: "Nike nike nike",
    price: 299.99,
    discount: 20
  },
  {
    name: "phone",
    discription: "phone phone phone",
    price: 599.99,
    discount: 10
  }
]
  constructor() { 
  }
  addProduct(name:string, discription: string, price: number, discount: number){
      this.products.push({name: name, discription: discription, price:price,discount: discount})
  }
  editProduct(name:string, discription: string, price: number, discount: number, index:number){
    this.products[index].name = name;
    this.products[index].discription = discription;
    this.products[index].price = price;
    this.products[index].discount = discount;
  }
  removeProduct(index:number){
    this.products.splice(index, 1);
  }
}
