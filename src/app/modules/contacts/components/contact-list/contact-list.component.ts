import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../../../shared/services/contact.service';
import { Uuid } from '../../models/contact';
import { ContactTypeLabelPipe } from '../../pipes/contact-type-label.pipe';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService,
              private contactTypeLabel: ContactTypeLabelPipe,
              private router: Router
    ) { }

  contacts: any[] = [];

  tableHeader = [
    { key: 'id', label: 'Id'},
    { key: 'name', label: 'Name'},
    { key: 'type', label: 'Type', pipe: ''},
  ];

  ngOnInit(): void {
    this.reloadContacts();
  }

  reloadContacts(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts.map((c: any) => {
        c.type = this.contactTypeLabel.transform(c.type);
        return c;
      });
    });
  }

  onEditClick(id: Uuid): void {
    this.router.navigate(['contact', 'details', id, 'edit']);

  }

  onDetailsClick(id: Uuid): void {
    this.router.navigate(['contact', 'details', id]);

  }

  onDeleteClick(id: Uuid): void {
    this.contactService.deleteContact(id).subscribe({
      next: this.reloadContacts.bind(this)
    });
  }

}
