import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { ClarityModule } from '@clr/angular';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, ActivityBarComponent, TableComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],
  exports: [NavbarComponent, ActivityBarComponent, TableComponent]
})
export class SharedModule { }
