import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt,  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CorreoService } from 'src/app/services/correo/correo.service'
import { CargarDatosService } from 'src/app/services/cargar-datos/cargar-datos.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _serviceCorreo: CorreoService,
    private _serviceDatos: CargarDatosService
  ) { }

  lat: number = -2.2055002;
  lng: number = -79.9122128;
  zoom: number = 15;
  faMapMarkedAlt = faMapMarkedAlt;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube
  formulario_correo: FormGroup
  colegio: any = []
  telefonos: any = []
  ngOnInit(): void {
    this.formulario_correo = this.formBuilder.group({
      correo: [''],
      mensaje: [''],
      nombre: ['']
    })

    this.contacto()
    this.telefono()
  }

  submit(){
    let datos = new FormData()
    datos.append('nombre', this.formulario_correo.value.nombre)
    datos.append('correo', this.formulario_correo.value.correo)
    datos.append('mensaje', this.formulario_correo.value.mensaje)

    this._serviceCorreo.enviarCorreo(datos).subscribe(
      (resp)=>{
        alert('Solicitud Enviado con Éxito')
      },
      (error)=>{
        alert('Error al enviar el correo')
      }
    )
  }

  telefono(){
    this._serviceDatos.getTelefono().subscribe(
      (resp)=>{
        this.telefonos = resp;
      },
      (error) =>{
        console.log(error)
      }
    )
  }

  contacto(){
    this._serviceDatos.getColegio().subscribe(
      (resp) => {
        this.colegio = resp
      },
      (error) =>{
        console.log(error)
      }
    )
  }
}
