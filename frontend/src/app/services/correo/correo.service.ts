import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  httpOptions
  constructor(
    private http: HttpClient,
  ) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*"
      })
    }
  }

  enviarCorreo(datos: FormData){
    let url = 'https://provinciarios2020.pythonanywhere.com/api/enviar_correo/';
    return this.http.post(url, datos, this.httpOptions);
  }
}
