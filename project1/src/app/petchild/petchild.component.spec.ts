import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetchildComponent } from './petchild.component';

describe('PetchildComponent', () => {
  let component: PetchildComponent;
  let fixture: ComponentFixture<PetchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
