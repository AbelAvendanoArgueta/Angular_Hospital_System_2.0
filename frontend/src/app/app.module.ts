import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListDrugsComponent } from './components/list-drugs/list-drugs.component';
import { AddEditDrugComponent } from './components/add-edit-drug/add-edit-drug.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListDrugsComponent,
    AddEditDrugComponent,
    ProgressBarComponent
  ],
  imports: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }
