import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';




const pagesRoutes: Routes = [
    
   
    { path: 'inicio', component: HomeComponent, data: { titulo: 'inicio' } 
    },

    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );