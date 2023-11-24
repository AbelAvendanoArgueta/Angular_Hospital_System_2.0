// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
// Main Menu
import { MainMenuComponent } from './components/main-menu/main-menu.component';
// Drugs
import { ListDrugsComponent } from './components/list-drugs/list-drugs.component';
import { AddEditDrugComponent } from './components/add-edit-drug/add-edit-drug.component';
// Doctors
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { AddEditDoctorComponent } from './components/add-edit-doctor/add-edit-doctor.component';
// Patients
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { AddEditPatientComponent } from './components/add-edit-patient/add-edit-patient.component';
// Prescription and appointments
import { ListPrescriptionAppointmentsComponent } from './components/list-prescription-appointments/list-prescription-appointments.component';
import { AddEditPrescriptionAppointmentComponent } from './components/add-edit-prescription-appointment/add-edit-prescription-appointment.component';
// Evaluations
import { ListEvaluationsComponent } from './components/list-evaluations/list-evaluations.component';
import { AddEditEvaluationComponent } from './components/add-edit-evaluation/add-edit-evaluation.component';

// Define the routes for your application
const routes: Routes = [
  // Main Menu
  { path: '', component: MainMenuComponent },                       // Default route, navigates to MainMenuComponent
  { path: 'mainmenu', component: MainMenuComponent }, 
  // Drugs
  { path: 'mainmenu/drugs', component: ListDrugsComponent },        // Route for listing drugs
  { path: 'mainmenu/drugs/add', component: AddEditDrugComponent },  // Route for adding a new drug
  { path: 'mainmenu/drugs/edit/:id', component: AddEditDrugComponent }, // Route for editing an existing drug
  // Doctors
  { path: 'mainmenu/doctors', component: ListDoctorsComponent },        // Route for listing doctors
  { path: 'mainmenu/doctors/add', component: AddEditDoctorComponent },  // Route for adding a new doctor
  { path: 'mainmenu/doctors/edit/:id', component: AddEditDoctorComponent }, // Route for editing an existing doctor
  // Patients
  { path: 'mainmenu/patients', component: ListPatientsComponent },        // Route for listing patients
  { path: 'mainmenu/patients/add', component: AddEditPatientComponent },  // Route for adding a new patient
  { path: 'mainmenu/patients/edit/:id', component: AddEditPatientComponent }, // Route for editing an existing patient
  // Prescription and appointments
  { path: 'mainmenu/prescription&appointments', component: ListPrescriptionAppointmentsComponent },        // Route for listing prescription&appointments
  { path: 'mainmenu/prescription&appointments/add', component: AddEditPrescriptionAppointmentComponent },  // Route for adding a new prescription&appointment
  { path: 'mainmenu/prescription&appointments/edit/:id', component: AddEditPrescriptionAppointmentComponent }, // Route for editing an prescription&appointment
  // Evaluations
  { path: 'mainmenu/evaluations', component: ListEvaluationsComponent },        // Route for listing evaluations
  { path: 'mainmenu/evaluations/add', component: AddEditEvaluationComponent },  // Route for adding a new evaluation
  { path: 'mainmenu/evaluations/edit/:id', component: AddEditEvaluationComponent }, // Route for editing an evaluation

  // No route defined
  { path: '**', redirectTo: '', pathMatch: 'full' }                 // Redirects to the default route for unknown paths
];

// NgModule decorator to configure the module
@NgModule({
  imports: [RouterModule.forRoot(routes)],   // Configures the router module with the defined routes
  exports: [RouterModule]                    // Exports the configured RouterModule for use in the application
})
export class AppRoutingModule { }
