import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {contact} from "../../shared/contact";
import {EmailService} from "../../shared/email.service";

@Component({
  selector:'app-contact',
  templateUrl:'./contact.component.html',
  styleUrls:['./contact.component.css']
})

export class ContactComponent implements OnInit{
  myForm: FormGroup;
  constructor(private emailService: EmailService){}
  ngOnInit(){
    this.myForm = new FormGroup({
      'name': new FormControl('' , Validators.required),
      'email':new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'phoneNumber': new FormControl('' , Validators.required),
      'message': new FormControl('' , Validators.required)
    });
  }

  onSubmit(){
    let body = "\n Phone: " + this.myForm.controls['phoneNumber'].value + "\n Name: " + this.myForm.controls['name'].value + " \n Message: " + this.myForm.controls['name'].value;
    let contactUser: contact = new contact(body  , this.myForm.controls['email'].value);
    this.emailService.sendContactEmail(contactUser , 'contact');
    this.myForm.reset();
  }

}
