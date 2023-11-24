import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Drug } from 'src/app/interfaces/drug'
import { DrugService } from 'src/app/service/drug.service';

@Component({
  selector: 'app-list-drugs',
  templateUrl: './list-drugs.component.html',
  styleUrls: ['./list-drugs.component.css']
})
export class ListDrugsComponent implements OnInit {
  listDrugs: Drug[] = [
    // test vars
    // {id: 1, name: "Panadol", description: "Para dolor de cabeza", price: 4, stock: 200},
    // {id: 2, name: "Mentas", description: "Dulces", price: 1, stock: 500}
  ]
  loading: boolean = false;

  constructor(private _drugService: DrugService, private toastr: ToastrService){

  }

  ngOnInit(): void {
  // this._drugService.getListDrugs();
       // this call is not being subscribed.
       // Therefore, the HTTP request is made,
       // but does not wait for the response before continuing
       // with other actions.
    this.getListDrugs();
  }

  getListDrugs() {

    this.loading = true;

    this._drugService.getListDrugs().subscribe((data: Drug[]) => {
      this.listDrugs = data;
      this.loading = false;
    })

  }

  deleteDrug(id: number) {
    this.loading = true
    this._drugService.deleteDrug(id).subscribe(data => {
      this.getListDrugs();
      this.toastr.warning('El medicamento fue eliminado con éxito', 'Medicamento eliminado');
    })
  }

}
