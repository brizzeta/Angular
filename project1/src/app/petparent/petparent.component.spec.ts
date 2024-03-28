import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetparentComponent } from './petparent.component';

describe('PetparentComponent', () => {
  let component: PetparentComponent;
  let fixture: ComponentFixture<PetparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
