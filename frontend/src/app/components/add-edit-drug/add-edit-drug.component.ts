import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drug } from 'src/app/interfaces/drug';

@Component({
  selector: 'app-add-edit-drug',
  templateUrl: './add-edit-drug.component.html',
  styleUrls: ['./add-edit-drug.component.css']
})
export class AddEditDrugComponent {
  formDrug: FormGroup;

  constructor(private fb: FormBuilder){
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

    console.log(drug)

   }

}
