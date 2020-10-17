import { Component, OnInit } from '@angular/core';
import { CargarDatosService } from 'src/app/services/cargar-datos/cargar-datos.service'

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  lista_noticias: any = []
  constructor(
    private _serviceDatos: CargarDatosService
  ) { }

  
  ngOnInit(): void {
    this.noticias()
  }

  noticias(){
    this._serviceDatos.getNoticias().subscribe(
      (resp) =>{
        this.lista_noticias = resp
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
