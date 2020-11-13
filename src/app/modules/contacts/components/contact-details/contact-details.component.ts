import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../../../shared/services/contact.service';
import { Contact, ContactType } from '../../models/contact';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private location: Location
  ) { }

  currentContact: Contact;

  isNewContact = true;
  isEditMode = false;

  contactFormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    type: new FormControl()
  });

  contactTypes = Object.values(ContactType);


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const contactId = this.route.snapshot.params.id;
      if (contactId) {
        this.contactService.getContactbyId(contactId).subscribe(contact => {
          this.currentContact = contact;
          this.contactFormGroup.setValue({type: contact.type, name: contact.name});
          this.isNewContact = false;
        });
        if (this.router.url.split('/').pop() === 'edit') {
          this.isEditMode = true;
        }
      }
    });
  }

  onSaveClick(): void {
    if (this.isNewContact) {
      const newContact = this.contactFormGroup.getRawValue();
      this.contactService.createContact(new Contact('', newContact.name, newContact.value)).subscribe();
    } else {
      Object.assign(this.currentContact, this.contactFormGroup.getRawValue());
      this.contactService.updateContact(this.currentContact).subscribe();
    }
    this.navigateBack();
  }

  navigateBack(): void {
    this.location.back();
  }

}
