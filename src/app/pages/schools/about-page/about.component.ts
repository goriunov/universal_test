import {Component, OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {contact} from "../../../shared/contact";
import {EmailService} from "../../../shared/email.service";
import {isBrowser} from "angular2-universal";

@Component({
    selector: 'app-schools',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})


export class SchoolsAboutComponent implements OnInit{
  myForm: FormGroup;

  constructor(private emailService: EmailService){}
  ngOnInit() {
    if(isBrowser){
      window.scrollTo(0, 0);
    }
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      phone: new FormControl(''),
      school: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    let body = "\n Phone: " + this.myForm.controls['phone'].value + "\n Name: " + this.myForm.controls['name'].value + "\n School: " + this.myForm.controls['school'].value ;
    let contactUser: contact = new contact(body  , this.myForm.controls['email'].value);
    this.emailService.sendContactEmail(contactUser , 'order');
    this.myForm.reset();
  }
}
