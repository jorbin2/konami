import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepariePageRoutingModule } from './preparie-routing.module';

import { PrepariePage } from './preparie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepariePageRoutingModule
  ],
  declarations: [PrepariePage]
})
export class PrepariePageModule {}
