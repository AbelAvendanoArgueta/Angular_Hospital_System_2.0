import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  idDrug:  number;
  operacion: string = "Agregar ";

  constructor(private fb: FormBuilder,
    private _drugService: DrugService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute)
    {

    this.formDrug = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })
    this.idDrug = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(this.idDrug);
  }

  addDrug(){
    const drug: Drug = {
      name: this.formDrug.value.name,
      description: this.formDrug.value.description,
      price: this.formDrug.value.price,
      stock: this.formDrug.value.stock
    }

    this.loading = true;

    if(this.idDrug != 0){
      // edit
      drug.id = this.idDrug;
      this._drugService.updateDrug(this.idDrug, drug).subscribe(() =>{
        this.toastr.success(`El medicamento ${drug.name} fue actualizado con éxito`, 'Medicamento actualizado');
          this.loading = false;
        this.router.navigate(['/mainmenu/drugs']);
      })

    } else {
      // add or create
      this._drugService.saveDrug(drug).subscribe(() => {
        this.toastr.info(`El medicamento ${drug.name} fue registrado con exito`, 'Medicamento registrado');
          this.loading = false;
        this.router.navigate(['/mainmenu/drugs']);
      })
    }
   }

  editDrug(idDrug : number){
    this.loading = true;
    this._drugService.editDrug(idDrug).subscribe((data:Drug) => {
      console.log(data)
      this.loading = false;
      this.formDrug.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
        })
      })
    }

  ngOnInit(): void {
    if(this.idDrug != 0){
      // edit
      this.operacion = "Editar ";
      this.editDrug(this.idDrug);
      this.loading = false;
    }
   }

}
