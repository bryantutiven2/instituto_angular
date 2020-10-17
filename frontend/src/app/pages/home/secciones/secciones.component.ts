import { Component, OnInit } from '@angular/core';
import { CargarDatosService } from 'src/app/services/cargar-datos/cargar-datos.service'
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  constructor(
    private _serviceDatos: CargarDatosService
  ) { }

  secciones: any = []
  ngOnInit(): void {
    this.cargarSecciones()
  }

  cargarSecciones(){
    this._serviceDatos.getSecciones().subscribe(
      (resp) =>{
        this.secciones = resp
      }
    )
  }
}
