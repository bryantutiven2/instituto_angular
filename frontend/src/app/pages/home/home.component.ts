import { Component, OnInit } from '@angular/core';
import { CargarDatosService } from 'src/app/services/cargar-datos/cargar-datos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _serviceDatos: CargarDatosService
  ) { 
    
  }
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
