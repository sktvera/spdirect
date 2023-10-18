import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowmorePage } from './knowmore.page';

const routes: Routes = [
  {
    path: '',
    component: KnowmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowmorePageRoutingModule {}
