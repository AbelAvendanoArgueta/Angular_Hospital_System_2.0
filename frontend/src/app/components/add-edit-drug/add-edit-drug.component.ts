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
export class AddEditDrugComponent implements OnInit {
  formDrug: FormGroup;   // Form group for drug information
  loading: boolean = false; // Flag to indicate loading state
  idDrug: number;       // ID of the drug being edited (0 for new drug)
  operacion: string = "Agregar "; // Operation type, default is "Agregar" (Add)

  constructor(
    private fb: FormBuilder,
    private _drugService: DrugService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    // Initialize the form group with validators
    this.formDrug = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    });

    // Get the drug ID from the route parameter
    this.idDrug = Number(aRouter.snapshot.paramMap.get('id'));
  }

  // Function to add or edit a drug
  addDrug() {
    const drug: Drug = {
      name: this.formDrug.value.name,
      description: this.formDrug.value.description,
      price: this.formDrug.value.price,
      stock: this.formDrug.value.stock
    };

    this.loading = true;

    if (this.idDrug !== 0) {
      // Edit an existing drug
      drug.id = this.idDrug;
      this._drugService.updateDrug(this.idDrug, drug).subscribe(() => {
        this.toastr.success(`El medicamento ${drug.name} fue actualizado con éxito`, 'Medicamento actualizado');
        this.loading = false;
        this.router.navigate(['/mainmenu/drugs']);
      });

    } else {
      // Add a new drug
      this._drugService.saveDrug(drug).subscribe(() => {
        this.toastr.info(`El medicamento ${drug.name} fue registrado con éxito`, 'Medicamento registrado');
        this.loading = false;
        this.router.navigate(['/mainmenu/drugs']);
      });
    }
  }

  // Function to fetch drug data for editing
  editDrug(idDrug: number) {
    this.loading = true;
    this._drugService.editDrug(idDrug).subscribe((data: Drug) => {
      this.loading = false;
      // Set form values based on the fetched data
      this.formDrug.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      });
    });
  }

  ngOnInit(): void {
    if (this.idDrug !== 0) {
      // Edit an existing drug
      this.operacion = "Editar ";
      this.editDrug(this.idDrug);
    }
  }
}
