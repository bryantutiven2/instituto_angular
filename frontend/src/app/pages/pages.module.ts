import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';


import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './home/inicio/inicio.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { ServicioComponent } from './home/servicio/servicio.component';
import { AcademicoComponent } from './home/academico/academico.component';
import { NoticiaComponent } from './home/noticia/noticia.component';
import { ContactoComponent } from './home/contacto/contacto.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeccionesComponent } from './home/secciones/secciones.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [        
        HomeComponent, InicioComponent, NosotrosComponent, ServicioComponent, AcademicoComponent, NoticiaComponent, ContactoComponent, SeccionesComponent,
    ],
    exports: [
        HomeComponent,
        InicioComponent,
        SeccionesComponent,
        NosotrosComponent,
        NoticiaComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule, 
        HttpClientModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        NgbModule,
        MatTabsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD4O-t27PSlyGg2_K6fHbPKlO9Tu_x5h-4',
            libraries: ['places', 'drawing', 'geometry']
          })
    ],
    
})
export class PagesModule { }