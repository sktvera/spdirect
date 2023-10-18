import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PictureModaRoutingModule } from './pictureModal-routing.module';
import { PictureModalComponent } from './pictureModal.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PictureModaRoutingModule,
    IonicModule.forRoot()
  ],
  declarations: [
 
    PictureModalComponent,

    
  ]
})
export class PictureModalModule {}
