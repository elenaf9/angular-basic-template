import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [HomeComponent, CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ClarityModule
  ],
  exports: [HomeComponent, CoreComponent]
})
export class CoreModule { }
