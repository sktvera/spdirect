import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRoutePageRoutingModule } from './my-route-routing.module';
import{  ShareDataService } from '../../../share-data.service'

import { MyRoutePage } from './my-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRoutePageRoutingModule
  ],
  declarations: [MyRoutePage],
  providers: [
    ShareDataService, // Agrega ShareDataService a la lista de proveedores
  ],
})
export class MyRoutePageModule {}
