import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDoctorComponent } from './add-edit-doctor.component';

describe('AddEditDoctorComponent', () => {
  let component: AddEditDoctorComponent;
  let fixture: ComponentFixture<AddEditDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDoctorComponent]
    });
    fixture = TestBed.createComponent(AddEditDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
