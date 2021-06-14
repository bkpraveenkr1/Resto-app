import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRestoRoutingModule } from './add-resto-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddRestoRoutingModule
  ]
})
export class AddRestoModule {
  constructor(){
    console.log('app resto module loaded')
  }
 }
