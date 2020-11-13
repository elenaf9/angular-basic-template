import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact, Uuid } from '../../modules/contacts/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiEndpoint = environment.apiURL + '/contact';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiEndpoint}/all`);
  }

  getContactbyId(id: Uuid): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiEndpoint}/${id}`);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiEndpoint}`, contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiEndpoint}/${contact.id}`, contact);
  }

  deleteContact(id: Uuid): Observable<void> {
    return this.http.delete<void>(`${this.apiEndpoint}/${id}`);
  }
}
