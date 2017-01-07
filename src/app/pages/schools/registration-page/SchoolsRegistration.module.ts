import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration.component";





const routes: Routes = [
  { path: '', component: RegistrationComponent},

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
   RegistrationComponent
  ],
  providers: []
})

export class SchoolsRegistrationModule { }
