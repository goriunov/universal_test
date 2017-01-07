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
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home-page/home.component";
import {EmailService} from "./shared/email.service";
import {WidgetComponent} from "./widget/widget.component";
import {MapComponent} from "./widget/map/map.component";
import {WheelComponent} from "./widget/wheel/wheel.component";
import {WidgetConnectionService} from "./widget/shared/widgetConection.service";

import { AgmCoreModule } from "angular2-google-maps/core";
import {Angulartics2Module, Angulartics2GoogleAnalytics} from "angulartics2";
import {Ng2PageScrollModule} from "ng2-page-scroll";
import {IdlePreload, IdlePreloadModule} from "@angularclass/idle-preload";
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
    IdlePreloadModule.forRoot(),
    RouterModule.forRoot([], { useHash: false , preloadingStrategy: IdlePreload }),
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
