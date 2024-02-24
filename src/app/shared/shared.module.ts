import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const shared =[ CommonModule,ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [],
  imports: [shared
  ],
  exports:[
    shared
  ]

})
export class SharedModule { }
