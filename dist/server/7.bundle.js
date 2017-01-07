exports.ids = [7];
exports.modules = {

/***/ 81:
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
var about_component_1 = __webpack_require__(83);
var founders_component_1 = __webpack_require__(86);
var developers_component_1 = __webpack_require__(85);
var description_component_1 = __webpack_require__(84);
// import {  } from "angular2-universal";
var router_1 = __webpack_require__(18);
var common_1 = __webpack_require__(98);
var routes = [
    { path: '', component: about_component_1.AboutComponent },
];
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [
                // UniversalModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: [
                about_component_1.AboutComponent,
                founders_component_1.FoundersComponent,
                developers_component_1.DevelopersComponent,
                description_component_1.DescriptionComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;
//# sourceMappingURL=C:/Users/goriunov/Desktop/Work/uv-web-app/src/about.module.js.map

/***/ },

/***/ 83:
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
var angular2_universal_1 = __webpack_require__(1);
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        if (angular2_universal_1.isBrowser) {
            window.scrollTo(0, 0);
            console.log('Done');
        }
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "app-about",
            template: __webpack_require__(93),
            styles: [__webpack_require__(88)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=C:/Users/goriunov/Desktop/Work/uv-web-app/src/about.component.js.map

/***/ },

/***/ 84:
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
var DescriptionComponent = (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent = __decorate([
        core_1.Component({
            selector: "app-description",
            template: __webpack_require__(94),
            styles: [__webpack_require__(89)],
        }), 
        __metadata('design:paramtypes', [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());
exports.DescriptionComponent = DescriptionComponent;
//# sourceMappingURL=C:/Users/goriunov/Desktop/Work/uv-web-app/src/description.component.js.map

/***/ },

/***/ 85:
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
var DevelopersComponent = (function () {
    function DevelopersComponent() {
    }
    DevelopersComponent = __decorate([
        core_1.Component({
            selector: "app-developers",
            template: __webpack_require__(95),
            styles: [__webpack_require__(90)]
        }), 
        __metadata('design:paramtypes', [])
    ], DevelopersComponent);
    return DevelopersComponent;
}());
exports.DevelopersComponent = DevelopersComponent;
//# sourceMappingURL=C:/Users/goriunov/Desktop/Work/uv-web-app/src/developers.component.js.map

/***/ },

/***/ 86:
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
var FoundersComponent = (function () {
    function FoundersComponent() {
    }
    FoundersComponent = __decorate([
        core_1.Component({
            selector: "app-founders",
            template: __webpack_require__(96),
            styles: [__webpack_require__(91)]
        }), 
        __metadata('design:paramtypes', [])
    ], FoundersComponent);
    return FoundersComponent;
}());
exports.FoundersComponent = FoundersComponent;
//# sourceMappingURL=C:/Users/goriunov/Desktop/Work/uv-web-app/src/founders.component.js.map

/***/ },

/***/ 88:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 89:
/***/ function(module, exports) {

module.exports = ".page-header{\n  margin-top: 100px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n.tabbed-text{\n  border-left: 2px solid lightgray;\n  padding:10px 20px 10px 15px  ;\n}\n\n.header-block{\n  margin:20px;\n}\n.story-title{\n  font-size: 1.2em;\n  color: #f27121;\n}\n@media only screen and (max-width: 576px){\n  .header-block {\n    margin-left: 3px;\n  }\n}\n"

/***/ },

/***/ 90:
/***/ function(module, exports) {

module.exports = ".page-header{\n  margin-top: 90px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n.fixed-properties{\n  width: 90% ;\n  margin-top: 10px;\n}\n.name-wrap{\n  word-wrap: break-word;\n}\n\n.header-block{\n  margin:20px;\n}\n.dev-head{\n  height:75px;\n}\n.dev-row{\n  text-align: center;\n}\n"

/***/ },

/***/ 91:
/***/ function(module, exports) {

module.exports = ".fixed-properties {\n  height: 200px;\n  width: 200px;\n  margin-top: 10px;\n}\n\n.header-block {\n  margin: 20px;\n}\n\n.founders-text {\n  background-color: #f8a242;\n  height: auto;\n  color: white;\n}\n\n.card {\n  background-color: #f8a242;\n  border-color: lightgray;\n}\n\n.founders-head {\n  background-color: white;\n}\n\n.card-deck-wrapper {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.page-header {\n  margin-top: 70px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 1091px) {\n  .fixed-properties {\n    height: 160px;\n    width: 160px;\n  }\n}\n@media only screen and (max-width: 845px) {\n  .card-title {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 720px) and (max-width: 792px) {\n  .richard-text {\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .card {\n    display: block !important;\n    margin-bottom: 10px;\n  }\n\n  .fixed-properties {\n    height: 250px;\n    width: 250px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .fixed-properties {\n    height: 190px;\n    width: 190px;\n  }\n}\n"

/***/ },

/***/ 93:
/***/ function(module, exports) {

module.exports = "<app-description></app-description>\n<app-founders></app-founders>\n<app-developers></app-developers>\n"

/***/ },

/***/ 94:
/***/ function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >UVLens - Our Story </h1>\n    </div>\n    <blockquote class=\"tabbed-text\">\n      <p> <span class=\"story-title\">UVLens </span> is being developed by a team at Spark 64 Ltd, a company making products\n        to help people live healthier outdoor lives. Guided by Richard McLean, who has over 30 years of commercial\n        business experience, the company formed in 2013 after the team won the National Finals of the Microsoft Imagine\n        Cup while Daniel and Ming were still studying their PhD degrees.\n        <br>\n        <br> The company has a focus in education, providing digital information and tools to teach people about\n        UV and sun safety. In a partnership with Banana Boat sunscreen, over 100 UV sensors were installed around\n        the country to protect preschool children from the sun.\n        <br>\n        <br> The team at Spark 64 believe in using technology to ignite new ideas, business as a force for good,\n        having fun and giving back to the community through internship and scholarship opportunities. </p>\n    </blockquote>\n  </div>\n</div>\n"

/***/ },

/***/ 95:
/***/ function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >Designers and Developers </h1>\n    </div>\n      <div class=\"row dev-row\">\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Jade</h5>\n                <h6 class=\"card-subtitle text-muted\"> Lead Designer</h6>\n              </div>\n\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/jade.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Niclas</h5>\n                <h6 class=\"card-subtitle text-muted\"> Coding Grand-master</h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/niclas.jpg\"  alt=\"Card image\">\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Michael</h5>\n                <h6 class=\"card-subtitle text-muted\"></h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/michael.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Dimitrii</h5>\n                <h6 class=\"card-subtitle text-muted\"> </h6>\n              </div>\n\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/dimitrii.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 offset-md-3 col-lg-2 offset-lg-0\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Anton</h5>\n                <h6 class=\"card-subtitle text-muted\"></h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/anton.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n<!--      </div>\n      <div class=\"row dev-row\">-->\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Aorangi</h5>\n                <h6 class=\"card-subtitle text-muted\"> </h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/aorangi.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 96:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >Founders </h1>\n    </div>\n    <div class=\"card-deck-wrapper\">\n\n      <div class=\"card-deck\">\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title\">Daniel Xu <a href=\"http://nz.linkedin.com/in/danielxu64\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> CEO</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/daniel.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Daniel did a PhD in bio-mechatronics Engineering. He was awarded the AMP National Scholarship as\n              one of 10 people doing great things in New Zealand. He enjoys finding challenging problems to\n              solve and is the inventor of a number of patents. In his spare time, he enjoys surfing, hockey,\n              football and exploring the outdoors. </p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title\">Ming Cheuk  <a href=\"http://nz.linkedin.com/in/mingcheuk\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> CTO</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/ming.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Ming leads the R&D at Spark 64. He has a background in Mechatronics Engineering where he graduated\n              top of his class. In his spare time, he volunteers teaching software courses to tertiary students\n              through the Microsoft Student Accelerator programme. He was invited to represent New Zealand\n              as the Student Partner at the MSP world summit.</p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title richard-text\">Richard McLean <a href=\"http://nz.linkedin.com/in/richardmcleannz\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> Executive Chair</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/richard.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Richard is an experienced director and a specialist in the development of IP based global businesses.\n              He has over 30 years of solid commercial experience and a passion for rapid growth and the creation\n              of company value. Over time he has played an active role in the success of many New Zealand technology\n              companies.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZGV2ZWxvcGVycy9kZXZlbG9wZXJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZm91bmRlcnMvZm91bmRlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9kZXZlbG9wZXJzL2RldmVsb3BlcnMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZm91bmRlcnMvZm91bmRlcnMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9kZXZlbG9wZXJzL2RldmVsb3BlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1w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RyxvQkFBb0IsZ0JBQWdCLHFCQUFxQixHQUFHLGFBQWEsMEJBQTBCLEdBQUcsa0JBQWtCLGdCQUFnQixHQUFHLFlBQVksZ0JBQWdCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxHOzs7Ozs7O0FDQXhWLHFDQUFxQyxrQkFBa0IsaUJBQWlCLHFCQUFxQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyxvQkFBb0IsOEJBQThCLGlCQUFpQixpQkFBaUIsR0FBRyxXQUFXLDhCQUE4Qiw0QkFBNEIsR0FBRyxvQkFBb0IsNEJBQTRCLEdBQUcsd0JBQXdCLCtCQUErQiw4QkFBOEIsR0FBRyxrQkFBa0IscUJBQXFCLG1CQUFtQix1Q0FBdUMsd0JBQXdCLEdBQUcsZ0RBQWdELHVCQUF1QixvQkFBb0IsbUJBQW1CLEtBQUssR0FBRyw2Q0FBNkMsaUJBQWlCLHNCQUFzQixLQUFLLEdBQUcsb0VBQW9FLG1CQUFtQixzQkFBc0IsS0FBSyxHQUFHLHdDQUF3QyxXQUFXLGdDQUFnQywwQkFBMEIsS0FBSyx5QkFBeUIsb0JBQW9CLG1CQUFtQixLQUFLLEdBQUcsd0NBQXdDLHVCQUF1QixvQkFBb0IsbUJBQW1CLEtBQUssR0FBRyxHOzs7Ozs7O0FDQTVwQywwSDs7Ozs7OztBQ0FBLDBzQzs7Ozs7OztBQ0FBLHkyRzs7Ozs7OztBQ0FBLGtwRyIsImZpbGUiOiI3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gICBmcm9tICcuL2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvdW5kZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vZm91bmRlcnMvZm91bmRlcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERldmVsb3BlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9kZXZlbG9wZXJzL2RldmVsb3BlcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERlc2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50XCI7XHJcbi8vIGltcG9ydCB7ICB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcclxuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH0sXHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHJcbiAgaW1wb3J0czogW1xyXG4gICAgLy8gVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcclxuICBdLFxyXG5cclxuICBleHBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQWJvdXRDb21wb25lbnQsXHJcbiAgICBGb3VuZGVyc0NvbXBvbmVudCxcclxuICAgIERldmVsb3BlcnNDb21wb25lbnQsXHJcbiAgICBEZXNjcmlwdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0TW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQubW9kdWxlLnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7aXNCcm93c2VyfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtYWJvdXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hYm91dC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6W1wiLi9hYm91dC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuIG5nT25Jbml0KCl7XG4gICBpZihpc0Jyb3dzZXIpe1xuICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgIGNvbnNvbGUubG9nKCdEb25lJyk7XG4gICB9XG4gfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1kZXNjcmlwdGlvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkNvbXBvbmVudHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtZGV2ZWxvcGVyc1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2RldmVsb3BlcnMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2RldmVsb3BlcnMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBEZXZlbG9wZXJzQ29tcG9uZW50e1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZGV2ZWxvcGVycy9kZXZlbG9wZXJzLmNvbXBvbmVudC50cyIsImltcG9ydCB7Q29tcG9uZW50LCAgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWZvdW5kZXJzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZm91bmRlcnMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2ZvdW5kZXJzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRm91bmRlcnNDb21wb25lbnQge1xuXG5cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2ZvdW5kZXJzL2ZvdW5kZXJzLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gXCIucGFnZS1oZWFkZXJ7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGNvbG9yOiAjZjI3MTIxO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50YWJiZWQtdGV4dHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmF5O1xcbiAgcGFkZGluZzoxMHB4IDIwcHggMTBweCAxNXB4ICA7XFxufVxcblxcbi5oZWFkZXItYmxvY2t7XFxuICBtYXJnaW46MjBweDtcXG59XFxuLnN0b3J5LXRpdGxle1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjZjI3MTIxO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KXtcXG4gIC5oZWFkZXItYmxvY2sge1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gXCIucGFnZS1oZWFkZXJ7XFxuICBtYXJnaW4tdG9wOiA5MHB4O1xcbiAgY29sb3I6ICNmMjcxMjE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmZpeGVkLXByb3BlcnRpZXN7XFxuICB3aWR0aDogOTAlIDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5uYW1lLXdyYXB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5oZWFkZXItYmxvY2t7XFxuICBtYXJnaW46MjBweDtcXG59XFxuLmRldi1oZWFke1xcbiAgaGVpZ2h0Ojc1cHg7XFxufVxcbi5kZXYtcm93e1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZpeGVkLXByb3BlcnRpZXMge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItYmxvY2sge1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZm91bmRlcnMtdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhMjQyO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhMjQyO1xcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5mb3VuZGVycy1oZWFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FyZC1kZWNrLXdyYXBwZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGFnZS1oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG4gIGNvbG9yOiAjZjI3MTIxO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA5MXB4KSB7XFxuICAuZml4ZWQtcHJvcGVydGllcyB7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDVweCkge1xcbiAgLmNhcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3OTJweCkge1xcbiAgLnJpY2hhcmQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gIC5jYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5maXhlZC1wcm9wZXJ0aWVzIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLmZpeGVkLXByb3BlcnRpZXMge1xcbiAgICBoZWlnaHQ6IDE5MHB4O1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZm91bmRlcnMvZm91bmRlcnMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhcHAtZGVzY3JpcHRpb24+PC9hcHAtZGVzY3JpcHRpb24+XFxuPGFwcC1mb3VuZGVycz48L2FwcC1mb3VuZGVycz5cXG48YXBwLWRldmVsb3BlcnM+PC9hcHAtZGV2ZWxvcGVycz5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlci1ibG9ja1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgPlVWTGVucyAtIE91ciBTdG9yeSA8L2gxPlxcbiAgICA8L2Rpdj5cXG4gICAgPGJsb2NrcXVvdGUgY2xhc3M9XFxcInRhYmJlZC10ZXh0XFxcIj5cXG4gICAgICA8cD4gPHNwYW4gY2xhc3M9XFxcInN0b3J5LXRpdGxlXFxcIj5VVkxlbnMgPC9zcGFuPiBpcyBiZWluZyBkZXZlbG9wZWQgYnkgYSB0ZWFtIGF0IFNwYXJrIDY0IEx0ZCwgYSBjb21wYW55IG1ha2luZyBwcm9kdWN0c1xcbiAgICAgICAgdG8gaGVscCBwZW9wbGUgbGl2ZSBoZWFsdGhpZXIgb3V0ZG9vciBsaXZlcy4gR3VpZGVkIGJ5IFJpY2hhcmQgTWNMZWFuLCB3aG8gaGFzIG92ZXIgMzAgeWVhcnMgb2YgY29tbWVyY2lhbFxcbiAgICAgICAgYnVzaW5lc3MgZXhwZXJpZW5jZSwgdGhlIGNvbXBhbnkgZm9ybWVkIGluIDIwMTMgYWZ0ZXIgdGhlIHRlYW0gd29uIHRoZSBOYXRpb25hbCBGaW5hbHMgb2YgdGhlIE1pY3Jvc29mdCBJbWFnaW5lXFxuICAgICAgICBDdXAgd2hpbGUgRGFuaWVsIGFuZCBNaW5nIHdlcmUgc3RpbGwgc3R1ZHlpbmcgdGhlaXIgUGhEIGRlZ3JlZXMuXFxuICAgICAgICA8YnI+XFxuICAgICAgICA8YnI+IFRoZSBjb21wYW55IGhhcyBhIGZvY3VzIGluIGVkdWNhdGlvbiwgcHJvdmlkaW5nIGRpZ2l0YWwgaW5mb3JtYXRpb24gYW5kIHRvb2xzIHRvIHRlYWNoIHBlb3BsZSBhYm91dFxcbiAgICAgICAgVVYgYW5kIHN1biBzYWZldHkuIEluIGEgcGFydG5lcnNoaXAgd2l0aCBCYW5hbmEgQm9hdCBzdW5zY3JlZW4sIG92ZXIgMTAwIFVWIHNlbnNvcnMgd2VyZSBpbnN0YWxsZWQgYXJvdW5kXFxuICAgICAgICB0aGUgY291bnRyeSB0byBwcm90ZWN0IHByZXNjaG9vbCBjaGlsZHJlbiBmcm9tIHRoZSBzdW4uXFxuICAgICAgICA8YnI+XFxuICAgICAgICA8YnI+IFRoZSB0ZWFtIGF0IFNwYXJrIDY0IGJlbGlldmUgaW4gdXNpbmcgdGVjaG5vbG9neSB0byBpZ25pdGUgbmV3IGlkZWFzLCBidXNpbmVzcyBhcyBhIGZvcmNlIGZvciBnb29kLFxcbiAgICAgICAgaGF2aW5nIGZ1biBhbmQgZ2l2aW5nIGJhY2sgdG8gdGhlIGNvbW11bml0eSB0aHJvdWdoIGludGVybnNoaXAgYW5kIHNjaG9sYXJzaGlwIG9wcG9ydHVuaXRpZXMuIDwvcD5cXG4gICAgPC9ibG9ja3F1b3RlPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItYmxvY2tcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxuICAgICAgPGgxID5EZXNpZ25lcnMgYW5kIERldmVsb3BlcnMgPC9oMT5cXG4gICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGRldi1yb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTMgY29sLWxnLTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIHRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldi1oZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5KYWRlPC9oNT5cXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzPVxcXCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcXFwiPiBMZWFkIERlc2lnbmVyPC9oNj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vamFkZS5qcGdcXFwiICBhbHQ9XFxcIkNhcmQgaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTMgY29sLWxnLTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIHRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldi1oZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5OaWNsYXM8L2g1PlxcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFxcXCI+IENvZGluZyBHcmFuZC1tYXN0ZXI8L2g2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9uaWNsYXMuanBnXFxcIiAgYWx0PVxcXCJDYXJkIGltYWdlXFxcIj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS00IGNvbC1tZC0zIGNvbC1sZy0yXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayB0ZXh0LXhzLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXYtaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+TWljaGFlbDwvaDU+XFxuICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXFxcIj48L2g2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9taWNoYWVsLmpwZ1xcXCIgIGFsdD1cXFwiQ2FyZCBpbWFnZVxcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2sgdGV4dC14cy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV2LWhlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkRpbWl0cmlpPC9oNT5cXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzPVxcXCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcXFwiPiA8L2g2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9kaW1pdHJpaS5qcGdcXFwiICBhbHQ9XFxcIkNhcmQgaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTMgb2Zmc2V0LW1kLTMgY29sLWxnLTIgb2Zmc2V0LWxnLTBcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIHRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldi1oZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5BbnRvbjwvaDU+XFxuICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXFxcIj48L2g2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9hbnRvbi5qcGdcXFwiICBhbHQ9XFxcIkNhcmQgaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbjwhLS0gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZGV2LXJvd1xcXCI+LS0+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2sgdGV4dC14cy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV2LWhlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkFvcmFuZ2k8L2g1PlxcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFxcXCI+IDwvaDY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImZpeGVkLXByb3BlcnRpZXMgcm91bmRlZC1jaXJjbGUgXFxcIiBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9hYm91dC90ZWFtL2FvcmFuZ2kuanBnXFxcIiAgYWx0PVxcXCJDYXJkIGltYWdlXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItYmxvY2tcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxuICAgICAgPGgxID5Gb3VuZGVycyA8L2gxPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1kZWNrLXdyYXBwZXJcXFwiPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZGVja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayBmb3VuZGVycy1oZWFkIHRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkRhbmllbCBYdSA8YSBocmVmPVxcXCJodHRwOi8vbnoubGlua2VkaW4uY29tL2luL2RhbmllbHh1NjRcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiA+PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluLXNxdWFyZVxcXCI+PC9pPjwvYT48L2g1PlxcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXFxcIj4gQ0VPPC9oNj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9kYW5pZWwuanBnXFxcIiAgYWx0PVxcXCJDYXJkIGltYWdlXFxcIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2sgZm91bmRlcnMtdGV4dFxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+IERhbmllbCBkaWQgYSBQaEQgaW4gYmlvLW1lY2hhdHJvbmljcyBFbmdpbmVlcmluZy4gSGUgd2FzIGF3YXJkZWQgdGhlIEFNUCBOYXRpb25hbCBTY2hvbGFyc2hpcCBhc1xcbiAgICAgICAgICAgICAgb25lIG9mIDEwIHBlb3BsZSBkb2luZyBncmVhdCB0aGluZ3MgaW4gTmV3IFplYWxhbmQuIEhlIGVuam95cyBmaW5kaW5nIGNoYWxsZW5naW5nIHByb2JsZW1zIHRvXFxuICAgICAgICAgICAgICBzb2x2ZSBhbmQgaXMgdGhlIGludmVudG9yIG9mIGEgbnVtYmVyIG9mIHBhdGVudHMuIEluIGhpcyBzcGFyZSB0aW1lLCBoZSBlbmpveXMgc3VyZmluZywgaG9ja2V5LFxcbiAgICAgICAgICAgICAgZm9vdGJhbGwgYW5kIGV4cGxvcmluZyB0aGUgb3V0ZG9vcnMuIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIGZvdW5kZXJzLWhlYWQgdGV4dC14cy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+TWluZyBDaGV1ayAgPGEgaHJlZj1cXFwiaHR0cDovL256LmxpbmtlZGluLmNvbS9pbi9taW5nY2hldWtcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiA+PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluLXNxdWFyZVxcXCI+PC9pPjwvYT48L2g1PlxcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXFxcIj4gQ1RPPC9oNj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9taW5nLmpwZ1xcXCIgIGFsdD1cXFwiQ2FyZCBpbWFnZVxcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIGZvdW5kZXJzLXRleHRcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPiBNaW5nIGxlYWRzIHRoZSBSJkQgYXQgU3BhcmsgNjQuIEhlIGhhcyBhIGJhY2tncm91bmQgaW4gTWVjaGF0cm9uaWNzIEVuZ2luZWVyaW5nIHdoZXJlIGhlIGdyYWR1YXRlZFxcbiAgICAgICAgICAgICAgdG9wIG9mIGhpcyBjbGFzcy4gSW4gaGlzIHNwYXJlIHRpbWUsIGhlIHZvbHVudGVlcnMgdGVhY2hpbmcgc29mdHdhcmUgY291cnNlcyB0byB0ZXJ0aWFyeSBzdHVkZW50c1xcbiAgICAgICAgICAgICAgdGhyb3VnaCB0aGUgTWljcm9zb2Z0IFN0dWRlbnQgQWNjZWxlcmF0b3IgcHJvZ3JhbW1lLiBIZSB3YXMgaW52aXRlZCB0byByZXByZXNlbnQgTmV3IFplYWxhbmRcXG4gICAgICAgICAgICAgIGFzIHRoZSBTdHVkZW50IFBhcnRuZXIgYXQgdGhlIE1TUCB3b3JsZCBzdW1taXQuPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2sgZm91bmRlcnMtaGVhZCB0ZXh0LXhzLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlIHJpY2hhcmQtdGV4dFxcXCI+UmljaGFyZCBNY0xlYW4gPGEgaHJlZj1cXFwiaHR0cDovL256LmxpbmtlZGluLmNvbS9pbi9yaWNoYXJkbWNsZWFubnpcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiA+PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluLXNxdWFyZVxcXCI+PC9pPjwvYT48L2g1PlxcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXFxcIj4gRXhlY3V0aXZlIENoYWlyPC9oNj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9yaWNoYXJkLmpwZ1xcXCIgIGFsdD1cXFwiQ2FyZCBpbWFnZVxcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIGZvdW5kZXJzLXRleHRcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPiBSaWNoYXJkIGlzIGFuIGV4cGVyaWVuY2VkIGRpcmVjdG9yIGFuZCBhIHNwZWNpYWxpc3QgaW4gdGhlIGRldmVsb3BtZW50IG9mIElQIGJhc2VkIGdsb2JhbCBidXNpbmVzc2VzLlxcbiAgICAgICAgICAgICAgSGUgaGFzIG92ZXIgMzAgeWVhcnMgb2Ygc29saWQgY29tbWVyY2lhbCBleHBlcmllbmNlIGFuZCBhIHBhc3Npb24gZm9yIHJhcGlkIGdyb3d0aCBhbmQgdGhlIGNyZWF0aW9uXFxuICAgICAgICAgICAgICBvZiBjb21wYW55IHZhbHVlLiBPdmVyIHRpbWUgaGUgaGFzIHBsYXllZCBhbiBhY3RpdmUgcm9sZSBpbiB0aGUgc3VjY2VzcyBvZiBtYW55IE5ldyBaZWFsYW5kIHRlY2hub2xvZ3lcXG4gICAgICAgICAgICAgIGNvbXBhbmllcy48L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9mb3VuZGVycy9mb3VuZGVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==