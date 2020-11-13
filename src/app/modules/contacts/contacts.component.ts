import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  routes = [
    {
      path: 'list',
      label: 'Overview'
    },
    {
      path: 'details',
      label: 'Details'
    },
  ];

  activities = {
    edit: {label: 'edit', icon: 'edit'}
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchTab(tab: string): void {
    this.router.navigate(['contact', tab]);
  }

}
