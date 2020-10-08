import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';

import { PagesComponent } from './pages/pages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyD4O-t27PSlyGg2_K6fHbPKlO9Tu_x5h-4',
        libraries: ['places', 'drawing', 'geometry']
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
