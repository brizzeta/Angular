import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-hw',
  templateUrl: './form-hw.component.html',
  styleUrls: ['./form-hw.component.css']
})
export class FormHWComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  passwordConfirming(group: FormGroup | null) {
    if (!group) return null;
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };    
  }

  onSubmit() {
    if (this.myForm && this.myForm.valid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors!");
    }
  }
}
