import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelsPage } from './channels.page';

const routes: Routes = [
  {
    path: '',
    component: ChannelsPage,
    children: [
      {
        path: 'list', // Ruta para la pestaña "Lista"
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'map', // Ruta para la pestaña "Mapa"
        loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'myRoute', // Ruta para la pestaña "Mi Ruta"
        loadChildren: () => import('./my-route/my-route.module').then(m => m.MyRoutePageModule)
      },
      {
        path: '', // Ruta raíz que redirige a "list" por defecto
        redirectTo: 'list',
        pathMatch: 'full'
      },
  
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsPageRoutingModule {}
