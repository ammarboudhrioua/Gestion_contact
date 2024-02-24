import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'contacts',
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // RouterInput in Angular v16
    {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
