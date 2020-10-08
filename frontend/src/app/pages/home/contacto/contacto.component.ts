import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt,  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }
  lat: number = -2.1278638;
  lng: number = -79.9306009;
  zoom: number = 15;
  faMapMarkedAlt = faMapMarkedAlt;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube
  ngOnInit(): void {
  }

}
