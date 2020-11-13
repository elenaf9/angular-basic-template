import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'contact',
        loadChildren: () => import('../modules/contacts/contacts.module').then(m => m.ContactsModule),
      },
      {
        path: '**',
        redirectTo: 'contact'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contact'
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
