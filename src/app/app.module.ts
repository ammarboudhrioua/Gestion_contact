import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
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
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
