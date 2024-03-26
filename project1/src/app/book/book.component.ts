import { Component } from '@angular/core';
import { books } from '../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books = books;
  obj_book:any = books[0];

  onSelect(item:Object) {
    this.obj_book = item;
  }
}
