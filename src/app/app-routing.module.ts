import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  {
    //  path: 'add',
    //  component: AddRestoComponent,
    path: 'add',
    loadChildren: () => import('./add-resto/add-resto.module').then(m =>m.AddRestoModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
   // path: 'register',
   // component: RegisterComponent,
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m =>m.RegisterModule)
  },
  {
    path: 'update/:id',
    component: UpdateRestoComponent,
  },
  {
    path: '',
    component: ListRestoComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
