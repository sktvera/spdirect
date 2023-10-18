import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRoutePage } from './my-route.page';

const routes: Routes = [
  {
    path: '',
    component: MyRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRoutePageRoutingModule {}
