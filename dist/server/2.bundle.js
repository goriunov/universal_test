exports.ids=[2],exports.modules={103:function(n,e){n.exports='<section class="intro">\n  <div class= "vh_height100">\n    <div class="back-image"></div>\n    <div class="container block-align-center">\n      <h1 class="header">Live weather data for your school</h1>\n      <p class="under-header">Measure, record, and analyse live environmental data, and make it accessible to students,\n        staff and parents.</p>\n      <div class="col-xs-12 weather-kit-container container">\n        <div class=" col-lg-6 col-md-8 col-sm-12">\n          <img src="./assets/images/schools/weather-kit.jpg" class="img-responsive weather-kit-img">\n        </div>\n        <div class="col-lg-6 col-md-4 col-sm-12 text-align">\n          <p class="intro-top">INTRODUCING</p>\n          <p class="under-top">The UVLens® Weather Kit</p>\n          <p class="description">The UVLens® Weather Kit contains sensors and software to measure the local UV, temperature, rainfall, and more at your school.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class="information">\n  <div class="container information-container">\n    <div class="row info">\n      <div class="col-xs-12 col-md-6 col-sm-push-6">\n        <img src="./assets/images/schools/weather_dashboard.png" class="img-responsive image-size">\n      </div>\n      <div class="col-md-6 col-sm-pull-6 text-padding">\n        <p class="orange-header">\n          Collect <span>data</span>\n        </p>\n        <ul class="ul-text">\n          <li class="li-margin">Collect UV, rainfall, windspeed, temperature and humidity data at your school.</li>\n          <li class="li-margin">Livestream to data dashboards and use in school projects.</li>\n        </ul>\n      </div>\n    </div>\n    <div class="row info">\n      <div class="col-md-6 img-left">\n        <img src="./assets/images/schools/earth-visualisation.jpg" class="img-responsive image-size">\n      </div>\n      <div class="col-md-6 text-padding">\n        <p class="orange-header">\n          Create <span>visualisations</span>\n        </p>\n        <ul class="ul-text">\n          <li class="li-margin">The weather kit bundles software and toolkits to help you build your own visualisations.</li>\n          <li class="li-margin">Compare data accross time and locations.</li>\n        </ul>\n      </div>\n    </div>\n    <div class="row info">\n      <div class="col-md-6 col-sm-push-6">\n        <img src="./assets/images/schools/app_ipad.jpg" class="img-responsive image-size">\n      </div>\n      <div class="col-md-6 col-sm-pull-6 text-padding">\n        <p class="orange-header">\n          Stay <span>safe</span>\n        </p>\n        <ul class="ul-text">\n          <li class="li-margin">Live UV and sun safety information that is local to your school.</li>\n          <li class="li-margin">Premium UVLens® iOS and Android app license for students and teachers.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section class="order">\n  <div class="container align-container">\n    <h1 class="order-header">Order your UVLens® Weather Kit now and get started.</h1>\n    <div class="order-container">\n      <div class="row">\n        <div class="col-md-6 img-padding">\n          <img src="./assets/images/schools/weather-kit.jpg" class="img-responsive image-size">\n        </div>\n        <div class="col-md-6 text-padding">\n          <p class="grey-header">\n            Monitoring Kit\n          </p>\n          <p class="price">\n            $475\n          </p>\n          <p>\n            Get started with the equipment to monitor the environmental conditions at your school. The kit includes:\n          </p>\n          <ul class="ul-text-2">\n            <li>A weather station</li>\n            <li>Mounting hardware</li>\n            <li>Installation support</li>\n          </ul>\n          <a class="remove-underline" href="http://help.uvlens.com/article/6-weather-station-installation">\n            <div class="button-info">\n              More info...\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-md-6 img-padding">\n          <img src="./assets/images/schools/app_iphone.jpg" class="img-responsive image-size">\n        </div>\n        <div class="col-md-6 text-padding">\n          <p class="grey-header">\n            Premium App License\n          </p>\n          <p class="price">\n            <span class="line-through">$49</span> $39/month <span class="brackets">(introductory offer)</span>\n          </p>\n          <p>\n            School-wide premium license to the UVLens® app for your students and staff.\n          </p>\n          <ul class="ul-text-2">\n            <li>Live UV data at your school, and anywhere else in the country</li>\n            <li>Real-time alerts when the UV conditions change</li>\n            <li>Sunsmart educational material</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <a class="remove-underline" data-toggle="modal" data-target="#myModal">\n      <div class="button-order" angulartics2On="click" angularticsEvent="click" angularticsCategory="Order Button">\n        Order now\n      </div>\n    </a>\n\n  </div>\n</section>\n\n\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="order-label" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close close-button" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n        <h2 class="contact-header" id="order-label">Order Now</h2>\n      </div>\n      <!-- end of header -->\n      <div class="modal-body">\n\n        <p>Fill in your details below and our sales team will be in contact within the next working day.</p>\n\n        <form class="form-horizontal" (ngSubmit)="onSubmit()" [formGroup]="myForm" novalidate>\n          <div class="form-group">\n            <label class="control-label label-style" >Name *</label>\n\n              <input type="text" class="form-control" formControlName= "name" placeholder="Name" required>\n\n            <small class="text-danger" *ngIf="myForm.get(\'name\').hasError(\'required\') && myForm.get(\'name\').touched" >Name is required</small>\n\n          </div>\n\n          <div class="form-group ">\n            <label class=" control-label label-style" >Email *</label>\n\n              <input type="email" class="form-control" formControlName= "email" placeholder="Email" required>\n\n            <small class=" text-danger" *ngIf="myForm.get(\'email\').hasError(\'required\') && myForm.get(\'email\').touched">Email is required </small>\n            <small class=" text-danger" *ngIf="myForm.get(\'email\').hasError(\'pattern\') && myForm.get(\'email\').touched">Valid Email is required </small>\n\n            <!-- end of row-->\n          </div>\n\n          <div class="form-group">\n            <label class=" control-label label-style" >Phone number</label>\n\n              <input type="tel" class="form-control" formControlName= "phone" placeholder="Phone number" required>\n            <small class=" text-danger" *ngIf="myForm.get(\'phone\').hasError(\'required\') && myForm.get(\'phone\').touched">Phone Number is required </small>\n            <!-- end of row-->\n          </div>\n\n          <div class="form-group ">\n            <label class="control-label label-style" >School *</label>\n              <input type="text" class="form-control" formControlName= "school" placeholder="School" required>\n            <small class="text-danger" *ngIf="myForm.get(\'school\').hasError(\'required\') && myForm.get(\'school\').touched">School is required </small>\n\n            <!-- end of row-->\n          </div>\n          <!-- end of form group -->\n          <div class="row">\n\n            <div class="col-md-6 push-md-6 required-text ">\n              <span class="help-block custom-help"> * This field is required. </span>\n            </div>\n\n            <div class="col-md-6 pull-md-6" >\n              <button type="submit" class="btn btn-default btn-custom"  [disabled]="myForm.invalid"> SUBMIT </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <!-- end of body -->\n      <div class="modal-footer" >\n        <div id="successRegister">\n        </div>\n      </div>\n    </div>\n    <!-- end of modal content-->\n  </div>\n  <!--end of modal-dialog-->\n</div>\n\n'},80:function(n,e,o){"use strict";var t=this&&this.__decorate||function(n,e,o,t){var a,i=arguments.length,r=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,e,o,t);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(r=(i<3?a(r):i>3?a(e,o,r):a(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r},a=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},i=o(0),r=o(18),s=o(83),l=o(4),d=o(89),c=[{path:"",component:d.SchoolsAboutComponent}],m=function(){function n(){}return n=t([i.NgModule({imports:[s.CommonModule,l.ReactiveFormsModule,r.RouterModule.forChild(c)],exports:[r.RouterModule],declarations:[d.SchoolsAboutComponent],providers:[]}),a("design:paramtypes",[])],n)}();e.SchoolsAboutModule=m},82:function(n,e){"use strict";var o=function(){function n(n,e,o,t){this.body=n,this.from_email=e,this.to_email=o,this.subject=t}return n}();e.contact=o},89:function(n,e,o){"use strict";var t=this&&this.__decorate||function(n,e,o,t){var a,i=arguments.length,r=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,e,o,t);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(r=(i<3?a(r):i>3?a(e,o,r):a(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r},a=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},i=o(0),r=o(4),s=o(82),l=o(19),d=o(1),c=function(){function n(n){this.emailService=n}return n.prototype.ngOnInit=function(){d.isBrowser&&window.scrollTo(0,0),this.myForm=new r.FormGroup({name:new r.FormControl("",r.Validators.required),email:new r.FormControl("",[r.Validators.required,r.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),phone:new r.FormControl(""),school:new r.FormControl("",r.Validators.required)})},n.prototype.onSubmit=function(){var n="\n Phone: "+this.myForm.controls.phone.value+"\n Name: "+this.myForm.controls.name.value+"\n School: "+this.myForm.controls.school.value,e=new s.contact(n,this.myForm.controls.email.value);this.emailService.sendContactEmail(e,"order"),this.myForm.reset()},n=t([i.Component({selector:"app-schools",template:o(103),styles:[o(96)]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof l.EmailService&&l.EmailService)&&e||Object])],n);var e}();e.SchoolsAboutComponent=c},96:function(n,e){n.exports='.intro{\n  margin-bottom:10%;\n  position:relative;\n  text-align:center;\n}\n\n.back-image{\n  position:absolute;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  z-index:-1;\n  background:url("./assets/images/schools/bg-section.svg") no-repeat center center;\n  background-size:cover;\n  width:100%;\n}\n\n.block-align-center{\n  padding-top:10%;\n}\n\n.header{\n  color:white;\n  margin-bottom:4%;\n}\n\n.under-header{\n  color:#f9d7ce;\n  margin-bottom:5%;\n  font-size:1.5em;\n}\n\n.weather-kit-container{\n  padding:5%;\n  background-color:#1a303e;\n  box-shadow:0 12px 10px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.weather-kit-img{\n  width:100%;\n}\n\n.text-align{\n  padding-top:15%;\n}\n\n.intro-top{\n  font-weight:400;\n  color:#b7b4ba;\n  font-size:1.25em;\n  margin-bottom:5%;\n}\n\n.under-top{\n  font-weight:700;\n  color:white;\n  font-size:2em;\n  border-bottom:1px solid #fff;\n}\n\n.description{\n  color:#adb4ba;\n}\n\n.information{\n  margin-top:10%;\n}\n\n.information-container{\n  padding-top:10%;\n}\n\n.info{\n  padding-top:5%;\n  padding-bottom:5%;\n}\n\n.col-sm-push-6{\n  left:50%;\n}\n\n.col-sm-pull-6{\n  right:50%;\n}\n\n.image-size{\n  max-width:100%;\n}\n\n.orange-header{\n  font-weight:700;\n  font-size:2em;\n}\n.orange-header span{\n  color:#ff7e29;\n}\n\n.ul-text{\n  font-size:1.25em;\n  font-weight:500;\n}\n\n.li-margin{\n  margin-bottom:2%;\n}\n\n.order{\n  background:url("./assets/images/schools/bg-2.jpg") no-repeat center center;\n  background-size:cover;\n  padding-top:10%;\n  padding-bottom:10%;\n}\n\n.align-container{\n  text-align:center;\n}\n\n.order-header{\n  font-weight:700;\n  color:black;\n}\n\n.order-container{\n  margin-top:5%;\n  background-color:#fff;\n  border-radius:10px;\n}\n\n.img-padding{\n  padding:5%;\n}\n\n.text-padding{\n  padding-top:6%;\n  padding-right:5%;\n  padding-bottom:8%;\n  text-align:left;\n}\n\n.grey-header{\n  font-weight:700;\n  font-size:2em;\n}\n\n.price{\n  color:#cc0000;\n  font-size:1.25em;\n  font-weight:500;\n}\n.price .line-through{\n  text-decoration:line-through;\n}\n.price .brackets{\n  color:black;\n}\n\n.button-info{\n  background-color:#f27420;\n  padding:20px 5px;\n  border-radius:50px;\n  width:160px;\n  margin-top:5%;\n  color:#fff;\n  text-align:center;\n}\n.button-info:focus{\n  outline:none;\n}\n.button-info:hover{\n  background:#fa860a;\n  cursor:pointer;\n}\n\n.required-text{\n  text-align:right;\n}\n\n.close-button{\n  font-size:2rem;\n  color:white;\n}\n\nform .ng-invalid.ng-touched{\n  border:2px solid #d9534f;\n}\n\n.contact-header{\n  text-align:center;\n  margin-top:10px;\n  height:100%;\n  color:white;\n  text-transform:uppercase;\n  font-size:1.8em;\n}\n\n.modal-header{\n  background:#253b48;\n  padding:20px 30px;\n  height:100px;\n}\n\n.modal-body{\n  padding:20px 50px;\n}\n\n.label-style{\n  font-size:1.2rem;\n  font-weight:700;\n}\n\n.custom-help{\n  color:#737373;\n}\n\n.btn-custom{\n  color:#fff;\n  background:#f60;\n  border:none;\n  border-radius:50px;\n  font-size:0.8rem;\n  width:115px;\n  height:45px;\n}\n.btn-custom:hover{\n  background:#fa860a;\n  -webkit-transition:background .25s ease;\n  transition:background .25s ease;\n}\n\n.modal-footer{\n  background:#253b48;\n  height:80px;\n}\n\n.modal-content{\n  font-family:Montserrat,sans-serif;\n}\n\n.button-order{\n  background-color:#f27420;\n  padding:20px 5px;\n  border-radius:50px;\n  margin-top:5%;\n  width:60%;\n  margin-left:auto;\n  margin-right:auto;\n  font-size:1.25em;\n  color:#fff;\n  text-align:center;\n}\n.button-order:focus{\n  outline:none;\n}\n.button-order:hover{\n  background:#fa860a;\n  cursor:pointer;\n}\n\n.remove-underline{\n  text-decoration:none;\n}\n\n@media screen and (max-width: 991px){\n  .text-align{\n    padding-top:3%;\n  }\n\n  .information-container{\n    padding-top:0%;\n  }\n\n  .block-align-center{\n    padding-top:15%;\n  }\n}\n@media screen and (max-width: 767px){\n  .required-text{\n    text-align:initial;\n  }\n\n  .weather-kit-container{\n    text-align:center;\n    padding-right:15px;\n    padding-left:15px;\n  }\n\n  .intro-top{\n    font-size:1em;\n    margin-top:5%;\n  }\n\n  .under-header{\n    font-size:1em;\n  }\n\n  .under-top{\n    font-weight:700;\n    font-size:1.5em;\n    padding-bottom:5%;\n  }\n\n  .col-sm-push-6{\n    left:0%;\n  }\n\n  .col-sm-pull-6{\n    right:0%;\n  }\n\n  .order-header{\n    font-size:200%;\n    font-weight:500;\n  }\n\n  .img-padding{\n    padding:10%;\n  }\n\n  .text-padding{\n    padding-left:10%;\n  }\n\n  .button-info{\n    margin:7.5% auto 2.5%;\n  }\n}\n@media only screen and (max-width: 310px){\n  .modal-header{\n    height:120px;\n  }\n}\n@media screen and (max-width: 500px){\n  .block-align-center{\n    padding-top:70px;\n  }\n}\n'}};
//# sourceMappingURL=2.bundle.js.map