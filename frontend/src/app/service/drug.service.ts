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
    this.myAppDrugUrl = environment.endpoint;
    this.myApiDrugUrl = 'api/mainmenu/drugs/';
   }

   getListDrugs(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${this.myAppDrugUrl}${this.myApiDrugUrl}`);
   }
}
