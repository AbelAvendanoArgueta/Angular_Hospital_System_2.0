import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrescriptionAppointmentComponent } from './add-edit-prescription-appointment.component';

describe('AddEditPrescriptionAppointmentComponent', () => {
  let component: AddEditPrescriptionAppointmentComponent;
  let fixture: ComponentFixture<AddEditPrescriptionAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPrescriptionAppointmentComponent]
    });
    fixture = TestBed.createComponent(AddEditPrescriptionAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
