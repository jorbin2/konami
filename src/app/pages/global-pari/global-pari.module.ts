import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalPariPageRoutingModule } from './global-pari-routing.module';

import { GlobalPariPage } from './global-pari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalPariPageRoutingModule
  ],
  declarations: [GlobalPariPage]
})
export class GlobalPariPageModule {}
