import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Doctor } from 'src/app/interfaces/doctor'
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  listDoctors: Doctor[] = [
    // test vars
    // {id: 1, name: "Panadol", description: "Para dolor de cabeza", price: 4, stock: 200},
    // {id: 2, name: "Mentas", description: "Dulces", price: 1, stock: 500}
  ]
  loading: boolean = false;

  constructor(private _doctorService: DoctorService, private toastr: ToastrService){

  }

  ngOnInit(): void {
  // this._doctorService.getListDoctors();
       // this call is not being subscribed.
       // Therefore, the HTTP request is made,
       // but does not wait for the response before continuing
       // with other actions.
    this.getListDoctors();
  }

  // Function to get the list of doctors
  getListDoctors() {

    this.loading = true;

    // Subscribe to the getListDoctors method of the DoctorService
    // This method makes an HTTP request to get the list of doctors
    this._doctorService.getListDoctors().subscribe((data: Doctor[]) => {
      // Update the listDoctors array with the fetched data
      this.listDoctors = data;
      this.loading = false;
    })
  }

  // Function to delete a doctor by ID
  deleteDoctor(id: number) {
    this.loading = true

    // Subscribe to the deleteDoctor method of the DoctorService
    // This method makes an HTTP request to delete a doctor by ID
    this._doctorService.deleteDoctor(id).subscribe(data => {
      // After deletion, refresh the list of doctors
      this.getListDoctors();
      this.toastr.warning('El medicamento fue eliminado con éxito', 'Medicamento eliminado');
    })
  }

}

