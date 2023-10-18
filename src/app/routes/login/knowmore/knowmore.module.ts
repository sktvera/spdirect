import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KnowmorePageRoutingModule } from './knowmore-routing.module';

import { KnowmorePage } from './knowmore.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, ReactiveFormsModule,
    KnowmorePageRoutingModule,
    TranslateModule
  ],
  declarations: [KnowmorePage]
})
export class KnowmorePageModule {
  constructor() {

  }

}
