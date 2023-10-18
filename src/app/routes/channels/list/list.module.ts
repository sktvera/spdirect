import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';


import { FiltersComponent } from 'src/app/routes/channels/list/filters/filters.component';
import { OrderingComponent } from 'src/app/routes/channels/list/ordering/ordering.component';
import { PictureModalComponent } from 'src/app/routes/channels/list/pictureModal/pictureModal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    IonicModule.forRoot()
  ],
  declarations: [
    FiltersComponent,
    ListPage,
    OrderingComponent,
    PictureModalComponent
    
  ]
})
export class ListPageModule {}
