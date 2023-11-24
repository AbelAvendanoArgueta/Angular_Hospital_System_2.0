import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/interfaces/doctor';
import { DoctorService } from 'src/app/service/doctor.service';


@Component({
  selector: 'app-add-edit-doctor',
  templateUrl: './add-edit-doctor.component.html',
  styleUrls: ['./add-edit-doctor.component.css']
})
export class AddEditDoctorComponent implements OnInit {
  formDoctor: FormGroup;   // Form group for doctor information
  loading: boolean = false; // Flag to indicate loading state
  idDoctor: number;       // ID of the doctor being edited (0 for new doctor)
  operacion: string = "Agregar "; // Operation type, default is "Agregar" (Add)

  constructor(
    private fb: FormBuilder,
    private _doctorService: DoctorService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    // Initialize the form group with validators
    this.formDoctor = this.fb.group({
      name: ['', Validators.required],
      carnet: [null, Validators.required],
      contact: [null, Validators.required],
      description: ['', Validators.required],
    });

    // Get the doctor ID from the route parameter
    this.idDoctor = Number(aRouter.snapshot.paramMap.get('id'));
  }

  // Function to add or edit a doctor
  addDoctor() {
    const doctor: Doctor = {
      name: this.formDoctor.value.name,
      carnet: this.formDoctor.value.carnet,
      contact: this.formDoctor.value.contact,
      description: this.formDoctor.value.description
    };

    this.loading = true;

    if (this.idDoctor !== 0) {
      // Edit an existing doctor
      doctor.id = this.idDoctor;
      this._doctorService.updateDoctor(this.idDoctor, doctor).subscribe(() => {
        this.toastr.success(`La información de ${doctor.name} fue actualizada con éxito`, 'Doctor actualizado');
        this.loading = false;
        this.router.navigate(['/mainmenu/doctors']);
      });

    } else {
      // Add a new doctor
      this._doctorService.saveDoctor(doctor).subscribe(() => {
        this.toastr.info(`${doctor.name} fue registrado con éxito`, 'Doctor@ registrado');
        this.loading = false;
        this.router.navigate(['/mainmenu/doctors']);
      });
    }
  }

  // Function to fetch doctor data for editing
  editDoctor(idDoctor: number) {
    this.loading = true;
    this._doctorService.editDoctor(idDoctor).subscribe((data: Doctor) => {
      this.loading = false;
      // Set form values based on the fetched data
      this.formDoctor.setValue({
        name: data.name,
        carnet: data.carnet,
        contact: data.contact,
        description: data.description
      });
    });
  }

  ngOnInit(): void {
    if (this.idDoctor !== 0) {
      // Edit an existing doctor
      this.operacion = "Editar ";
      this.editDoctor(this.idDoctor);
    }
  }
}
