import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Drug } from 'src/app/interfaces/drug';
import { DrugService } from 'src/app/service/drug.service';

@Component({
  selector: 'app-add-edit-drug',
  templateUrl: './add-edit-drug.component.html',
  styleUrls: ['./add-edit-drug.component.css']
})
export class AddEditDrugComponent implements OnInit{
  formDrug: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private _drugService: DrugService,
    private router: Router,
    private toastr: ToastrService)
    {

    this.formDrug = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })
  }

  addDrug(){
    const drug: Drug = {
      name: this.formDrug.value.description,
      description: this.formDrug.value.name,
      price: this.formDrug.value.price,
      stock: this.formDrug.value.stock
    }

    this.loading = true;
    this._drugService.saveDrug(drug).subscribe(() => {
      this.loading = false;
      this.toastr.success(`El medicamento ${drug.name} fue registrado con exito`, 'Medicamento registrado');
      this.router.navigate(['/mainmenu/drugs']);
    })

   }

   ngOnInit(): void {

   }

}
