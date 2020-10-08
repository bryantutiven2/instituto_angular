import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';



const appRoutes: Routes = [
    {
    path: 'home', component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {
        path:'',redirectTo: 'home', pathMatch: 'full'
    },
    {path: '**', redirectTo: '/404'}
    
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true,scrollPositionRestoration: 'enabled'  });