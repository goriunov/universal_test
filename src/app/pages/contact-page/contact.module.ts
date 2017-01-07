import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import {ReactiveFormsModule} from "@angular/forms";





const routes: Routes = [
  { path: '', component: ContactComponent},

];

@NgModule({

  imports: [
    // UniversalModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ],
  declarations: [
   ContactComponent
  ],
  providers: []
})

export class ContactModule { }
