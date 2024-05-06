import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{12}$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+([-]?[a-zA-Zа-яА-ЯёЁ]+)*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+([-]?[a-zA-Zа-яА-ЯёЁ]+)*$/)]],
      middleName: ['', [Validators.required,Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+([-]?[a-zA-Zа-яА-ЯёЁ]+)*$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
