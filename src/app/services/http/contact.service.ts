import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact/contact';
import { CreateContactDto } from '../../models/contact/create-contact-dto';
import { Message } from '../../models/message';
import { UpdateContactDto } from '../../models/contact/update-contact-dto';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _baseUrl = 'http://localhost:3000';
  constructor(
    private _http: HttpClient
  ) { }


  public getAllContacts():Observable<Contact[]>{
    return this._http.get<Contact[]>(`${this._baseUrl}/contacts`);
  }
  public addNewContact(payload: CreateContactDto): Observable<Message> {
    return this._http.post<Message>(`${this._baseUrl}/contacts`, payload);
  }

  public getContactById(id: number): Observable<Contact> {
    // template string ``
    return this._http.get<Contact>(`${this._baseUrl}/contacts/${id}`); // this._baseUrl + '/users/' + id
  }

  public updateContactById(id: number, payload: UpdateContactDto): Observable<Message> {
    return this._http.put<Message>(`${this._baseUrl}/contacts/${id}`, payload);
  }

  public deleteContactById(id: number): Observable<Message> {
    return this._http.delete<Message>(`${this._baseUrl}/contacts/${id}`);
  }
}