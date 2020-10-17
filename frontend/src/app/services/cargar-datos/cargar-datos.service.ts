import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CargarDatosService {

  constructor(
    private http: HttpClient
  ) { }

  getSecciones(){
    let url = "http://127.0.0.1:8000/api/get_secciones/"
    return this.http.get(url);
  }

  getNoticias(){
    let url = "http://127.0.0.1:8000/api/get_noticia/"
    return this.http.get(url);
  }

  getColegio(){
    let url = "http://127.0.0.1:8000/api/get_colegio/1/"
    return this.http.get(url);
  }

  getTelefono(){
    let url = 'http://127.0.0.1:8000/api/get_telefono/';
    return this.http.get(url);
  }

  getInicio(){
    let url = 'http://127.0.0.1:8000/api/get_pagina/';
    return this.http.get(url);
  }
}
