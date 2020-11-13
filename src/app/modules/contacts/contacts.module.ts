import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactTypeLabelPipe } from './pipes/contact-type-label.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactsComponent, ContactListComponent, ContactDetailsComponent, ContactTypeLabelPipe],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    CommonModule,
    ClarityModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactTypeLabelPipe],
  exports: [ContactDetailsComponent]
})
export class ContactsModule { }
