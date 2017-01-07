import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home-page/home.component";

declare var System: any;

export function getContentModule() {
  return System.import('./pages/contact-page/contact.module')
    .then(mod => mod['ContactModule']);
}
export function getAboutModule() {
  return System.import('./pages/about-page/about.module')
    .then(mod => mod['AboutModule']);
}
export function getSchoolAboutModule() {
  return System.import('./pages/schools/about-page/SchoolsAbout.module')
    .then(mod => mod['SchoolsAboutModule']);
}

export function getSchoolRegistrationModule() {
  return System.import('./pages/schools/registration-page/SchoolsRegistration.module')
    .then(mod => mod['SchoolsRegistrationModule']);
}


export const router: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  // {path: 'about' , component: AboutComponent},
  {path: 'about', loadChildren: getAboutModule },
  {path: 'schools' ,redirectTo: 'schools/about' , pathMatch:'full'},
  {path: 'schools' ,
    children: [
      {path: 'about' , loadChildren: getSchoolAboutModule},
      {path: 'registration', loadChildren: getSchoolRegistrationModule}
    ]},
  // {path: 'widget', component: WidgetComponent},
  // {path: 'contact', component: ContactComponent}
  {path: 'contact', loadChildren: getContentModule }
];
