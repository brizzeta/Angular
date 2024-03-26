import { Component } from '@angular/core';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrl: './iphone.component.css'
})
export class IphoneComponent {
  imgs: string[] = ['assets\\img_iphone\\black.jpg',
                    'assets\\img_iphone\\blue.jpg',
                    'assets\\img_iphone\\green.jpg',
                    'assets\\img_iphone\\pink.jpg',
                    'assets\\img_iphone\\yellow.jpg'];
  imgSrc: string = this.imgs[0];

  changeImg(iter:number) {
    this.imgSrc = this.imgs[iter];
  }
}
