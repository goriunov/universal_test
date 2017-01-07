// /**
//  * This file and `main.node.ts` are identical, at the moment(!)
//  * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
//  * If you want your code to be completely Universal and don't need that
//  * You can also just have 1 file, that is imported into both
//  * client.ts and server.ts
//  */
//
// import { NgModule } from '@angular/core';
// import {UniversalModule, isBrowser, isNode} from 'angular2-universal';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { AppComponent } from './index';
// import {HeaderComponent} from "./general-components/header/header.component";
// import {FooterComponent} from "./general-components/footer/footer.component";
// import {Routes, RouterModule} from "@angular/router";
// import {HomeComponent} from "./pages/home-page/home.component";
// import {AboutComponent} from "./pages/about-page/about.component";
// import {DevelopersComponent} from "./pages/about-page/developers/developers.component";
// import {FoundersComponent} from "./pages/about-page/founders/founders.component";
// import {DescriptionComponent} from "./pages/about-page/description/description.component";
// import {SchoolsAboutComponent} from "./pages/schools/about-page/about.component";
// import {RegistrationComponent} from "./pages/schools/registration-page/registration.component";
// import {EmailService} from "./shared/email.service";
// import {ContactComponent} from "./pages/contact-page/contact.component";
// import {WidgetComponent} from "./widget/widget.component";
// import {MapComponent} from "./widget/map/map.component";
// import {WheelComponent} from "./widget/wheel/wheel.component";
// import {WidgetConnectionService} from "./widget/shared/widgetConection.service";
//
// import { AgmCoreModule } from "angular2-google-maps/core";
// import {Angulartics2Module, Angulartics2GoogleAnalytics} from "angulartics2";
// import {Ng2PageScrollModule} from "ng2-page-scroll";
//
//
//
// const router: Routes = [
//   {path: '' , redirectTo: 'home' , pathMatch: 'full'},
//   {path: 'home' , component: HomeComponent},
//   {path: 'about' , component: AboutComponent},
//   // {path: 'about', loadChildren: './pages/about-page/about.module#AboutModule' },
//   {path: 'schools' ,redirectTo: 'schools/about' , pathMatch:'full'},
//   {path: 'schools' ,
//     children: [
//       {path: 'about' , component:SchoolsAboutComponent},
//       {path: 'registration', component:RegistrationComponent}
//     ]},
//   // {path: 'widget', component: WidgetComponent},
//   {path: 'contact', component: ContactComponent}
// ];
//
//
//
// /**
//  * Top-level NgModule "container"
//  */
// @NgModule({
//   /** Root App Component */
//   bootstrap: [ AppComponent ],
//   /** Our Components */
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     FooterComponent,
//     HomeComponent,
//     AboutComponent,
//     DevelopersComponent,
//     FoundersComponent,
//     DescriptionComponent,
//     RegistrationComponent,
//     SchoolsAboutComponent,
//     ContactComponent,
//
//     /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
//     WidgetComponent,
//     MapComponent,
//     WheelComponent
//   ],
//   imports: [
//     /**
//      * NOTE: Needs to be your first import (!)
//      * BrowserModule, HttpModule, and JsonpModule are included
//      */
//     UniversalModule,
//     FormsModule,
//     ReactiveFormsModule,
//     /**
//      * using routes
//      */
//     RouterModule.forRoot(router, {useHash: false}),
//
//     /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
//     Ng2PageScrollModule.forRoot(),
//     AgmCoreModule.forRoot({
//       apiKey: "AIzaSyCMysJ3MutKKAWC__74K9tzI0aVckVyoE0",
//       libraries: ["places"]
//     }),
//     Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
//   ],
//   providers: [
//     { provide: 'isBrowser', useValue: isBrowser },
//     { provide: 'isNode', useValue: isNode },
//     EmailService,
//
//     /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
//     WidgetConnectionService
//   ]
// })
// export class AppModule {
//
// }

/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import {UniversalModule, isBrowser, isNode} from 'angular2-universal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './index';
import {HeaderComponent} from "./general-components/header/header.component";
import {FooterComponent} from "./general-components/footer/footer.component";
import { RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home-page/home.component";
import {EmailService} from "./shared/email.service";
import {WidgetComponent} from "./widget/widget.component";
import {MapComponent} from "./widget/map/map.component";
import {WheelComponent} from "./widget/wheel/wheel.component";
import {WidgetConnectionService} from "./widget/shared/widgetConection.service";

import { AgmCoreModule } from "angular2-google-maps/core";
import {Angulartics2Module, Angulartics2GoogleAnalytics} from "angulartics2";
import {Ng2PageScrollModule} from "ng2-page-scroll";
import {router} from "./app.routing";

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

    /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
    WidgetComponent,
    MapComponent,
    WheelComponent
  ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * BrowserModule, HttpModule, and JsonpModule are included
     */
    UniversalModule,
    FormsModule,
    ReactiveFormsModule,
    /**
     * using routes
     */
    RouterModule.forRoot([], { useHash: false }),
    RouterModule.forChild(router),

    /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
    Ng2PageScrollModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCMysJ3MutKKAWC__74K9tzI0aVckVyoE0",
      libraries: ["places"]
    }),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),

  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode },
    EmailService,

    /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
    WidgetConnectionService
  ]
})
export class AppModule {

}
