import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../../models/contact/contact';
import { ContactService } from '../http/contact.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateContactDto } from '../../models/contact/create-contact-dto';
import { UpdateContactDto } from '../../models/contact/update-contact-dto';

@Injectable({
  providedIn: 'root'
})
export class CrudContactService {

  public contactList: BehaviorSubject<Contact[] | null> = new BehaviorSubject<Contact[] | null >(null);


  constructor(
    private _contactService: ContactService,
    private fb: FormBuilder,
    ) { }

    public createContactForm (){
    return  this.fb.group({
        prenom: ['', Validators.required],
        nom: ['', Validators.required],
        telephone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],

      });
    }

    public createContact(payload : CreateContactDto){
      return this._contactService.addNewContact(payload);
    }

    public updateContact(id: number, payload: UpdateContactDto){
      return this._contactService.updateContactById(id,payload);
    }

    public deleteContact(id: number){
      return this._contactService.deleteContactById(id);
    }

    public getAllUsers() {
    if (this.contactList.getValue() === null) {
      this._contactService.getAllContacts()
        .subscribe((response: Contact[]) => {
          this.contactList.next(response);
        });
    }
  }


}
