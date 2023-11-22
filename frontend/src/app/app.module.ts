import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListDrugsComponent } from './components/list-drugs/list-drugs.component';
import { AddEditDrugComponent } from './components/add-edit-drug/add-edit-drug.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListDrugsComponent,
    AddEditDrugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
