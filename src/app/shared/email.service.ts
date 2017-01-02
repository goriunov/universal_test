import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {contact} from "./contact";

import 'rxjs/Rx'


@Injectable()

export class EmailService{
  constructor(private http:Http){}

  sendContactEmail(contactUser: contact, type:string){
    // contactUser.to_email = 'enquiries@spark64.com';
    contactUser.to_email = 'goriunovd@gmail.com';

    switch (type){
      case 'contact':
        contactUser.subject = 'Contact form';
        break;
      case 'registration':
        contactUser.subject = 'Registration form';
        break;
      case 'order':
        contactUser.subject = 'Order form';
        break;
    }


    const body = JSON.stringify(contactUser);
    const headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('http://uvlens-website-backend.azurewebsites.net/sendmail' , body , {headers:headers})
      .subscribe((data)=>{
        console.log(data)
      });
  }
}
