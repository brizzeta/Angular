import { Component } from '@angular/core';

@Component({
  selector: 'app-petparent',
  templateUrl: './petparent.component.html',
  styleUrl: './petparent.component.css'
})
export class PetparentComponent {
  petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "any food"],
      birthYear: 2024,
      birthMonth: 1,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      birthMonth: 2,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2020,
      birthMonth: 10,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
}
