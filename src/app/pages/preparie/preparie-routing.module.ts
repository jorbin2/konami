import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepariePage } from './preparie.page';

const routes: Routes = [
  {
    path: '',
    component: PrepariePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepariePageRoutingModule {}
