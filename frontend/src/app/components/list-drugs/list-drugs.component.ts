import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/interfaces/drug'

@Component({
  selector: 'app-list-drugs',
  templateUrl: './list-drugs.component.html',
  styleUrls: ['./list-drugs.component.css']
})
export class ListDrugsComponent implements OnInit {
  listDrugs: Drug[] = [
    {id: 1, name: "Panadol", description: "Para dolor de cabeza", price: 4, stock: 200},
    {id: 2, name: "Mentas", description: "Dulces", price: 1, stock: 500}
  ]

  constructor(){

  }

  ngOnInit(): void {

  }
}
