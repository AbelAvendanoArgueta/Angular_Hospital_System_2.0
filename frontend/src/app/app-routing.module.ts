// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { ListDrugsComponent } from './components/list-drugs/list-drugs.component';
import { AddEditDrugComponent } from './components/add-edit-drug/add-edit-drug.component';

// Define the routes for your application
const routes: Routes = [
  { path: '', component: ListDrugsComponent },                   // Default route, navigates to ListDrugsComponent
  { path: 'mainmenu/drugs/add', component: AddEditDrugComponent }, // Route for adding a new drug
  { path: 'mainmenu/drugs/edit/:id', component: AddEditDrugComponent }, // Route for editing an existing drug
  { path: '**', redirectTo: '', pathMatch: 'full' }              // Redirects to the default route for unknown paths
];

// NgModule decorator to configure the module
@NgModule({
  imports: [RouterModule.forRoot(routes)],   // Configures the router module with the defined routes
  exports: [RouterModule]                    // Exports the configured RouterModule for use in the application
})
export class AppRoutingModule { }
