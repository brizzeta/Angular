import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-petchild',
  templateUrl: './petchild.component.html',
  styleUrls: ['./petchild.component.css']
})
export class PetchildComponent {
  @Input() pet: any;

  getAgeYears(): number {
    const currentDate = new Date();
    const birthDate = new Date(this.pet.birthYear, this.pet.birthMonth - 1);
    const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
      return ageInYears - 1;
    }
    return ageInYears;
  }

  getAgeMonths(): number {
    const currentDate = new Date();
    const birthDate = new Date(this.pet.birthYear, this.pet.birthMonth - 1);
    let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
      ageInMonths += 12;
    }
    return ageInMonths;
  }
}
