import { NgBootstrapWrapperModule } from './wrappers/ng-bootstrap/ng-bootstrap-wrapper/ng-bootstrap-wrapper.module';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/user/users/users.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,

    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapWrapperModule,
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
