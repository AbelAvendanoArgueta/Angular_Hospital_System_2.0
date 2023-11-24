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
import { ListDrugsComponent } from './components/list-drugs/list-drugs.component';
import { AddEditDrugComponent } from './components/add-edit-drug/add-edit-drug.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

// NgModule decorator to configure the module
@NgModule({
  declarations: [
    // Declare all the components used in the module
    AppComponent,
    NavbarComponent,
    ListDrugsComponent,
    AddEditDrugComponent,
    ProgressBarComponent
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
