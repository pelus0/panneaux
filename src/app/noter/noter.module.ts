import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoterPage } from './noter.page';
import {IonicRatingModule} from 'ionic-rating';

const routes: Routes = [
  {
    path: '',
    component: NoterPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        IonicRatingModule
    ],
  declarations: [NoterPage]
})
export class NoterPageModule {}
