import { Component, OnInit } from '@angular/core';
import { CargarDatosService } from 'src/app/services/cargar-datos/cargar-datos.service'

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor(
    private _serviceDatos: CargarDatosService
  ) { }

  colegio: any = []
  ngOnInit(): void {
    this.datosColegio();
  }

  datosColegio(){
    this._serviceDatos.getColegio().subscribe(
      (resp)=>{
        this.colegio = resp
      }
    )
  }
}
