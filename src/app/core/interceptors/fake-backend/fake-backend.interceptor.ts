import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import mockContacts from './mock-contacts.json';
import { Contact, Uuid } from 'src/app/modules/contacts/models/contact';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  contacts = mockContacts as Contact[];

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url, method, headers, body } = request;
    switch (true) {
      case url.endsWith('/contact/all') && method === 'GET':
          return this.getContacts();
      case url.match(/\/contact\/\d+$/) && method === 'GET':
          return this.getContact(this.getId(url));
      case url.endsWith('/contact') && method === 'POST':
          return this.createContact(body as Contact);
      case url.match(/\/contact\/\d+$/) && method === 'PUT':
          return this.updateContact(this.getId(url), body as Contact);
      case url.match(/\/contact\/\d+$/) && method === 'DELETE':
          return this.deleteContact(this.getId(url));
      default:
          // pass through any requests not handled above
          return next.handle(request);
    }
  }

  getId(url: any): Uuid {
    const urlValues = url.split('/');
    return urlValues[urlValues.length - 1];
  }

  makeId(): Uuid {
    const length = 16;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


  getContacts(): Observable<HttpResponse<Contact[]>>{
    return new Observable(observer => observer.next(new HttpResponse({ status: 200, body: this.contacts })));
  }

  getContact(id: Uuid): Observable<HttpResponse<Contact>>{
    const contact = this.contacts.find(c => c.id === id);
    if (contact) {
      return new Observable(observer => observer.next(new HttpResponse({ status: 200, body: contact})));
    } else {
      return new Observable(observer => observer.next(new HttpResponse({ status: 404, statusText: 'Not Found'})));
    }
  }

  createContact(contact: Contact): Observable<HttpResponse<Contact>>{
    const newContact = new Contact(this.makeId(), contact.name, contact.type);
    this.contacts.push(newContact);
    return new Observable(observer => observer.next(new HttpResponse({ status: 200, body: newContact })));
  }

  updateContact(id: Uuid, updateContact: Contact): Observable<HttpResponse<Contact>>{
    if (id !== updateContact.id) {
      return new Observable(observer => observer.next(new HttpResponse({ status: 400, statusText: 'Path id does not match contact id' })));
    }
    this.contacts = this.contacts.map(c => c.id === id ? updateContact : c);
    return new Observable(observer => observer.next(new HttpResponse({ status: 200, body: updateContact})));
  }

  deleteContact(id: Uuid): Observable<HttpResponse<void>>{
    console.log('delete')
    this.contacts = this.contacts.filter(c => c.id !== id);
    return new Observable(observer => observer.next(new HttpResponse({ status: 204})));
  }
}
