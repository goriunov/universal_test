import { NgModule } from '@angular/core';
import { AboutComponent }   from './about.component';
import { FoundersComponent } from "./founders/founders.component";
import { DevelopersComponent } from "./developers/developers.component";
import { DescriptionComponent } from "./description/description.component";
// import {  } from "angular2-universal";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";



const routes: Routes = [
  { path: '', component: AboutComponent },

];

@NgModule({

  imports: [
    // UniversalModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ],
  declarations: [
    AboutComponent,
    FoundersComponent,
    DevelopersComponent,
    DescriptionComponent
  ],
  providers: []
})

export class AboutModule { }
