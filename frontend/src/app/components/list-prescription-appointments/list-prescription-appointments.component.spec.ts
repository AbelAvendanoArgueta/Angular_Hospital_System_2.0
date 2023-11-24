import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrescriptionAppointmentsComponent } from './list-prescription-appointments.component';

describe('ListPrescriptionAppointmentsComponent', () => {
  let component: ListPrescriptionAppointmentsComponent;
  let fixture: ComponentFixture<ListPrescriptionAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPrescriptionAppointmentsComponent]
    });
    fixture = TestBed.createComponent(ListPrescriptionAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
