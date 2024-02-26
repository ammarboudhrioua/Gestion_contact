import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgBootstrapWrapperModule } from '../wrappers/ng-bootstrap/ng-bootstrap-wrapper/ng-bootstrap-wrapper.module';

const shared = [CommonModule, ReactiveFormsModule, FormsModule, BrowserModule, AppRoutingModule, NgBootstrapWrapperModule];

@NgModule({
  declarations: [],
  imports: [shared],
  exports: [shared],
})
export class SharedModule {}
