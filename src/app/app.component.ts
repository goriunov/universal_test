import { Component } from '@angular/core';
import {Angulartics2GoogleAnalytics} from "angulartics2";
import {WidgetConnectionService} from "./widget/shared/widgetConection.service";
import {isBrowser} from "angular2-universal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics , private widgetService: WidgetConnectionService) {
    if(isBrowser) {
      this.widgetService.locationOnLoad();
    }
  }
}
