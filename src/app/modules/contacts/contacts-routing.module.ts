import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: 'list',
        component: ContactListComponent
      },
      {
        path: 'details/:id/edit',
        component: ContactDetailsComponent
      },
      {
        path: 'details/:id',
        component: ContactDetailsComponent
      },
      {
        path: 'details',
        component: ContactDetailsComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
