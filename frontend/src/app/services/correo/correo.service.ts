import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(
    private http: HttpClient,
  ) { }

  enviarCorreo(datos: FormData){
    let url = 'http://127.0.0.1:8000/api/enviar_correo/';
    return this.http.post(url, datos);
  }
}
