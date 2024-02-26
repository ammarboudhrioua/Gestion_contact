import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CrudContactService } from '../../../services/FacadePattern/crud-contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.scss'
})
export class UpdateContactComponent {
  contactForm!: FormGroup ;
  // id!:number;

  // RouterInput in Angular v16+
  @Input() id!: number;


  constructor(
    private _curdContactService : CrudContactService,
    // private _activatedRoute : ActivatedRoute
    ) { }



  ngOnInit(): void {

    //********** Types de capture des variables via l'url **********

    //  1-  ActivatedRoute
    //  this.id=this._activatedRoute.snapshot.params["id"];

    //  2- Observable
    // this._activatedRoute.params.subscribe(params => {
    //   this.id=params["id"]
    // })


    this.contactForm =  this._curdContactService.createContactForm()
  }

  onSubmit() {
    if (this.contactForm.valid) {

      this._curdContactService.updateContact(this.id,this.contactForm.value).pipe(takeUntilDestroyed())
      .subscribe(
        (response) => {

        }
      );
    }
  }
}