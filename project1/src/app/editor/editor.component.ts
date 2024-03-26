import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  isUppercase: boolean = false;
  isPressed1: boolean = false;
  isPressed2: boolean = false;
  isPressed3: boolean = false;
  isPressed4: boolean = false;

  changeBold() {
    this.isBold = !this.isBold;
  }
  changeItalic() {
    this.isItalic = !this.isItalic;
  }
  changeUpper() {
    this.isUppercase = !this.isUppercase;
  }
  changeUnder() {
    this.isUnderline = !this.isUnderline;
  }
  changePressed1() {
    this.isPressed1 = !this.isPressed1;
  }
  changePressed2() {
    this.isPressed2 = !this.isPressed2;
  }
  changePressed3() {
    this.isPressed3 = !this.isPressed3;
  }
  changePressed4() {
    this.isPressed4 = !this.isPressed4;
  }
}
