import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drug } from '../interfaces/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  private myAppDrugUrl: string;
  private myApiDrugUrl: string;

  constructor(private http: HttpClient) {
    // Set the base URLs for your application and API
    this.myAppDrugUrl = environment.endpoint;  // Assuming 'environment.endpoint' is defined in your environment
    this.myApiDrugUrl = 'api/mainmenu/drugs/';
   }

   // Get a list of drugs
   getListDrugs(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${this.myAppDrugUrl}${this.myApiDrugUrl}`);
   }

   // Delete a drug by ID
   deleteDrug(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppDrugUrl}${this.myApiDrugUrl}${id}`);
   }

   // Save a new drug
   saveDrug(drug: Drug): Observable<void> {
    return this.http.post<void>(`${this.myAppDrugUrl}${this.myApiDrugUrl}`, drug);
   }

   // Get a drug by ID for editing
   editDrug(id: number): Observable<Drug> {
    return this.http.get<Drug>(`${this.myAppDrugUrl}${this.myApiDrugUrl}${id}`);
   }

   // Update a drug by ID
   updateDrug(id: number, drug: Drug): Observable<void> {
    return this.http.put<void>(`${this.myAppDrugUrl}${this.myApiDrugUrl}${id}`, drug);
   }
}
