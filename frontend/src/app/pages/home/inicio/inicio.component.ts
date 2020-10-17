import { Component, OnInit } from '@angular/core';
import { CargarDatosService } from 'src/app/services/cargar-datos/cargar-datos.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  lista_inicio: any = []
  constructor(
    private _serviceDatos: CargarDatosService
  ) { }

  ngOnInit(): void {
    this.inicio();
  }

  inicio(){
    this._serviceDatos.getInicio().subscribe(
      (resp) => {
        this.lista_inicio = resp
      }
    )
  }
}
