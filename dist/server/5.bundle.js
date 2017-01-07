exports.ids = [5];
exports.modules = {

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(18);
var common_1 = __webpack_require__(98);
var contact_component_1 = __webpack_require__(87);
var forms_1 = __webpack_require__(4);
var routes = [
    { path: '', component: contact_component_1.ContactComponent },
];
var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        core_1.NgModule({
            imports: [
                // UniversalModule,
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: [
                contact_component_1.ContactComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContactModule);
    return ContactModule;
}());
exports.ContactModule = ContactModule;
//# sourceMappingURL=C:/Users/goriunov/Desktop/Work/uv-web-app/src/contact.module.js.map

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var contact_1 = __webpack_require__(19);
var email_service_1 = __webpack_require__(5);
var angular2_universal_1 = __webpack_require__(1);
var ContactComponent = (function () {
    function ContactComponent(emailService) {
        this.emailService = emailService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        if (angular2_universal_1.isBrowser) {
            window.scrollTo(0, 0);
        }
        this.myForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl('', forms_1.Validators.required),
            'email': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            'phoneNumber': new forms_1.FormControl('', forms_1.Validators.required),
            'message': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        var body = "\n Phone: " + this.myForm.controls['phoneNumber'].value + "\n Name: " + this.myForm.controls['name'].value + " \n Message: " + this.myForm.controls['name'].value;
        var contactUser = new contact_1.contact(body, this.myForm.controls['email'].value);
        this.emailService.sendContactEmail(contactUser, 'contact');
        this.myForm.reset();
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__(97),
            styles: [__webpack_require__(92)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof email_service_1.EmailService !== 'undefined' && email_service_1.EmailService) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=C:/Users/goriunov/Desktop/Work/uv-web-app/src/contact.component.js.map

/***/ },

/***/ 92:
/***/ function(module, exports) {

module.exports = ".align-center {\n  text-align: center;\n}\n\n.contact-header {\n  color: white;\n  background-color: #253B48;\n  padding-top: 15%;\n  padding-bottom: 10%;\n}\n\n.contact-container {\n  text-align: left;\n  padding: 5%;\n  font-family: Montserrat, sans-serif;\n}\n\n.text-style {\n  font-size: 16px;\n  color: #333;\n}\n\n.padding-add {\n  padding-bottom: 6%;\n}\n\n.label-style {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.margin-add {\n  margin-top: 5%;\n}\n\n.btn-custom {\n  color: #fff;\n  background: #f60;\n  border: none;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  width: 115px;\n  height: 45px;\n}\n.btn-custom:hover {\n  background: #fa860a;\n  -webkit-transition: background .25s ease;\n  transition: background .25s ease;\n}\n\n.help-text {\n  text-align: right;\n  color: #737373;\n}\n\nform .ng-invalid.ng-touched {\n  border: 1px solid #d9534f;\n  /* red */\n}\n\n@media screen and (max-width: 767px) {\n  .label-style {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 575px) {\n  .help-text {\n    text-align: initial;\n  }\n\n  .contact-header {\n    padding-top: 85px;\n  }\n}\n"

/***/ },

/***/ 97:
/***/ function(module, exports) {

module.exports = "<div class=\"align-center\">\n  <div class=\"contact-header\">\n    <div class=\"container\">\n      <h1>CONTACT US</h1>\n    </div>\n  </div>\n  <div class=\"container contact-container\">\n    <p class=\"text-style\">\n      Please contact us if you have any general questions or issues and our support team will get back to you as soon as we can.\n    </p>\n    <p class=\"text-style\">\n      E-mails can also be addressed to enquiries@spark64.com\n    </p>\n    <form class=\"form-horizontal margin-add\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Name *</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" >\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\" >Name is required</small>\n        </div>\n      </div>\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Email *</label>\n        <div class=\"col-sm-8\">\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" required>\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('email').hasError('required') && myForm.get('email').touched\" >Email is required</small>\n          <small class=\"text-danger\" *ngIf=\"myForm.get('email').hasError('pattern') && myForm.get('email').touched\" >Valid Email is required is required</small>\n        </div>\n      </div>\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Phone number</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\" >\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('phoneNumber').hasError('required') && myForm.get('phoneNumber').touched\" >Phone Number is required</small>\n\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-12 label-style\" >Message *</label>\n        <textarea class=\"col-sm-12\" type=\"text\" formControlName=\"message\" class=\"form-control\" rows=\"4\" required></textarea>\n        <small class=\"text-danger\" *ngIf=\"myForm.get('message').hasError('required') && myForm.get('message').touched\" >Message is required</small>\n\n      </div>\n\n\n      <div class=\"col-sm-6 push-sm-6 help-text\">* This field is required.</div>\n      <div class=\"col-sm-6 pull-sm-6\">\n        <button type=\"submit\" class=\"btn btn-default btn-custom\" [disabled]=\"!myForm.valid\">SUBMIT</button>\n      </div>\n\n\n    </form>\n  </div>\n</div>\n\n"

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUF5QixDQUFlLENBQUM7QUFDekMsbUNBQW1DLEVBQWlCLENBQUM7QUFDckQsbUNBQTJCLEVBQWlCLENBQUM7QUFDN0MsOENBQStCLEVBQXFCLENBQUM7QUFDckQsa0NBQWtDLENBQWdCLENBQUM7QUFNbkQsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztDQUV6QyxDQUFDO0FBb0JGO0lBQUE7SUFBNkIsQ0FBQztJQWxCOUI7UUFBQyxlQUFRLENBQUM7WUFFUixPQUFPLEVBQUU7Z0JBQ1AsbUJBQW1CO2dCQUNuQixxQkFBWTtnQkFDWiwyQkFBbUI7Z0JBQ25CLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUM5QjtZQUVELE9BQU8sRUFBRTtnQkFDUCxxQkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLG9DQUFnQjthQUNoQjtZQUNELFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7cUJBQUE7SUFFMkIsb0JBQUM7QUFBRCxDQUFDO0FBQWpCLHFCQUFhLGdCQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakM5QixpQ0FBZ0MsQ0FBZSxDQUFDO0FBQ2hELGtDQUFpRCxDQUFnQixDQUFDO0FBQ2xFLG9DQUFzQixFQUFzQixDQUFDO0FBQzdDLDBDQUEyQixDQUE0QixDQUFDO0FBQ3hELCtDQUF3QixDQUFvQixDQUFDO0FBUTdDO0lBRUUsMEJBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUUsQ0FBQztJQUNqRCxtQ0FBUSxHQUFSO1FBQ0UsRUFBRSxFQUFDLDhCQUFTLENBQUMsRUFBQztZQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMxQixNQUFNLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRyxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqRCxPQUFPLEVBQUMsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLHdKQUF3SixDQUFDLENBQUMsQ0FBQztZQUNoTyxhQUFhLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRyxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN4RCxTQUFTLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRyxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzlLLElBQUksV0FBVyxHQUFZLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUcsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBMUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBQyxhQUFhO1lBQ3RCLGlDQUFzQztZQUN0QyxpQ0FBcUM7U0FDdEMsQ0FBQzs7d0JBQUE7SUF3QkYsdUJBQUM7O0FBQUQsQ0FBQztBQXRCWSx3QkFBZ0IsbUJBc0I1Qjs7Ozs7Ozs7QUNsQ0QsaUNBQWlDLHVCQUF1QixHQUFHLHFCQUFxQixpQkFBaUIsOEJBQThCLHFCQUFxQix3QkFBd0IsR0FBRyx3QkFBd0IscUJBQXFCLGdCQUFnQix3Q0FBd0MsR0FBRyxpQkFBaUIsb0JBQW9CLGdCQUFnQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxrQkFBa0Isc0JBQXNCLHFCQUFxQixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxpQkFBaUIsZ0JBQWdCLHFCQUFxQixpQkFBaUIsd0JBQXdCLHNCQUFzQixpQkFBaUIsaUJBQWlCLEdBQUcscUJBQXFCLHdCQUF3Qiw2Q0FBNkMscUNBQXFDLEdBQUcsZ0JBQWdCLHNCQUFzQixtQkFBbUIsR0FBRyxpQ0FBaUMsOEJBQThCLGdCQUFnQiwwQ0FBMEMsa0JBQWtCLHNCQUFzQixLQUFLLEdBQUcsd0NBQXdDLGdCQUFnQiwwQkFBMEIsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUssR0FBRyxHOzs7Ozs7O0FDQWpuQyw0M0YiLCJmaWxlIjoiNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnR9LFxyXG5cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblxyXG4gIGltcG9ydHM6IFtcclxuICAgIC8vIFVuaXZlcnNhbE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxyXG4gIF0sXHJcblxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgIENvbnRhY3RDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0Lm1vZHVsZS50cyIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtjb250YWN0fSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbnRhY3RcIjtcbmltcG9ydCB7RW1haWxTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2VtYWlsLnNlcnZpY2VcIjtcbmltcG9ydCB7aXNCcm93c2VyfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonYXBwLWNvbnRhY3QnLFxuICB0ZW1wbGF0ZVVybDonLi9jb250YWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOlsnLi9jb250YWN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIG15Rm9ybTogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsU2VydmljZTogRW1haWxTZXJ2aWNlKXt9XG4gIG5nT25Jbml0KCl7XG4gICAgaWYoaXNCcm93c2VyKXtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG4gICAgdGhpcy5teUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICduYW1lJzogbmV3IEZvcm1Db250cm9sKCcnICwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAnZW1haWwnOm5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyldKSxcbiAgICAgICdwaG9uZU51bWJlcic6IG5ldyBGb3JtQ29udHJvbCgnJyAsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ21lc3NhZ2UnOiBuZXcgRm9ybUNvbnRyb2woJycgLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKXtcbiAgICBsZXQgYm9keSA9IFwiXFxuIFBob25lOiBcIiArIHRoaXMubXlGb3JtLmNvbnRyb2xzWydwaG9uZU51bWJlciddLnZhbHVlICsgXCJcXG4gTmFtZTogXCIgKyB0aGlzLm15Rm9ybS5jb250cm9sc1snbmFtZSddLnZhbHVlICsgXCIgXFxuIE1lc3NhZ2U6IFwiICsgdGhpcy5teUZvcm0uY29udHJvbHNbJ25hbWUnXS52YWx1ZTtcbiAgICBsZXQgY29udGFjdFVzZXI6IGNvbnRhY3QgPSBuZXcgY29udGFjdChib2R5ICAsIHRoaXMubXlGb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlKTtcbiAgICB0aGlzLmVtYWlsU2VydmljZS5zZW5kQ29udGFjdEVtYWlsKGNvbnRhY3RVc2VyICwgJ2NvbnRhY3QnKTtcbiAgICB0aGlzLm15Rm9ybS5yZXNldCgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5hbGlnbi1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1oZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1M0I0ODtcXG4gIHBhZGRpbmctdG9wOiAxNSU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50ZXh0LXN0eWxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ucGFkZGluZy1hZGQge1xcbiAgcGFkZGluZy1ib3R0b206IDYlO1xcbn1cXG5cXG4ubGFiZWwtc3R5bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWFyZ2luLWFkZCB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuXFxuLmJ0bi1jdXN0b20ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjZjYwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbn1cXG4uYnRuLWN1c3RvbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmE4NjBhO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyBlYXNlO1xcbn1cXG5cXG4uaGVscC10ZXh0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM3MzczNzM7XFxufVxcblxcbmZvcm0gLm5nLWludmFsaWQubmctdG91Y2hlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDk1MzRmO1xcbiAgLyogcmVkICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAubGFiZWwtc3R5bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XFxuICAuaGVscC10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiA4NXB4O1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWxpZ24tY2VudGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtaGVhZGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDE+Q09OVEFDVCBVUzwvaDE+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29udGFjdC1jb250YWluZXJcXFwiPlxcbiAgICA8cCBjbGFzcz1cXFwidGV4dC1zdHlsZVxcXCI+XFxuICAgICAgUGxlYXNlIGNvbnRhY3QgdXMgaWYgeW91IGhhdmUgYW55IGdlbmVyYWwgcXVlc3Rpb25zIG9yIGlzc3VlcyBhbmQgb3VyIHN1cHBvcnQgdGVhbSB3aWxsIGdldCBiYWNrIHRvIHlvdSBhcyBzb29uIGFzIHdlIGNhbi5cXG4gICAgPC9wPlxcbiAgICA8cCBjbGFzcz1cXFwidGV4dC1zdHlsZVxcXCI+XFxuICAgICAgRS1tYWlscyBjYW4gYWxzbyBiZSBhZGRyZXNzZWQgdG8gZW5xdWlyaWVzQHNwYXJrNjQuY29tXFxuICAgIDwvcD5cXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBtYXJnaW4tYWRkXFxcIiBbZm9ybUdyb3VwXT1cXFwibXlGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJvblN1Ym1pdCgpXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHBhZGRpbmctYWRkXFxcIj5cXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtc20tNCBsYWJlbC1zdHlsZVxcXCI+TmFtZSAqPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFtZVxcXCIgPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBvZmZzZXQtc20tNFxcXCI+XFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJteUZvcm0uZ2V0KCduYW1lJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgbXlGb3JtLmdldCgnbmFtZScpLnRvdWNoZWRcXFwiID5OYW1lIGlzIHJlcXVpcmVkPC9zbWFsbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcGFkZGluZy1hZGRcXFwiPlxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS00IGxhYmVsLXN0eWxlXFxcIj5FbWFpbCAqPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImVtYWlsXFxcIiByZXF1aXJlZD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggb2Zmc2V0LXNtLTRcXFwiPlxcbiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibXlGb3JtLmdldCgnZW1haWwnKS5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBteUZvcm0uZ2V0KCdlbWFpbCcpLnRvdWNoZWRcXFwiID5FbWFpbCBpcyByZXF1aXJlZDwvc21hbGw+XFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJteUZvcm0uZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdwYXR0ZXJuJykgJiYgbXlGb3JtLmdldCgnZW1haWwnKS50b3VjaGVkXFxcIiA+VmFsaWQgRW1haWwgaXMgcmVxdWlyZWQgaXMgcmVxdWlyZWQ8L3NtYWxsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBwYWRkaW5nLWFkZFxcXCI+XFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTQgbGFiZWwtc3R5bGVcXFwiPlBob25lIG51bWJlcjwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInBob25lTnVtYmVyXFxcIiA+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IG9mZnNldC1zbS00XFxcIj5cXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgbXlGb3JtLmdldCgncGhvbmVOdW1iZXInKS50b3VjaGVkXFxcIiA+UGhvbmUgTnVtYmVyIGlzIHJlcXVpcmVkPC9zbWFsbD5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0xMiBsYWJlbC1zdHlsZVxcXCIgPk1lc3NhZ2UgKjwvbGFiZWw+XFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByb3dzPVxcXCI0XFxcIiByZXF1aXJlZD48L3RleHRhcmVhPlxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ21lc3NhZ2UnKS5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBteUZvcm0uZ2V0KCdtZXNzYWdlJykudG91Y2hlZFxcXCIgPk1lc3NhZ2UgaXMgcmVxdWlyZWQ8L3NtYWxsPlxcblxcbiAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IHB1c2gtc20tNiBoZWxwLXRleHRcXFwiPiogVGhpcyBmaWVsZCBpcyByZXF1aXJlZC48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBwdWxsLXNtLTZcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWN1c3RvbVxcXCIgW2Rpc2FibGVkXT1cXFwiIW15Rm9ybS52YWxpZFxcXCI+U1VCTUlUPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuXFxuXFxuICAgIDwvZm9ybT5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9