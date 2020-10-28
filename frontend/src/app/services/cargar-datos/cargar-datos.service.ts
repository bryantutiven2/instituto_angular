import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CargarDatosService {
  httpOptions: any;
  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*"
      })
    }
   }

  getSecciones(){
    let url = "https://provinciarios2020.pythonanywhere.com/api/get_secciones/"
    return this.http.get(url, this.httpOptions);
  }

  getNoticias(){
    let url = "https://provinciarios2020.pythonanywhere.com/api/get_noticia/"
    return this.http.get(url, this.httpOptions);
  }

  getColegio(){
    let url = "https://provinciarios2020.pythonanywhere.com/api/get_colegio/1/"
    return this.http.get(url, this.httpOptions);
  }

  getTelefono(){
    let url = 'https://provinciarios2020.pythonanywhere.com/api/get_telefono/';
    return this.http.get(url, this.httpOptions);
  }

  getInicio(){
    let url = 'https://provinciarios2020.pythonanywhere.com/api/get_pagina/';
    return this.http.get(url, this.httpOptions);
  }
}
