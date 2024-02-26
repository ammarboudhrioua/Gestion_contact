import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CrudContactService } from '../../../services/FacadePattern/crud-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {
  contactForm!: FormGroup ;
  constructor(

    private _curdContactService : CrudContactService,

    ) { }



  ngOnInit(): void {
    this.contactForm =  this._curdContactService.createContactForm()
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const payload = this.contactForm.value;

      this._curdContactService.createContact(payload).pipe(takeUntilDestroyed())
      .subscribe(
        (response) => {

        }
      );
    }
  }



}
