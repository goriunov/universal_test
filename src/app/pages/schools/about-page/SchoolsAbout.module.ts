import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SchoolsAboutComponent} from "./about.component";





const routes: Routes = [
  { path: '', component: SchoolsAboutComponent},

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
   SchoolsAboutComponent
  ],
  providers: []
})

export class SchoolsAboutModule { }
