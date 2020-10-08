import { Component, OnInit } from '@angular/core';
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  faPhone = faPhone;
  faClock = faClock;
  constructor() { }

  ngOnInit(): void {
  }

}
