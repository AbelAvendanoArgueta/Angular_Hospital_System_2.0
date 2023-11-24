import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private myAppDoctorUrl: string;
  private myApiDoctorUrl: string;

  constructor(private http: HttpClient) {
    // Set the base URLs for your application and API
    this.myAppDoctorUrl = environment.endpoint;  // Assuming 'environment.endpoint' is defined in your environment
    this.myApiDoctorUrl = 'api/mainmenu/doctors/';
   }

   // Get a list of doctors
   getListDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.myAppDoctorUrl}${this.myApiDoctorUrl}`);
   }

   // Delete a doctor by ID
   deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppDoctorUrl}${this.myApiDoctorUrl}${id}`);
   }

   // Save a new doctor
   saveDoctor(doctor: Doctor): Observable<void> {
    return this.http.post<void>(`${this.myAppDoctorUrl}${this.myApiDoctorUrl}`, doctor);
   }

   // Get a doctor by ID for editing
   editDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.myAppDoctorUrl}${this.myApiDoctorUrl}${id}`);
   }

   // Update a doctor by ID
   updateDoctor(id: number, doctor: Doctor): Observable<void> {
    return this.http.put<void>(`${this.myAppDoctorUrl}${this.myApiDoctorUrl}${id}`, doctor);
   }
}
