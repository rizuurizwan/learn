import { Routes } from '@angular/router';
import { Master1Component } from './master1/master1.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'master1',
    pathMatch:'full'
  },
  {
    path:'master1',
    component:Master1Component
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'client',
    component:ClientComponent
  },
  {
    path:'demo',
    component:DemoComponent
  }
];
