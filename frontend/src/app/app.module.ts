// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import your routing module
import { AppRoutingModule } from './app-routing.module';

// Import your root component
import { AppComponent } from './app.component';

// Import additional modules
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// Import your components
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ListDrugsComponent } from './components/list-drugs/list-drugs.component';
import { AddEditDrugComponent } from './components/add-edit-drug/add-edit-drug.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { AddEditDoctorComponent } from './components/add-edit-doctor/add-edit-doctor.component';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { AddEditPatientComponent } from './components/add-edit-patient/add-edit-patient.component';
import { AddEditPrescriptionAppointmentComponent } from './components/add-edit-prescription-appointment/add-edit-prescription-appointment.component';
import { ListPrescriptionAppointmentsComponent } from './components/list-prescription-appointments/list-prescription-appointments.component';
import { ListEvaluationsComponent } from './components/list-evaluations/list-evaluations.component';
import { AddEditEvaluationComponent } from './components/add-edit-evaluation/add-edit-evaluation.component';


// NgModule decorator to configure the module
@NgModule({
  declarations: [
    // Declare all the components used in the module
    AppComponent,
    ProgressBarComponent,
    MainMenuComponent,
    NavbarComponent,
    ListDrugsComponent,
    AddEditDrugComponent,
    AddEditDoctorComponent,
    ListDoctorsComponent,
    ListPatientsComponent,
    AddEditPatientComponent,
    AddEditPrescriptionAppointmentComponent,
    ListPrescriptionAppointmentsComponent,
    AddEditEvaluationComponent,
    ListEvaluationsComponent
  ],
  imports: [
    // Import and configure necessary modules
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent] // Define the root component for bootstrapping
})
export class AppModule { }
