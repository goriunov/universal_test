module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendContactEmail = function (contactUser, type) {
        // contactUser.to_email = 'enquiries@spark64.com';
        contactUser.to_email = 'goriunovd@gmail.com';
        switch (type) {
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
        var body = JSON.stringify(contactUser);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.http.post('http://uvlens-website-backend.azurewebsites.net/sendmail', body, { headers: headers })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    EmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/email.service.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WidgetConnectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetConnectionService = (function () {
    function WidgetConnectionService(http) {
        this.http = http;
        this.newPlace = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.placeName = 'Auckland';
        this.longitude = 174.7633315;
        this.latitude = -36.8484597;
    }
    ;
    WidgetConnectionService.prototype.locationOnLoad = function () {
        var _this = this;
        this.http.get('http://freegeoip.net/json/')
            .map(function (location) { return location.json(); })
            .subscribe(function (location) {
            _this.placeName = location.city + ', ' + location.country_name;
            _this.longitude = location.longitude;
            _this.latitude = location.latitude;
            _this.newPlace.emit({ lng: _this.longitude, lat: _this.latitude, placeName: _this.placeName });
        });
    };
    WidgetConnectionService.prototype.setLocation = function (lat, lng, placeData) {
        this.longitude = lng;
        this.latitude = lat;
        var setCity = false;
        var setAdminState = false;
        var subLoc = false;
        console.log(placeData);
        if (placeData.length > 0) {
            for (var i = 0; i < placeData.length; i++) {
                for (var j = 0; j < placeData[i].types.length; j++) {
                    if (placeData[i].types[j] == 'sublocality') {
                        this.placeName = placeData[i].long_name;
                        subLoc = true;
                    }
                }
                if (!subLoc) {
                    if (placeData[i].types[0] == 'locality') {
                        this.placeName = placeData[i].long_name;
                        setCity = true;
                    }
                }
                else {
                    if (placeData[i].types[0] == 'locality' && this.placeName != placeData[i].long_name) {
                        this.placeName += ", " + placeData[i].long_name;
                        setCity = true;
                    }
                }
            }
            if (!setCity && !subLoc) {
                for (var i = 0; i < placeData.length; i++) {
                    if (placeData[i].types[0] == 'administrative_area_level_1') {
                        this.placeName = placeData[i].long_name;
                        setAdminState = true;
                    }
                }
            }
            for (var i = 0; i < placeData.length; i++) {
                if (placeData[i].types[0] == 'country') {
                    this.placeName += ', ' + placeData[i].long_name;
                }
            }
            if (!setCity && !setAdminState && !subLoc) {
                for (var i = 0; i < placeData.length; i++) {
                    if (placeData[i].types[0] == 'country') {
                        this.placeName = placeData[i].long_name;
                    }
                }
            }
        }
        this.newPlace.emit({ lng: this.longitude, lat: this.latitude, placeName: this.placeName });
    };
    WidgetConnectionService.prototype.getForecastData = function () {
        console.log('http://api.uvlens.com/api/Combined?longitude=' + this.longitude + '&latitude=' + this.latitude + '&skinType=0&key=spark64');
        return this.http.get('http://api.uvlens.com/api/Combined?longitude=' + this.longitude + '&latitude=' + this.latitude + '&skinType=0&key=spark64')
            .map(function (response) { return response.json(); });
    };
    WidgetConnectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], WidgetConnectionService);
    return WidgetConnectionService;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/widgetConection.service.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return contact; });
var contact = (function () {
    function contact(body, from_email, to_email, subject) {
        this.body = body;
        this.from_email = from_email;
        this.to_email = to_email;
        this.subject = subject;
    }
    return contact;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/contact.js.map

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("angular2-google-maps/core");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("angulartics2");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("rxjs/Rx");

/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(38);










// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_4_compression__());
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_9__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/server.js.map

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(72);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(75);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/__2.1.1.workaround.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_shared_widgetConection_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, widgetService) {
        this.widgetService = widgetService;
        if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
            this.widgetService.locationOnLoad();
        }
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(53),
            styles: [__webpack_require__(39)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angulartics2__["Angulartics2GoogleAnalytics"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angulartics2__["Angulartics2GoogleAnalytics"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__widget_shared_widgetConection_service__["a" /* WidgetConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__widget_shared_widgetConection_service__["a" /* WidgetConnectionService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/app.component.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_components_header_header_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_components_footer_footer_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_page_about_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_page_developers_developers_component__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_page_founders_founders_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_page_description_description_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_schools_about_page_about_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_schools_registration_page_registration_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_email_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_page_contact_component__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__widget_widget_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__widget_map_map_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__widget_wheel_wheel_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__widget_shared_widgetConection_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angulartics2__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_page_scroll__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_page_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_page_scroll__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';
var router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_page_about_component__["a" /* AboutComponent */] },
    { path: 'schools', redirectTo: 'schools/about', pathMatch: 'full' },
    { path: 'schools',
        children: [
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__pages_schools_about_page_about_component__["a" /* SchoolsAboutComponent */] },
            { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_13__pages_schools_registration_page_registration_component__["a" /* RegistrationComponent */] }
        ] },
    // {path: 'widget', component: WidgetComponent},
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_15__pages_contact_page_contact_component__["a" /* ContactComponent */] }
];
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__general_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__general_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_page_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_page_developers_developers_component__["a" /* DevelopersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_page_founders_founders_component__["a" /* FoundersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_page_description_description_component__["a" /* DescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_schools_registration_page_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schools_about_page_about_component__["a" /* SchoolsAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_page_contact_component__["a" /* ContactComponent */],
                /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
                __WEBPACK_IMPORTED_MODULE_16__widget_widget_component__["a" /* WidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_17__widget_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_18__widget_wheel_wheel_component__["a" /* WheelComponent */]
            ],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * BrowserModule, HttpModule, and JsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                /**
                 * using routes
                 */
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(router),
                /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
                __WEBPACK_IMPORTED_MODULE_22_ng2_page_scroll__["Ng2PageScrollModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyCMysJ3MutKKAWC__74K9tzI0aVckVyoE0",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_21_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_21_angulartics2__["Angulartics2GoogleAnalytics"]])
            ],
            providers: [
                { provide: 'isBrowser', useValue: __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"] },
                { provide: 'isNode', useValue: __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isNode"] },
                __WEBPACK_IMPORTED_MODULE_14__shared_email_service__["a" /* EmailService */],
                /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
                __WEBPACK_IMPORTED_MODULE_19__widget_shared_widgetConection_service__["a" /* WidgetConnectionService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/app.node.module.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(54),
            styles: [__webpack_require__(40)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/footer.component.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent() {
        this.headerScrolledStyled = false;
        this.isOpen = false;
        this.dropIsOpen = false;
    }
    HeaderComponent.prototype.removeMenu = function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if ($(window).width() > 815) {
                this.isOpen = false;
            }
        }
    };
    HeaderComponent.prototype.onOpenMenu = function () {
        this.dropIsOpen = false;
        this.isOpen = !this.isOpen;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HeaderComponent.prototype, "removeMenu", null);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(55),
            styles: [__webpack_require__(41)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/header.component.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/index.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-about",
            template: __webpack_require__(56),
            styles: [__webpack_require__(42)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/about.component.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DescriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionComponent = (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-description",
            template: __webpack_require__(57),
            styles: [__webpack_require__(43)],
        }), 
        __metadata('design:paramtypes', [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/description.component.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DevelopersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevelopersComponent = (function () {
    function DevelopersComponent() {
    }
    DevelopersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-developers",
            template: __webpack_require__(58),
            styles: [__webpack_require__(44)]
        }), 
        __metadata('design:paramtypes', [])
    ], DevelopersComponent);
    return DevelopersComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/developers.component.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FoundersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoundersComponent = (function () {
    function FoundersComponent() {
    }
    FoundersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-founders",
            template: __webpack_require__(59),
            styles: [__webpack_require__(45)]
        }), 
        __metadata('design:paramtypes', [])
    ], FoundersComponent);
    return FoundersComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/founders.component.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_contact__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_email_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(emailService) {
        this.emailService = emailService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'message': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        var body = "\n Phone: " + this.myForm.controls['phoneNumber'].value + "\n Name: " + this.myForm.controls['name'].value + " \n Message: " + this.myForm.controls['name'].value;
        var contactUser = new __WEBPACK_IMPORTED_MODULE_2__shared_contact__["a" /* contact */](body, this.myForm.controls['email'].value);
        this.emailService.sendContactEmail(contactUser, 'contact');
        this.myForm.reset();
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(60),
            styles: [__webpack_require__(46)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/contact.component.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.isVideo = true;
    }
    HomeComponent.prototype.removeVideo = function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if ($(window).width() <= 800) {
                this.isVideo = false;
            }
            else {
                this.isVideo = true;
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if ($(window).width() <= 800) {
                this.isVideo = false;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HomeComponent.prototype, "removeVideo", null);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(61),
            styles: [__webpack_require__(47)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/home.component.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_contact__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_email_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SchoolsAboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolsAboutComponent = (function () {
    function SchoolsAboutComponent(emailService) {
        this.emailService = emailService;
    }
    SchoolsAboutComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            school: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    SchoolsAboutComponent.prototype.onSubmit = function () {
        var body = "\n Phone: " + this.myForm.controls['phone'].value + "\n Name: " + this.myForm.controls['name'].value + "\n School: " + this.myForm.controls['school'].value;
        var contactUser = new __WEBPACK_IMPORTED_MODULE_2__shared_contact__["a" /* contact */](body, this.myForm.controls['email'].value);
        this.emailService.sendContactEmail(contactUser, 'order');
        this.myForm.reset();
    };
    SchoolsAboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schools',
            template: __webpack_require__(62),
            styles: [__webpack_require__(48)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */]) === 'function' && _a) || Object])
    ], SchoolsAboutComponent);
    return SchoolsAboutComponent;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/about.component.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_contact__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_email_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(emailService) {
        this.emailService = emailService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            school: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            sensor: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var body = "\n Phone: " + this.myForm.controls['phone'].value + "\n Name: " + this.myForm.controls['name'].value + "\n School: " + this.myForm.controls['school'].value + "\n Sensor: " + this.myForm.controls['sensor'].value;
        var contactUser = new __WEBPACK_IMPORTED_MODULE_2__shared_contact__["a" /* contact */](body, this.myForm.controls['email'].value);
        this.emailService.sendContactEmail(contactUser, 'registration');
        this.myForm.reset();
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-registration",
            template: __webpack_require__(63),
            styles: [__webpack_require__(49)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */]) === 'function' && _a) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/registration.component.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_widgetConection_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(mapsAPILoader, widgetService, zone) {
        this.mapsAPILoader = mapsAPILoader;
        this.widgetService = widgetService;
        this.zone = zone;
        this.isLoaded = false;
        this.display = true;
        this.flamesLoading = false;
        this.uvLevel = '';
        this.openComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            this.widgetService.newPlace.subscribe(function (data) {
                _this.name = data.placeName;
                _this.zone.run(function () {
                });
            });
            //set google maps defaults
            this.zoom = 17;
            this.latitude = this.widgetService.latitude;
            this.longitude = this.widgetService.longitude;
            //create search FormControl
            //load Places Autocomplete
            this.mapsAPILoader.load().then(function () {
                var map = new google.maps.Map(_this.mapElementRef.nativeElement, {
                    center: { lat: _this.latitude, lng: _this.longitude },
                    zoom: 13,
                    zoomControl: true,
                    gestureHandling: 'cooperative',
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    scaleControl: true,
                    streetViewControl: true,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    mapTypeControlOptions: {
                        mapTypeIds: []
                    },
                    draggable: true,
                    scrollwheel: false
                });
                var searchBox = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
                map.controls[google.maps.ControlPosition.TOP_LEFT].push(_this.searchElementRef.nativeElement);
                map.addListener('click', function (e) {
                    _this.placeMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                });
                map.addListener('bounds_changed', function () {
                    searchBox.setBounds(map.getBounds());
                });
                _this.marker = new google.maps.Marker({
                    map: map,
                });
                searchBox.addListener("place_changed", function () {
                    //get the place result
                    var place = searchBox.getPlace();
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    }
                    else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17); // Why 17? Because it looks good.
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.placeMarker({ lat: _this.latitude, lng: _this.longitude });
                });
                setTimeout(function () {
                    _this.isLoaded = true;
                    _this.zone.run(function () {
                    });
                }, 500);
                _this.geocoder = new google.maps.Geocoder;
                _this.placeMarker({ lat: _this.latitude, lng: _this.longitude });
                _this.marker.addListener('click', function () {
                    _this.showInfo();
                    _this.zone.run(function () {
                    });
                });
            });
        }
    };
    MapComponent.prototype.placeMarker = function (latLng) {
        this.showInfo();
        this.geocodeThis({ lat: latLng.lat, lng: latLng.lng });
    };
    MapComponent.prototype.geocodeThis = function (latLng) {
        var _this = this;
        this.flamesLoading = false;
        this.info_big = false;
        this.geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    _this.marker.setPosition(latLng);
                    _this.widgetService.setLocation(latLng.lat, latLng.lng, results[1].address_components);
                    _this.widgetService.getForecastData().subscribe(function (data) {
                        _this.apiData = data;
                        var currentUv = _this.apiData.CurrentUV;
                        if (currentUv >= 0.0 && currentUv < 0.5) {
                            _this.uvLevel = 'None';
                        }
                        if (currentUv >= 0.5 && currentUv < 3.0) {
                            _this.uvLevel = 'Low';
                        }
                        if (currentUv >= 3.0 && currentUv < 6.0) {
                            _this.uvLevel = 'Moderate';
                        }
                        if (currentUv >= 6.0 && currentUv < 8.0) {
                            _this.uvLevel = 'High';
                        }
                        if (currentUv >= 8.0 && currentUv < 11.0) {
                            _this.uvLevel = 'Very high';
                        }
                        if (currentUv >= 11.0) {
                            _this.uvLevel = 'Extreme';
                        }
                        _this.flamesLoading = true;
                        _this.zone.run(function () { });
                        console.log(data);
                    }, function (error) {
                        _this.apiData = {
                            "StartTime": "2017-01-02T06:00:00",
                            "UVForecast": [
                                0.288085938,
                                0.8691406,
                                2.23144531,
                                4.223633,
                                2.28027344,
                                2.944336,
                                3.29589844,
                                4.35546875,
                                3.72070313,
                                2.72949219,
                                2.241211,
                                1.07910156,
                                0.37109375,
                                0.09277344,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0.297851563,
                                0.795898438,
                                2.05078125,
                                3.89648438,
                                8.530273,
                                11.0205078,
                                12.3291016,
                                12.4365234,
                                10.625,
                                7.79296875,
                                4.375,
                                2.10449219,
                                0.72265625,
                                0.01953125,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "ForecastLocation": {
                                "type": "Point",
                                "coordinates": [
                                    175,
                                    -37
                                ]
                            },
                            "BurntimeForecast": [],
                            "DailyMessage": "The UV today is forecasted to be Moderate. Be careful between 8:00 AM and 3:00 PM and remember to cover up during these times.",
                            "DailyMessageTomorrow": "The UV tomorrow is forecasted to be Extreme. Be careful between 8:00 AM and 5:00 PM and remember to cover up during these times.",
                            "DailyForecasts": [
                                {
                                    "SafeBefore": "2017-01-02T08:00:00",
                                    "SafeAfter": "2017-01-02T15:00:00",
                                    "MaxUVString": "Moderate",
                                    "MaxUVI": 4.35546875
                                },
                                {
                                    "SafeBefore": "2017-01-03T08:00:00",
                                    "SafeAfter": "2017-01-03T17:00:00",
                                    "MaxUVString": "Extreme",
                                    "MaxUVI": 12.4365234
                                }
                            ],
                            "CurrentUV": 1,
                            "SensorLocation": {
                                "type": "Point",
                                "coordinates": [
                                    174.76664733886719,
                                    -36.856155395507813
                                ]
                            },
                            "MeasurementTime": "2017-01-02T04:18:30+00:00",
                            "LiveData": true,
                            "CurrentWeather": "Mostly Cloudy",
                            "CurrentTemperature": 21.1,
                            "LocationString": null,
                            "TimeZoneOffset": 46800000
                        };
                        var currentUv = _this.apiData.CurrentUV;
                        if (currentUv >= 0.0 && currentUv < 0.5) {
                            _this.uvLevel = 'None';
                        }
                        if (currentUv >= 0.5 && currentUv < 3.0) {
                            _this.uvLevel = 'Low';
                        }
                        if (currentUv >= 3.0 && currentUv < 6.0) {
                            _this.uvLevel = 'Moderate';
                        }
                        if (currentUv >= 6.0 && currentUv < 8.0) {
                            _this.uvLevel = 'High';
                        }
                        if (currentUv >= 8.0 && currentUv < 11.0) {
                            _this.uvLevel = 'Very high';
                        }
                        if (currentUv >= 11.0) {
                            _this.uvLevel = 'Extreme';
                        }
                        _this.flamesLoading = true;
                        _this.zone.run(function () { });
                    });
                    _this.zone.run(function () { });
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    MapComponent.prototype.hideInfo = function () {
        this.display = false;
    };
    MapComponent.prototype.minimizeInfo = function () {
        this.info_big = false;
    };
    MapComponent.prototype.showInfo = function () {
        this.display = true;
    };
    MapComponent.prototype.openWheelComponent = function () {
        this.info_big = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], MapComponent.prototype, "openComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], MapComponent.prototype, "searchElementRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("map"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object)
    ], MapComponent.prototype, "mapElementRef", void 0);
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(64),
            styles: [__webpack_require__(50)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_widgetConection_service__["a" /* WidgetConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_widgetConection_service__["a" /* WidgetConnectionService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _e) || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/map.component.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_widgetConection_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WheelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WheelComponent = (function () {
    function WheelComponent(widgetService, zone) {
        this.widgetService = widgetService;
        this.zone = zone;
        this.hint = "Loading...";
        this.isLoaded = false;
        this.message = 'Information about today';
        this.uvValue = 'Value';
        this.forecastArray = [];
        this.forecastDay = '';
        this.place = 'Location';
    }
    WheelComponent.prototype.resized = function (event) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
            var width = $(window).width();
            if (width != this.setWidth) {
                this.setWidth = width;
                this.isLoaded = false;
                var timeout;
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(function () {
                    _this.isLoaded = true;
                    if (_this.isLoaded) {
                        _this.drawWheel();
                    }
                }, 2000);
            }
        }
    };
    WheelComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
            this.setWidth = $(window).width();
            this.isLoaded = false;
            this.place = this.widgetService.placeName;
            this.getInformation();
            this.zone.run(function () {
            });
        }
    };
    WheelComponent.prototype.getInformation = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
            this.timeZoneOffset = this.apiData.TimeZoneOffset;
            this.forecastArray = this.apiData.UVForecast;
            var nd = new Date(new Date().getTime() + this.timeZoneOffset);
            console.log(nd.getUTCHours());
            if (nd.getUTCHours() >= 18 && nd.getUTCHours() <= 23 || nd.getUTCHours() >= 0 && nd.getUTCHours() < 6) {
                this.forecastDay = "Tomorrow's";
                this.message = this.apiData.DailyMessageTomorrow;
                this.uvValue = this.apiData.DailyForecasts[1].MaxUVString;
            }
            else {
                this.forecastDay = "Today's";
                this.message = this.apiData.DailyMessage;
                this.uvValue = this.apiData.DailyForecasts[0].MaxUVString;
            }
            if (this.uvValue == 'Extreme') {
                this.textColor = '#8C375D';
            }
            else if (this.uvValue == 'None') {
                this.textColor = '#4BB8A3';
            }
            else if (this.uvValue == 'Low') {
                this.textColor = '#86B37C';
            }
            else if (this.uvValue == 'Moderate') {
                this.textColor = '#FDAA2D';
            }
            else if (this.uvValue == 'High') {
                this.textColor = '#FD7C34';
            }
            else if (this.uvValue == 'Very High') {
                this.textColor = '#DC5535';
            }
            this.drawWheel();
            this.zone.run(function () {
            });
            console.log(this.apiData);
        }
    };
    WheelComponent.prototype.drawWheel = function () {
        var size = Math.min($('#god').height(), $('#god').width()) / 2 / 1.25;
        if ($('#god').width() < 768 && $('#god').width() > 470) {
            size = $('#god').height() / 2 / 1.25 / 1.25;
        }
        if ($('#god').width() <= 470 && $('#god').height() < 600) {
            size = 125;
        }
        if (size < 125) {
            size = 125;
        }
        if (size > 200) {
            size = 200;
        }
        if (size > 180 && $('#god').width() < 813) {
            size = 150;
        }
        if (size < 150 && $(window).width() > 767) {
            $('#slider').css({
                'margin-top': '25px'
            });
        }
        else {
            $('#slider').css({
                'margin-top': '0px'
            });
        }
        this.slider = $('#slider').CircularSlider({
            radius: size,
            innerCircleRatio: '0.6',
            handleDist: 80,
            min: 1,
            max: 72,
            clockwise: true,
            // labelSuffix: "<div id='labelSuffix'><img type='image/svg+xml' class='image-inside' id='extreme' src='assets/widget/widget-flames/extreme.svg'><img type='image/svg+xml' class='image-inside' id='none' src='assets/widget/widget-flames/none.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='low' src='assets/widget/widget-flames/low.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='moderate' src='assets/widget/widget-flames/moderate.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='high' src='assets/widget/widget-flames/high.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='veryhigh' src='assets/widget/widget-flames/veryhigh.svg' alt='loading'><br><small id='image-in-text' style=' text-align:center; color:white; font-size: 18px'>Oops :(</small></div>",
            labelSuffix: "<div id='labelSuffix'><img  class='image-inside' id='extreme' src='assets/widget/widget-flames/flames-extreme.png'><img class='image-inside' id='none' src='assets/widget/widget-flames/flames-none.png' alt='loading'><img  class='image-inside' id='low' src='assets/widget/widget-flames/flames-low.png' alt='loading'><img class='image-inside' id='moderate' src='assets/widget/widget-flames/flames-moderate.png' alt='loading'><img class='image-inside' id='high' src='assets/widget/widget-flames/flames-high.png' alt='loading'><img class='image-inside' id='veryhigh' src='assets/widget/widget-flames/flames-veryhigh.png' alt='loading'><br><small id='image-in-text' style=' text-align:center; color:white; font-size: 18px'>Oops :(</small></div>",
            labelPrefix: "<br>",
            shape: "Circle",
            touch: true,
            animate: true,
            animateDuration: 150,
            selectable: false,
            forecastArray: this.forecastArray,
            locationOffset: this.timeZoneOffset,
            formLabel: undefined,
        });
        this.isLoaded = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], WheelComponent.prototype, "apiData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], WheelComponent.prototype, "resized", null);
    WheelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wheel',
            template: __webpack_require__(65),
            styles: [__webpack_require__(51)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_widgetConection_service__["a" /* WidgetConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_widgetConection_service__["a" /* WidgetConnectionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _b) || Object])
    ], WheelComponent);
    return WheelComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/wheel.component.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetComponent = (function () {
    function WidgetComponent() {
    }
    WidgetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widget',
            template: __webpack_require__(66),
            styles: [__webpack_require__(52)]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetComponent);
    return WidgetComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/widget.component.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/environment.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/polyfills.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [
    'home', 'about', 'schools/about', 'schools/registration', 'contact'
];
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/server.routes.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = ".footer-container {\n  color: white;\n  padding-top: 20px;\n  background-color: #253B48;\n}\n\na {\n  color: white;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  text-decoration: none;\n}\na:hover, a focus {\n  color: #55acee;\n}\n\n.footer-social {\n  margin-left: 10px;\n  margin-right: 10px;\n  float: right;\n}\n\n.footer-facebook {\n  color: #3b5998 !important;\n}\n\n.footer-twitter {\n  color: #55acee !important;\n}\n\n.footer-instagram {\n  color: #3f729b !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .footer-container {\n    text-align: center;\n  }\n\n  .footer-social {\n    float: none;\n  }\n\n  .licence-row {\n    padding-bottom: 0;\n  }\n}\n"

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = ".box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background-color: #253b48;\n  min-height: 65px;\n}\n\n.active {\n  border-bottom: 3px solid #ff7e29;\n}\n\n.drop-in-drop-group {\n  margin-top: 5px;\n}\n\n.schools-special {\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n  color: #ff7e29 !important;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n.schools-special:hover {\n  color: #FFA442 !important;\n  cursor: pointer;\n}\n\n.drop-in-drop {\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n  color: #ff7e29 !important;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 15px !important;\n  padding: 5px;\n}\n.drop-in-drop:hover {\n  color: #FFA442 !important;\n}\n\n.drop-in-drop-active {\n  color: #FFA442 !important;\n}\n\n.spacing {\n  padding: 5px;\n}\n\n.dropdown-content {\n  display: none;\n  z-index: 10;\n  text-align: left;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  top: 33px;\n  left: 10px;\n}\n\n.dropdown {\n  padding-bottom: 10px;\n}\n\n.dropdown-content a:hover {\n  background-color: #E9E9E9;\n}\n\n.drop-active {\n  background-color: #E9E9E9;\n}\n\n.drop-in-drop-display {\n  display: block;\n}\n\n.dropdown:hover a:hover .dropdown-content {\n  display: block;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.facebook {\n  color: #3b5998  !important;\n  padding-left: 9px !important;\n  padding-right: 9px !important;\n}\n\n.twitter {\n  color: #55acee  !important;\n}\n\n.instagram {\n  color: #3f729b  !important;\n}\n\n.menu-item-center,\n.menu-item-special {\n  text-align: center;\n}\n\n.menu-item-right {\n  float: right;\n}\n\n.social-group {\n  text-align: center;\n  float: none;\n}\n.social-group .social {\n  padding: 7px;\n}\n.social-group .social:hover {\n  background-color: #eee;\n}\n\n.menu {\n  text-align: center;\n}\n\n.logo {\n  padding-top: 7px;\n}\n.logo img {\n  height: 35px;\n}\n\n.navigation {\n  padding-top: 21px;\n}\n\na:hover, a:active, a:visited, a:focus {\n  text-decoration: none;\n}\n\n.orange-link {\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #ff7e29 !important;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.orange-link:hover {\n  border-bottom: 3px solid #ff7e29;\n  cursor: pointer;\n}\n\n.mobile-navigation {\n  display: none;\n}\n\n.openSchools .menu-item {\n  display: block;\n}\n\n.dropped-mobile-menu .menu-item {\n  display: none;\n  padding: 10px;\n  margin-bottom: 5px;\n}\n.dropped-mobile-menu .menu-item a {\n  font-size: 19px;\n}\n\n@media screen and (max-width: 815px) {\n  .open .menu-item {\n    display: block;\n  }\n\n  .navigation {\n    display: none;\n  }\n\n  .mobile-navigation {\n    color: #ff7e29;\n    font-size: 25px;\n    padding-top: 12px;\n    display: block;\n    float: right;\n  }\n  .mobile-navigation:hover {\n    cursor: pointer;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .instagram,\n  .twitter {\n    padding: 5px !important;\n  }\n\n  .facebook {\n    padding-top: 5px !important;\n    padding-bottom: 5px !important;\n  }\n}\n@media screen and (max-width: 991px) {\n  .instagram,\n  .twitter {\n    padding: 8px !important;\n  }\n\n  .facebook {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n  }\n}\n@media screen and (max-width: 992px) {\n  .menu-item-special {\n    padding-left: 20px;\n  }\n}\n@media screen and (max-width: 900px) {\n  .menu-item-special {\n    text-align: right;\n    padding-left: 20px;\n  }\n}\n"

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = ".page-header{\n  margin-top: 100px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n.tabbed-text{\n  border-left: 2px solid lightgray;\n  padding:10px 20px 10px 15px  ;\n}\n\n.header-block{\n  margin:20px;\n}\n.story-title{\n  font-size: 1.2em;\n  color: #f27121;\n}\n@media only screen and (max-width: 576px){\n  .header-block {\n    margin-left: 3px;\n  }\n}\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = ".page-header{\n  margin-top: 90px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n.fixed-properties{\n  width: 90% ;\n  margin-top: 10px;\n}\n.name-wrap{\n  word-wrap: break-word;\n}\n\n.header-block{\n  margin:20px;\n}\n.dev-head{\n  height:75px;\n}\n.dev-row{\n  text-align: center;\n}\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = ".fixed-properties {\n  height: 200px;\n  width: 200px;\n  margin-top: 10px;\n}\n\n.header-block {\n  margin: 20px;\n}\n\n.founders-text {\n  background-color: #f8a242;\n  height: auto;\n  color: white;\n}\n\n.card {\n  background-color: #f8a242;\n  border-color: lightgray;\n}\n\n.founders-head {\n  background-color: white;\n}\n\n.card-deck-wrapper {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.page-header {\n  margin-top: 70px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 1091px) {\n  .fixed-properties {\n    height: 160px;\n    width: 160px;\n  }\n}\n@media only screen and (max-width: 845px) {\n  .card-title {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 720px) and (max-width: 792px) {\n  .richard-text {\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .card {\n    display: block !important;\n    margin-bottom: 10px;\n  }\n\n  .fixed-properties {\n    height: 250px;\n    width: 250px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .fixed-properties {\n    height: 190px;\n    width: 190px;\n  }\n}\n"

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = ".align-center {\n  text-align: center;\n}\n\n.contact-header {\n  color: white;\n  background-color: #253B48;\n  padding-top: 15%;\n  padding-bottom: 10%;\n}\n\n.contact-container {\n  text-align: left;\n  padding: 5%;\n  font-family: Montserrat, sans-serif;\n}\n\n.text-style {\n  font-size: 16px;\n  color: #333;\n}\n\n.padding-add {\n  padding-bottom: 6%;\n}\n\n.label-style {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.margin-add {\n  margin-top: 5%;\n}\n\n.btn-custom {\n  color: #fff;\n  background: #f60;\n  border: none;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  width: 115px;\n  height: 45px;\n}\n.btn-custom:hover {\n  background: #fa860a;\n  -webkit-transition: background .25s ease;\n  transition: background .25s ease;\n}\n\n.help-text {\n  text-align: right;\n  color: #737373;\n}\n\nform .ng-invalid.ng-touched {\n  border: 1px solid #d9534f;\n  /* red */\n}\n\n@media screen and (max-width: 767px) {\n  .label-style {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 575px) {\n  .help-text {\n    text-align: initial;\n  }\n\n  .contact-header {\n    padding-top: 85px;\n  }\n}\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = ".shadow-overlay {\n  /*max-height: 100vh;*/\n  /*min-height: 100vh;*/\n  position: relative;\n  left: 0;\n  right: 0;\n  top:0;\n  background-color: rgba(0, 0, 0, 0.3);\n  /*background: url(./assets/images/background/EarthMap.jpg) no-repeat center center;*/\n  background-size: cover;\n}\n\n.forMobile{\n  height: 800px;\n}\n.forMobile .shadow-overlay{\n  height: 800px;\n}\n\nvideo{\n  z-index: -1000;\n}\nvideo#bgvid {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  width: auto;\n  height: auto;\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  z-index: -1000;\n  background: url(./assets/images/background/EarthMap.jpg) no-repeat center center;\n  background-size: cover;\n  overflow: hidden;\n}\n\ndiv {\n  font-family: Montserrat, sans-serif;\n}\n\n.logo img {\n  max-width: 80%;\n  height: auto;\n  margin-left: -2%;\n}\n\n.parent {\n  position: relative;\n}\n\n.logo {\n  position: absolute;\n  top: 35%;\n  height: 100px;\n  margin-top: -55px;\n  /* account for padding and border if not using box-sizing: border-box; */\n}\n\n.slogan {\n  margin-top: 20px;\n  color: white;\n}\n\n.button-margin-top {\n  margin-top: 30px;\n}\n\n.buttons {\n  width: 100%;\n  box-shadow: none;\n  border: none;\n  color: white;\n  padding: 15px 0;\n  background: rgba(255, 102, 0, 0.7);\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n}\n.buttons:focus {\n  outline: none;\n}\n.buttons:hover {\n  background: #ff6600;\n  cursor: pointer;\n}\n\n.special {\n  text-align: right;\n}\n\n.middleImage {\n  text-align: center;\n}\n\n.partnerImages {\n  padding: 0px;\n  width: 145px;\n}\n\n.longPartnerImages {\n  padding: 15px;\n  width: 250px;\n}\n\n.partners {\n  padding: 20px;\n  border-bottom: 0.5px solid lightgrey;\n}\n\n.separator {\n  border-bottom: 0.5px solid lightgrey;\n}\n\n.body-container {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.specAlign {\n  text-align: right;\n}\n\n.col-sm-push-6 {\n  left: 50%;\n}\n\n.col-sm-pull-6 {\n  right: 50%;\n}\n\n.margin-row {\n  margin-top: 3%;\n}\n\n.image-size {\n  width: 80%;\n}\n\n.wheel-img {\n  margin-left: 50px;\n  margin-right: 0;\n}\n\n.iphone-img {\n  width: 100%;\n}\n\n.badge-resize {\n  width: 100px;\n}\n\n.orange-header {\n  color: rgba(255, 126, 41, 0.9);\n}\n\n.left-header, .left-text {\n  text-align: right;\n}\n\n.about-text {\n  font-size: 16px;\n  color: #777;\n}\n\n.about {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 3.5%;\n}\n\n.text-padding {\n  padding-top: 10%;\n}\n\n.container {\n  padding-top: 50px;\n  padding-left: 12%;\n  padding-right: 15%;\n  padding-bottom: 15%;\n  margin-left: 0;\n  margin-right: 0;\n  width: 100%;\n}\n\n.col-md-offset-2 {\n  margin-left: 10%;\n  padding-top: 5%;\n}\n\n.to-hide {\n  width: 300px;\n  font-size: 1.75rem;\n}\n\n.remove-padding {\n  padding-top: 20%;\n}\n.remove-padding div {\n  padding: 0;\n}\n\n#download {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.download-text {\n  padding-top: 5%;\n}\n\n.try-uv {\n  font-family: Montserrat, sans-serif;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 25px;\n}\n.try-uv h3 {\n  color: #663;\n}\n\n.separator-in {\n  border-bottom: 1px solid lightgray;\n}\n\n.margin-top {\n  margin-top: 5px;\n}\n\n@media screen and (max-width: 767px) {\n  .wheel-img {\n    margin-left: 0;\n  }\n\n  .buttons {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .logo {\n    text-align: center;\n    top: 30%;\n  }\n\n  .mediaResize {\n    text-align: center;\n  }\n\n  .partnerImages {\n    width: 200px;\n  }\n\n  .longPartnerImages {\n    width: 350px;\n  }\n\n  .partners {\n    padding: 10px;\n  }\n\n  .about {\n    text-align: center;\n  }\n\n  .col-sm-6 {\n    width: 100%;\n  }\n\n  .col-sm-push-6 {\n    left: 0%;\n  }\n\n  .col-sm-pull-6 {\n    right: 0%;\n  }\n\n  .left-header, .left-text {\n    text-align: center;\n  }\n\n  .img-left {\n    text-align: center;\n  }\n\n  .col-xs-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-xs-6 {\n    width: 50%;\n  }\n\n  .iphone-img {\n    width: 70%;\n  }\n\n  .to-hide {\n    display: none;\n  }\n\n  .center-align {\n    text-align: center;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 0%;\n  }\n\n  .badge-resize {\n    width: 150px;\n  }\n\n  .remove-padding {\n    padding-top: 5%;\n  }\n}\n@media screen and (max-width: 420px) {\n  .longPartnerImages {\n    width: 250px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n@media screen and (min-width: 997px) {\n  .badge-resize {\n    width: 120px;\n  }\n}\n@media screen and (min-width: 1360px) {\n  .badge-resize {\n    width: 150px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .back-image {\n    /*max-height: 100vh;*/\n    /*min-height: 100vh;*/\n    z-index: 1;\n    background: url(\"./assets/images/background/mobileBack.jpg\") no-repeat center center;\n    background-size: cover;\n  }\n\n  /*video#bgvid {*/\n    /*display: none;*/\n  /*}*/\n}\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = ".intro {\n  margin-bottom: 10%;\n  position: relative;\n  text-align: center;\n}\n\n.back-image {\n  max-height: 100vh;\n  min-height: 100vh;\n  background: url(\"./assets/images/schools/bg-section.svg\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.block-align-center {\n  padding-top: 10%;\n}\n\n.header {\n  color: white;\n  margin-bottom: 4%;\n}\n\n.under-header {\n  color: #f9d7ce;\n  margin-bottom: 5%;\n  font-size: 1.5em;\n}\n\n.weather-kit-container {\n  padding: 5%;\n  background-color: #1a303e;\n  box-shadow: 0 12px 10px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.weather-kit-img {\n  width: 100%;\n}\n\n.text-align {\n  padding-top: 15%;\n}\n\n.intro-top {\n  font-weight: 400;\n  color: #b7b4ba;\n  font-size: 1.25em;\n  margin-bottom: 5%;\n}\n\n.under-top {\n  font-weight: 700;\n  color: white;\n  font-size: 2em;\n  border-bottom: 1px solid #fff;\n}\n\n.description {\n  color: #adb4ba;\n}\n\n.information {\n  margin-top: 10%;\n}\n\n.information-container {\n  padding-top: 10%;\n}\n\n.info {\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.col-sm-push-6 {\n  left: 50%;\n}\n\n.col-sm-pull-6 {\n  right: 50%;\n}\n\n.image-size {\n  max-width: 100%;\n}\n\n.orange-header {\n  font-weight: 700;\n  font-size: 2em;\n}\n.orange-header span {\n  color: #ff7e29;\n}\n\n.ul-text {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n\n.li-margin {\n  margin-bottom: 2%;\n}\n\n.order {\n  background: url(\"./assets/images/schools/bg-2.jpg\") no-repeat center center;\n  background-size: cover;\n  padding-top: 10%;\n  padding-bottom: 10%;\n}\n\n.align-container {\n  text-align: center;\n}\n\n.order-header {\n  font-weight: 700;\n  color: black;\n}\n\n.order-container {\n  margin-top: 5%;\n  background-color: #fff;\n  border-radius: 10px;\n}\n\n.img-padding {\n  padding: 5%;\n}\n\n.text-padding {\n  padding-top: 6%;\n  padding-right: 5%;\n  padding-bottom: 8%;\n  text-align: left;\n}\n\n.grey-header {\n  font-weight: 700;\n  font-size: 2em;\n}\n\n.price {\n  color: #cc0000;\n  font-size: 1.25em;\n  font-weight: 500;\n}\n.price .line-through {\n  text-decoration: line-through;\n}\n.price .brackets {\n  color: black;\n}\n\n.button-info {\n  background-color: #f27420;\n  padding: 20px 5px;\n  border-radius: 50px;\n  width: 160px;\n  margin-top: 5%;\n  color: #fff;\n  text-align: center;\n}\n.button-info:focus {\n  outline: none;\n}\n.button-info:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n\n.required-text {\n  text-align: right;\n}\n\n.close-button {\n  font-size: 2rem;\n  color: white;\n}\n\nform .ng-invalid.ng-touched {\n  border: 2px solid #d9534f;\n  /* red */\n}\n\n.contact-header {\n  text-align: center;\n  margin-top: 10px;\n  height: 100%;\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.8em;\n}\n\n.modal-header {\n  background: #253b48;\n  padding: 20px 30px;\n  height: 100px;\n}\n\n.modal-body {\n  padding: 20px 50px;\n}\n\n.label-style {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.custom-help {\n  color: #737373;\n}\n\n.btn-custom {\n  color: #fff;\n  background: #f60;\n  border: none;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  width: 115px;\n  height: 45px;\n}\n.btn-custom:hover {\n  background: #fa860a;\n  -webkit-transition: background .25s ease;\n  transition: background .25s ease;\n}\n\n.modal-footer {\n  background: #253b48;\n  height: 80px;\n}\n\n.modal-content {\n  font-family: Montserrat,sans-serif;\n}\n\n.button-order {\n  background-color: #f27420;\n  padding: 20px 5px;\n  border-radius: 50px;\n  margin-top: 5%;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 1.25em;\n  color: #fff;\n  text-align: center;\n}\n.button-order:focus {\n  outline: none;\n}\n.button-order:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n\n.remove-underline {\n  text-decoration: none;\n}\n\n@media screen and (max-width: 991px) {\n  .text-align {\n    padding-top: 3%;\n  }\n\n  .information-container {\n    padding-top: 0%;\n  }\n\n  .block-align-center {\n    padding-top: 15%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .required-text {\n    text-align: initial;\n  }\n\n  .weather-kit-container {\n    text-align: center;\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .intro-top {\n    font-size: 1em;\n    margin-top: 5%;\n  }\n\n  .under-header {\n    font-size: 1em;\n  }\n\n  .under-top {\n    font-weight: 700;\n    font-size: 1.5em;\n    padding-bottom: 5%;\n  }\n\n  .col-sm-push-6 {\n    left: 0%;\n  }\n\n  .col-sm-pull-6 {\n    right: 0%;\n  }\n\n  .order-header {\n    font-size: 200%;\n    font-weight: 500;\n  }\n\n  .img-padding {\n    padding: 10%;\n  }\n\n  .text-padding {\n    padding-left: 10%;\n  }\n\n  .button-info {\n    margin: 7.5% auto 2.5%;\n  }\n}\n@media only screen and (max-width: 310px) {\n  .modal-header {\n    height: 120px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .block-align-center {\n    padding-top: 70px;\n  }\n}\n"

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = ".back-image {\n  max-height: 100vh;\n  min-height: 100vh;\n  background: url(\"./assets/images/schools/bg-section.svg\") no-repeat center center;\n  background-size: cover;\n  padding-top: 20%;\n  padding-bottom: 25%;\n  text-align: center;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.header-font {\n  font-size: 2.5em;\n  word-wrap: break-word;\n  margin-right: 7.5%;\n  margin-bottom: 7.5%;\n  margin-left: 7.5%;\n  color: white;\n}\n\n.sub-header-font {\n  font-size: 1.5em;\n  color: #f9d7ce;\n  margin-left: 2.5%;\n  margin-right: 2.5%;\n  margin-bottom: 12.5%;\n}\n\n.form-container {\n  margin-top: 80px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.content-container {\n  font-family: Montserrat,sans-serif;\n}\n\n.label-style {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.text-style {\n  font-size: 16px;\n  color: #333;\n}\n\n.center-form {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.custom-help {\n  color: #737373;\n}\n\n.btn-custom {\n  color: #fff;\n  background: #f60;\n  border: none;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  width: 115px;\n  height: 45px;\n}\n.btn-custom:hover {\n  background: #fa860a;\n  -webkit-transition: background .25s ease;\n  transition: background .25s ease;\n}\n\nform .ng-invalid.ng-touched {\n  border: 1px solid #d9534f;\n  /* red */\n}\n\n@media only screen and (max-width: 576px) {\n  .header-font {\n    font-size: 2em;\n    margin-top: 7.5%;\n  }\n\n  .sub-header-font {\n    font-size: 1em;\n  }\n}\n"

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = ".map-size {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.close {\n  margin-right: 5px;\n  width: 20px;\n  font-size: 2em;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n.uv-status {\n  font-weight: 900;\n}\n\n.info-window {\n  padding: 5px;\n  position: absolute;\n  top: 50px;\n  left: 15px;\n  right: 3%;\n  width: 90%;\n  background: #F7F7F7;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n\n.info-window-small {\n  position: absolute;\n  padding: 1%;\n  padding-left: 20px;\n  left: 15px;\n  bottom: 3%;\n  top: 63%;\n  text-align: center;\n  width: 390px;\n  background: #F7F7F7;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n\n.controls {\n  margin-top: 10px;\n  border: 1px solid transparent;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  height: 32px;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n\n.display {\n  display: none;\n}\n\n#pac-input {\n  left: 15px !important;\n  background-color: #F7F7F7;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 50%;\n}\n\n.font-weight-bold {\n  font-weight: bold;\n}\n\n.no-margin {\n  margin-bottom: 0;\n}\n\n.info-picture {\n  padding-left: 0;\n}\n.info-picture img {\n  width: 150px;\n}\n\n#pac-input:focus {\n  border-color: #4d90fe;\n}\n\n.content-style {\n  padding-top: 5px;\n}\n.content-style h5 {\n  font-size: 1rem;\n  color: #3e3e3e;\n}\n\n.button-style {\n  box-shadow: none;\n  border: none;\n  background-color: #f27420;\n  color: white;\n  width: 100%;\n}\n.button-style:focus {\n  outline: none;\n}\n.button-style:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n.button-style:disabled {\n  background: #fa860a;\n}\n\n.dropper {\n  height: 40px;\n}\n\n.padding-button {\n  position: absolute;\n  bottom: 10px;\n  left: 2px;\n  right: 5%;\n}\n\n.container-fluid {\n  padding: 0 !important;\n}\n\n@media screen and (max-width: 767px) {\n  #pac-input {\n    width: 90%;\n  }\n\n  .content-style {\n    padding-top: 20px;\n  }\n\n  .info-picture img {\n    width: 100px;\n  }\n\n  .info-window-small {\n    width: 90%;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .dropper {\n    height: 30px;\n  }\n}\n@media screen and (max-width: 388px) {\n  .dropper {\n    height: 20px;\n  }\n}\n.loader {\n  position: relative;\n  left: 150px;\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #f27420;\n  /* Blue */\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 0.8s linear infinite;\n          animation: spin 0.8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@media screen and (max-width: 767px) {\n  .loader {\n    left: 45%;\n  }\n}\n@media screen and (max-width: 560px) {\n  .loader {\n    left: 43%;\n  }\n}\n@media screen and (max-width: 400px) {\n  .loader {\n    left: 41%;\n  }\n}\n@media screen and (max-width: 400px) {\n  .loader {\n    left: 40%;\n  }\n}\n"

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = "#main-container {\n  position: relative;\n}\n\n.information {\n  position: absolute;\n  -webkit-transform: translateY(40%);\n          transform: translateY(40%);\n}\n\n.col-xs-12 {\n  padding: 1px !important;\n}\n\n.loading {\n  text-align: center;\n  font-size: 25px;\n  color: #333;\n}\n\n.button-style {\n  box-shadow: none;\n  padding: 10px;\n  border: none;\n  background-color: #f27420;\n  color: white;\n  border-radius: 50px;\n}\n.button-style:focus {\n  outline: none;\n}\n.button-style:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n\n.align {\n  text-align: center;\n}\n\n.head-font {\n  font-weight: 800 !important;\n}\n\n.head-font,\n.body-font {\n  color: #333;\n  font-family: Montserrat, sans-serif;\n}\n\n.body-font {\n  font-size: 14px;\n  font-weight: 400 !important;\n}\n\n.link-map {\n  color: #3A85D4 !important;\n}\n.link-map:hover {\n  text-decoration: underline !important;\n  color: #0D82FF !important;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 767px) {\n  .information {\n    position: static;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n\n  .head-font {\n    font-size: 18px;\n  }\n\n  .body-font {\n    font-size: 13px;\n  }\n\n  .location {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 478px) {\n  .head-font {\n    font-size: 15px;\n  }\n\n  .body-font {\n    font-size: 11px;\n  }\n\n  .location {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .button-style {\n    padding: 8px;\n  }\n}\n"

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = ".margin{\n  height: 500px;\n}\n\n\n"

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = "\n<div class=\"footer-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <h2 ><a [routerLink]=\"['contact']\"> Contact Us </a> </h2>\n        <p >\n          <a href=\"mailto: enquiries@spark64.com?Subject=Hello%20\" target=\"_top\">enquiries@spark64.com</a>\n          <br>\n          <br> Ground Floor <br> 70 Symonds St <br> Auckland, <br> New Zealand </p>\n      </div>\n      <div class=\"col-md-6 col-sm-12 \">\n        <div class=\"row\" >\n          <a class=\"footer-social footer-instagram\"  href=\"https://www.instagram.com/uvlens/\" target=\"_blank\"\n             rel=\"nofollow\" title=\"UVLens on Instagram\"> <i class=\"fa fa-instagram fa-2x\"></i> </a>\n\n          <a class=\"footer-social footer-twitter\" href=\"https://twitter.com/uvlens\" target=\"_blank\"\n             rel=\"nofollow\" title=\"UVLens on Twitter\"> <i class=\"fa fa-twitter fa-2x\"></i> </a>\n\n          <a class=\"footer-social footer-facebook\" href=\"https://www.facebook.com/UVLens/?fref=ts\"\n             target=\"_blank\" rel=\"nofollow\" title=\"UVLens on Facebook\"> <i class=\"fa fa-facebook fa-2x\"></i> </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 push-lg-6\">\n        <a class=\"footer-social\"  href=\"http://www.uvlens.com/license.html\">\n          <p class=\"licence-row\">License Agreement</p>\n        </a>\n        <a class=\"footer-social\"  href=\"http://www.uvlens.com/privacy.html\">\n          <p class=\"licence-row\">Privacy Policy</p>\n        </a>\n        <a class=\"footer-social\"  href=\"https://medium.com/@techno246/uvlens-media-kit-f1b71c2df877#.y5zv65q8e\">\n          <p class=\"licence-row\">Press Kit</p>\n        </a>\n      </div>\n      <div class=\"col-lg-6 pull-lg-6 \">\n        <p class=\"\"> &copy; 2016 Spark Sixty Four Limited, All Rights Reserved. </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = "<div class=\"box col-xs-12 override-style\" [ngClass] =\"headerScrolledStyled ? 'dynamic-styles': ''\">\n    <section class=\"col-xs-6 col-sm-2 logo\">\n      <img src=\"assets/images/logo/logo.svg\" alt=\"\">\n    </section>\n\n    <section class=\"col-sm-6 offset-lg-1 menu navigation\">\n      <div class=\"col-sm-2 col-lg-2  menu-item menu-item-center\">\n        <a routerLinkActive=\"active\" [routerLink]=\"['home']\" class=\"orange-link\">HOME</a>\n      </div>\n      <div class=\"col-sm-4 col-lg-3 col-xl-2  menu-item  menu-item-special dropdown\">\n        <a class=\"orange-link\">SCHOOLS</a>\n        <div class=\"dropdown-content\">\n          <a routerLinkActive=\"drop-active\" [routerLink]=\"['schools/about']\">ABOUT</a>\n          <a routerLinkActive=\"drop-active\" href=\"http://help.uvlens.com/article/6-weather-station-installation\">INSTALLATION</a>\n          <a routerLinkActive=\"drop-active\" [routerLink]=\"['schools/registration']\" href=\"#\">REGISTRATION</a>\n          <a routerLinkActive=\"drop-active\" href=\"#\">DATA PORTAL</a>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-lg-2 menu-item menu-item-center\">\n        <a routerLinkActive=\"active\" [routerLink]=\"['about']\" class=\"orange-link\">ABOUT</a>\n      </div>\n      <div class=\"col-sm-3 col-lg-2  menu-item  menu-item-center\">\n        <a routerLinkActive=\"active\" [routerLink]=\"['contact']\" class=\"orange-link\">CONTACT</a>\n      </div>\n    </section>\n\n    <section class=\"col-sm-4  col-lg-3  navigation\">\n      <!--<section class=\"col-sm-5\">-->\n        <!--<div class=\" menu-item-right\">-->\n          <!--<a href=\"#\" class=\"orange-link\" [routerLink]=\"['widget']\">FORECAST</a>-->\n        <!--</div>-->\n      <!--</section>-->\n      <section class=\"col-sm-7 offset-sm-5\">\n        <div class=\" menu-item-right social-group\">\n          <a class=\"social facebook\" href=\"https://www.facebook.com/UVLens/?fref=ts\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n          <a class=\"social twitter\" href=\"https://twitter.com/uvlens\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n          <a class=\"social instagram\" href=\"https://www.instagram.com/uvlens/\" target=\"_blank\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n        </div>\n      </section>\n\n    </section>\n    <section class = \"mobile-navigation\">\n      <i (click)=\"onOpenMenu()\" class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n    </section>\n\n  <div [ngClass]=\"isOpen ? 'open': ''\">\n    <section class=\"dropped-mobile-menu col-xs-12\" >\n      <div class=\"col-sm-12 menu-item menu-item-center\">\n        <a (click)=\"onOpenMenu()\" routerLinkActive=\"active\" [routerLink]=\"['home']\" class=\"orange-link\">HOME</a>\n      </div>\n      <div class=\"col-sm-12 menu-item  menu-item-center\">\n        <a  (click)=\"dropIsOpen = !dropIsOpen\"  class=\"orange-link\">SCHOOLS <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>\n        <div class=\"col-sm-12 drop-in-drop-group \" [ngClass]=\"dropIsOpen ? '': 'dropdown-content'\">\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\" class=\"drop-in-drop \" [routerLink]=\"['schools/about']\">ABOUT</a>\n          </div>\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\"  class=\"drop-in-drop\" href=\"http://help.uvlens.com/article/6-weather-station-installation\">INSTALLATION</a>\n          </div>\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\" class=\"drop-in-drop\"  [routerLink]=\"['schools/registration']\" href=\"#\">REGISTRATION</a>\n          </div>\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\" class=\"drop-in-drop\" href=\"#\">DATA PORTAL</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 menu-item menu-item-center\">\n        <a (click)=\"onOpenMenu()\" routerLinkActive=\"active\" [routerLink]=\"['about']\" class=\"orange-link\">ABOUT</a>\n      </div>\n      <div class=\"col-sm-12 menu-item  menu-item-center\">\n        <a (click)=\"onOpenMenu()\" routerLinkActive=\"active\" [routerLink]=\"['contact']\" class=\"orange-link\" >CONTACT</a>\n      </div>\n      <div class=\"col-sm-12 menu-item  menu-item-center\">\n        <!--<a (click)=\"onOpenMenu()\" href=\"#\" class=\"orange-link\" [routerLink]=\"['widget']\">FORECAST</a>-->\n      </div>\n    </section>\n  </div>\n\n</div>\n\n"

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = "<app-description></app-description>\n<app-founders></app-founders>\n<app-developers></app-developers>\n"

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >UVLens - Our Story </h1>\n    </div>\n    <blockquote class=\"tabbed-text\">\n      <p> <span class=\"story-title\">UVLens </span> is being developed by a team at Spark 64 Ltd, a company making products\n        to help people live healthier outdoor lives. Guided by Richard McLean, who has over 30 years of commercial\n        business experience, the company formed in 2013 after the team won the National Finals of the Microsoft Imagine\n        Cup while Daniel and Ming were still studying their PhD degrees.\n        <br>\n        <br> The company has a focus in education, providing digital information and tools to teach people about\n        UV and sun safety. In a partnership with Banana Boat sunscreen, over 100 UV sensors were installed around\n        the country to protect preschool children from the sun.\n        <br>\n        <br> The team at Spark 64 believe in using technology to ignite new ideas, business as a force for good,\n        having fun and giving back to the community through internship and scholarship opportunities. </p>\n    </blockquote>\n  </div>\n</div>\n"

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >Designers and Developers </h1>\n    </div>\n      <div class=\"row dev-row\">\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Jade</h5>\n                <h6 class=\"card-subtitle text-muted\"> Lead Designer</h6>\n              </div>\n\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/jade.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Niclas</h5>\n                <h6 class=\"card-subtitle text-muted\"> Coding Grand-master</h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/niclas.jpg\"  alt=\"Card image\">\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Michael</h5>\n                <h6 class=\"card-subtitle text-muted\"></h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/michael.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Dimitrii</h5>\n                <h6 class=\"card-subtitle text-muted\"> </h6>\n              </div>\n\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/dimitrii.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 offset-md-3 col-lg-2 offset-lg-0\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Anton</h5>\n                <h6 class=\"card-subtitle text-muted\"></h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/anton.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n<!--      </div>\n      <div class=\"row dev-row\">-->\n\n\n\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Aorangi</h5>\n                <h6 class=\"card-subtitle text-muted\"> </h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/aorangi.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >Founders </h1>\n    </div>\n    <div class=\"card-deck-wrapper\">\n\n      <div class=\"card-deck\">\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title\">Daniel Xu <a href=\"http://nz.linkedin.com/in/danielxu64\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> CEO</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/daniel.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Daniel did a PhD in bio-mechatronics Engineering. He was awarded the AMP National Scholarship as\n              one of 10 people doing great things in New Zealand. He enjoys finding challenging problems to\n              solve and is the inventor of a number of patents. In his spare time, he enjoys surfing, hockey,\n              football and exploring the outdoors. </p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title\">Ming Cheuk  <a href=\"http://nz.linkedin.com/in/mingcheuk\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> CTO</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/ming.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Ming leads the R&D at Spark 64. He has a background in Mechatronics Engineering where he graduated\n              top of his class. In his spare time, he volunteers teaching software courses to tertiary students\n              through the Microsoft Student Accelerator programme. He was invited to represent New Zealand\n              as the Student Partner at the MSP world summit.</p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title richard-text\">Richard McLean <a href=\"http://nz.linkedin.com/in/richardmcleannz\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> Executive Chair</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/richard.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Richard is an experienced director and a specialist in the development of IP based global businesses.\n              He has over 30 years of solid commercial experience and a passion for rapid growth and the creation\n              of company value. Over time he has played an active role in the success of many New Zealand technology\n              companies.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = "<div class=\"align-center\">\n  <div class=\"contact-header\">\n    <div class=\"container\">\n      <h1>CONTACT US</h1>\n    </div>\n  </div>\n  <div class=\"container contact-container\">\n    <p class=\"text-style\">\n      Please contact us if you have any general questions or issues and our support team will get back to you as soon as we can.\n    </p>\n    <p class=\"text-style\">\n      E-mails can also be addressed to enquiries@spark64.com\n    </p>\n    <form class=\"form-horizontal margin-add\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Name *</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" >\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\" >Name is required</small>\n        </div>\n      </div>\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Email *</label>\n        <div class=\"col-sm-8\">\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" required>\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('email').hasError('required') && myForm.get('email').touched\" >Email is required</small>\n          <small class=\"text-danger\" *ngIf=\"myForm.get('email').hasError('pattern') && myForm.get('email').touched\" >Valid Email is required is required</small>\n        </div>\n      </div>\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Phone number</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\" >\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('phoneNumber').hasError('required') && myForm.get('phoneNumber').touched\" >Phone Number is required</small>\n\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-12 label-style\" >Message *</label>\n        <textarea class=\"col-sm-12\" type=\"text\" formControlName=\"message\" class=\"form-control\" rows=\"4\" required></textarea>\n        <small class=\"text-danger\" *ngIf=\"myForm.get('message').hasError('required') && myForm.get('message').touched\" >Message is required</small>\n\n      </div>\n\n\n      <div class=\"col-sm-6 push-sm-6 help-text\">* This field is required.</div>\n      <div class=\"col-sm-6 pull-sm-6\">\n        <button type=\"submit\" class=\"btn btn-default btn-custom\" [disabled]=\"!myForm.valid\">SUBMIT</button>\n      </div>\n\n\n    </form>\n  </div>\n</div>\n\n"

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = "<div class=\"back-image\" [ngClass] = \"isVideo ? 'vh_height100' : 'forMobile'\">\n  <div class=\"shadow-overlay vh_height100\"></div>\n  <video *ngIf=\"isVideo\"  playsinline autoplay muted loop poster=\"./assets/images/background/EarthMap.jpg\" id=\"bgvid\">\n    <source src=\"./assets/images/background/Earth_1.mp4\" type=\"video/mp4\">\n  </video>\n  <div class=\"parent\"></div>\n    <div class=\"col-md-6 offset-md-3 col-lg-4 offset-lg-4 logo\">\n      <div class=\"col-xs-12\">\n        <img src=\"./assets/images/logo.png\">\n      </div>\n      <div class=\"col-xs-12 slogan\">\n        <h3>Localised UV report</h3>\n        <h3>Keeping you safe in the sun</h3>\n      </div>\n      <div class=\"col-xs-8 offset-xs-2 offset-md-0 col-md-12 button-margin-top\">\n        <a pageScroll [pageScrollDuration]=\"400\" href=\"#forecast\">\n          <button class=\"buttons\">Today's forecast</button>\n        </a>\n      </div>\n  </div>\n</div>\n\n\n\n<div style=\"background: white\">\n  <div class=\"container separator\" id=\"forecast\">\n    <div>\n      <div class=\"try-uv\">\n        <h3>Explore UV throughout the world</h3>\n        <!--<i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>-->\n      </div>\n\n      <app-widget></app-widget>\n    </div>\n\n    <div class=\"row about\">\n      <div class=\"col-md-6 col-sm-6 col-sm-push-6\">\n        <img src=\"./assets/images/web-wheel.png\" class=\"img-responsive image-size wheel-img\" alt=\"UVLens UV wheel displaying UV index\">\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-sm-pull-6 text-padding\">\n        <h3 class=\"orange-header left-header\">\n          Plan out the best time to be outside\n        </h3>\n        <p class=\"left-text about-text\">\n          Your UV forecast for the day, see when it’s safe to be outside and when to avoid the sun.\n        </p>\n      </div>\n    </div>\n    <div class=\"row about\">\n      <div class=\"col-md-6 col-sm-6 \">\n        <img src=\"./assets/images/burntime.png\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-6 text-padding\">\n        <h3 class=\"orange-header\">\n          Find your burn risk\n        </h3>\n        <p class=\"about-text\">\n          Everybody’s different. Find out how long you can spend in the sun by taking a personalised skin type assessment.\n        </p>\n      </div>\n    </div>\n    <div class=\"row about\">\n      <div class=\"col-md-6 col-sm-6 col-sm-push-6 \">\n        <img src=\"./assets/images/protection.png\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-sm-pull-6 text-padding\">\n        <h3 class=\"orange-header left-header\">\n          Shedding light on UV\n        </h3>\n        <p class=\"left-text about-text\">\n          UV is deceptive and invisible to our eyes, learn what protection measures to take and when to apply sunscreen.\n        </p>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"container-fluid\">\n    <div class=\"row partners\">\n      <div class=\"col-sm-12 col-md-3 offset-md-1 mediaResize specAlign\">\n        <a href=\"http://www.bananaboat.com/\" target=\"_blank\"><img class=\"partnerImages\" src=\"./assets/images/bananaboat.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize middleImage\">\n        <a href=\"https://www.callaghaninnovation.govt.nz/\" target=\"_blank\"><img class=\"partnerImages\" src=\"./assets/images/callaghan.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-3 mediaResize\">\n        <a href=\"https://oceanswim.co.nz/\" target=\"_blank\"><img class=\"partnerImages\" src=\"./assets/images/ocean.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize special\">\n        <a href=\"https://www.microsoft.com/\" target=\"_blank\"><img class=\"longPartnerImages microsoftImage\" src=\"./assets/images/microsoft.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize middleImage\">\n        <a href=\"https://www.solbari.com/\" target=\"_blank\"><img class=\"longPartnerImages\" src=\"./assets/images/solbari.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize \">\n        <a href=\"http://www.abi.auckland.ac.nz/en.html\" target=\"_blank\"><img class=\"longPartnerImages\" src=\"./assets/images/abi.png\"></a>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"container\">\n    <div class=\"\">\n      <div class=\"col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-2 center-align\">\n        <img src=\"./assets/images/phone1.png\" class=\"img-responsive iphone-img\">\n      </div>\n      <div class=\"col-md-5 col-sm-12 download-text center-align\">\n        <h2 class=\"orange-header to-hide\">Protect yourself with the free UV app</h2>\n        <div class=\"remove-padding\">\n          <div class=\"col-sm-4 col-md-6 col-sm-offset-1 margin-top\">\n            <a href=\"https://itunes.apple.com/nz/app/uvlens/id1060878359?mt=8\" target=\"_blank\" rel=\"nofollow\" title=\"Download the UVLens app from iTunes\">\n              <img src=\"./assets/images/app-store.png\" class=\"img-responsive badge-resize\">\n            </a>\n          </div>\n          <div class=\"col-sm-4 col-md-6 margin-top\">\n            <a href=\"https://play.google.com/store/apps/details?id=com.spark64.uvlens.mobile&amp;hl=en\" target=\"_blank\" rel=\"nofollow\" title=\"Download the UVLens app from Google PlayStore\">\n              <img src=\"./assets/images/google-play.png\" class=\"img-responsive badge-resize\">\n            </a>\n          </div>\n          <div class=\"col-sm-4 col-md-12 margin-top\">\n            <a href=\"https://www.microsoft.com/en-us/store/apps/uvlens/9nblggh5ft1g\" target=\"_blank\" rel=\"nofollow\" title=\"Download the UVLens app from the Windows Store\">\n              <img src=\"./assets/images/windows-store.png\" class=\"img-responsive badge-resize\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = "<section class=\"intro\">\n  <div class=\"back-image\">\n    <div class=\"container block-align-center\">\n      <h1 class=\"header\">Live weather data for your school</h1>\n      <p class=\"under-header\">Measure, record, and analyse live environmental data, and make it accessible to students,\n        staff and parents.</p>\n      <div class=\"col-xs-12 weather-kit-container container\">\n        <div class=\" col-lg-6 col-md-8 col-sm-12\">\n          <img src=\"./assets/images/schools/weather-kit.jpg\" class=\"img-responsive weather-kit-img\">\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-12 text-align\">\n          <p class=\"intro-top\">INTRODUCING</p>\n          <p class=\"under-top\">The UVLens® Weather Kit</p>\n          <p class=\"description\">The UVLens® Weather Kit contains sensors and software to measure the local UV, temperature, rainfall, and more at your school.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"information\">\n  <div class=\"container information-container\">\n    <div class=\"row info\">\n      <div class=\"col-xs-12 col-md-6 col-sm-push-6\">\n        <img src=\"./assets/images/schools/weather_dashboard.png\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-pull-6 text-padding\">\n        <p class=\"orange-header\">\n          Collect <span>data</span>\n        </p>\n        <ul class=\"ul-text\">\n          <li class=\"li-margin\">Collect UV, rainfall, windspeed, temperature and humidity data at your school.</li>\n          <li class=\"li-margin\">Livestream to data dashboards and use in school projects.</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row info\">\n      <div class=\"col-md-6 img-left\">\n        <img src=\"./assets/images/schools/earth-visualisation.jpg\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 text-padding\">\n        <p class=\"orange-header\">\n          Create <span>visualisations</span>\n        </p>\n        <ul class=\"ul-text\">\n          <li class=\"li-margin\">The weather kit bundles software and toolkits to help you build your own visualisations.</li>\n          <li class=\"li-margin\">Compare data accross time and locations.</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row info\">\n      <div class=\"col-md-6 col-sm-push-6\">\n        <img src=\"./assets/images/schools/app_ipad.jpg\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-pull-6 text-padding\">\n        <p class=\"orange-header\">\n          Stay <span>safe</span>\n        </p>\n        <ul class=\"ul-text\">\n          <li class=\"li-margin\">Live UV and sun safety information that is local to your school.</li>\n          <li class=\"li-margin\">Premium UVLens® iOS and Android app license for students and teachers.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"order\">\n  <div class=\"container align-container\">\n    <h1 class=\"order-header\">Order your UVLens® Weather Kit now and get started.</h1>\n    <div class=\"order-container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 img-padding\">\n          <img src=\"./assets/images/schools/weather-kit.jpg\" class=\"img-responsive image-size\">\n        </div>\n        <div class=\"col-md-6 text-padding\">\n          <p class=\"grey-header\">\n            Monitoring Kit\n          </p>\n          <p class=\"price\">\n            $475\n          </p>\n          <p>\n            Get started with the equipment to monitor the environmental conditions at your school. The kit includes:\n          </p>\n          <ul class=\"ul-text-2\">\n            <li>A weather station</li>\n            <li>Mounting hardware</li>\n            <li>Installation support</li>\n          </ul>\n          <a class=\"remove-underline\" href=\"http://help.uvlens.com/article/6-weather-station-installation\">\n            <div class=\"button-info\">\n              More info...\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 img-padding\">\n          <img src=\"./assets/images/schools/app_iphone.jpg\" class=\"img-responsive image-size\">\n        </div>\n        <div class=\"col-md-6 text-padding\">\n          <p class=\"grey-header\">\n            Premium App License\n          </p>\n          <p class=\"price\">\n            <span class=\"line-through\">$49</span> $39/month <span class=\"brackets\">(introductory offer)</span>\n          </p>\n          <p>\n            School-wide premium license to the UVLens® app for your students and staff.\n          </p>\n          <ul class=\"ul-text-2\">\n            <li>Live UV data at your school, and anywhere else in the country</li>\n            <li>Real-time alerts when the UV conditions change</li>\n            <li>Sunsmart educational material</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <a class=\"remove-underline\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <div class=\"button-order\" angulartics2On=\"click\" angularticsEvent=\"click\" angularticsCategory=\"Order Button\">\n        Order now\n      </div>\n    </a>\n\n  </div>\n</section>\n\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"order-label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close close-button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h2 class=\"contact-header\" id=\"order-label\">Order Now</h2>\n      </div>\n      <!-- end of header -->\n      <div class=\"modal-body\">\n\n        <p>Fill in your details below and our sales team will be in contact within the next working day.</p>\n\n        <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\" novalidate>\n          <div class=\"form-group\">\n            <label class=\"control-label label-style\" >Name *</label>\n\n              <input type=\"text\" class=\"form-control\" formControlName= \"name\" placeholder=\"Name\" required>\n\n            <small class=\"text-danger\" *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\" >Name is required</small>\n\n          </div>\n\n          <div class=\"form-group \">\n            <label class=\" control-label label-style\" >Email *</label>\n\n              <input type=\"email\" class=\"form-control\" formControlName= \"email\" placeholder=\"Email\" required>\n\n            <small class=\" text-danger\" *ngIf=\"myForm.get('email').hasError('required') && myForm.get('email').touched\">Email is required </small>\n            <small class=\" text-danger\" *ngIf=\"myForm.get('email').hasError('pattern') && myForm.get('email').touched\">Valid Email is required </small>\n\n            <!-- end of row-->\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\" control-label label-style\" >Phone number</label>\n\n              <input type=\"tel\" class=\"form-control\" formControlName= \"phone\" placeholder=\"Phone number\" required>\n            <small class=\" text-danger\" *ngIf=\"myForm.get('phone').hasError('required') && myForm.get('phone').touched\">Phone Number is required </small>\n            <!-- end of row-->\n          </div>\n\n          <div class=\"form-group \">\n            <label class=\"control-label label-style\" >School *</label>\n              <input type=\"text\" class=\"form-control\" formControlName= \"school\" placeholder=\"School\" required>\n            <small class=\"text-danger\" *ngIf=\"myForm.get('school').hasError('required') && myForm.get('school').touched\">School is required </small>\n\n            <!-- end of row-->\n          </div>\n          <!-- end of form group -->\n          <div class=\"row\">\n\n            <div class=\"col-md-6 push-md-6 required-text \">\n              <span class=\"help-block custom-help\"> * This field is required. </span>\n            </div>\n\n            <div class=\"col-md-6 pull-md-6\" >\n              <button type=\"submit\" class=\"btn btn-default btn-custom\"  [disabled]=\"myForm.invalid\"> SUBMIT </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <!-- end of body -->\n      <div class=\"modal-footer\" >\n        <div id=\"successRegister\">\n        </div>\n      </div>\n    </div>\n    <!-- end of modal content-->\n  </div>\n  <!--end of modal-dialog-->\n</div>\n\n"

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = "\n<div class=\"back-image\">\n  <div class=\"container content-container\">\n    <p class=\"header-font\">\n      Congratulations!\n    </p>\n    <p class=\"sub-header-font\">\n      You are almost there with the installation! Fill in your details below to activate it on the UVLens network.\n    </p>\n  </div>\n</div>\n<div class=\"container form-container content-container\">\n\n  <p class=\"text-style\" >Fill in the details of your weather station below to provide live UV data to the staff and students of the school!</p>\n  <form class=\"form-horizontal center-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\" novalidate>\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >Name *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"text\" class=\"form-control\"  formControlName= \"name\" placeholder=\"Name\" required >\n\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\" >Name is required</small>\n\n      <!-- Problem entering wrong text? -->\n\n    </div>\n    <!-- end of form group -->\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\">Email *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"email\" class=\"form-control\" formControlName= \"email\" placeholder=\"Email\" required>\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('email').hasError('required') && myForm.get('email').touched\" >Email is required </small>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('email').hasError('pattern') && myForm.get('name').touched\" >Valid Email is required</small>\n      <!-- end of row-->\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >Phone number</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"tel\" class=\"form-control\" formControlName= \"phone\" placeholder=\"Phone number\" >\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" > </small>\n\n      <!-- end of row-->\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >School *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"text\" class=\"form-control\" formControlName= \"school\" placeholder=\"School\" >\n      </div>\n      <small class=\"col-xs-10 offset-xs-1  text-danger\" *ngIf=\"myForm.get('school').hasError('required') && myForm.get('school').touched \"> School is required</small>\n\n      <!-- end of row-->\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >Sensor ID (e.g. IAUCKLAN416) *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"text\" class=\"form-control\" formControlName= \"sensor\" placeholder=\"Sensor\" required>\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('sensor').hasError('required') && myForm.get('sensor').touched\">Sensor is required </small>\n\n      <!-- end of row-->\n    </div>\n\n    <!-- end of form group -->\n    <div class=\"row\">\n\n      <div class=\"col-xs-10 offset-xs-1 col-sm-5 push-sm-6 \">\n        <span class=\"help-block custom-help\"> * This field is required. </span>\n      </div>\n\n      <div class=\"col-xs-10 offset-xs-1 col-sm-5 pull-sm-6\" >\n\n        <button type=\"submit\" class=\"btn btn-default btn-custom\" [disabled]=\"myForm.invalid\"> SUBMIT </button>\n\n      </div>\n\n    </div>\n  </form>\n  <br>\n  <div class=\"\" >\n    <div id=\"successStation\" >\n    </div>\n  </div>\n</div>\n\n"

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid map-size\" >\n  <div class=\"form-group\">\n    <input [ngStyle]=\"isLoaded ? {}: {'display':'none'}\" id=\"pac-input\" class=\"controls\" type=\"text\"\n           placeholder=\"Enter a location\" #search [formControl]=\"searchControl\">\n  </div>\n  <div id=\"map\" #map></div>\n  <div *ngIf=\"display\" [ngClass]=\"info_big ? 'info-window':'info-window-small'\">\n    <div class=\"close\" *ngIf=\"!info_big\">\n      <span aria-hidden=\"true\" (click)=\"hideInfo()\">&times;</span>\n    </div>\n    <div class=\"close\" *ngIf=\"info_big\">\n      <span aria-hidden=\"true\" (click)=\"minimizeInfo()\">&minus;</span>\n    </div>\n    <div class=\"content-style\">\n      <app-wheel *ngIf=\"info_big\" [apiData]=\"apiData\"></app-wheel>\n      <div *ngIf=\"!info_big\">\n\n        <h5>{{name}}</h5>\n        <h5 *ngIf=\"!flamesLoading\">\n          <div class=\"loader\"></div>\n        </h5>\n        <div *ngIf=\"flamesLoading\" class=\"info-picture col-xs-12\">\n          <div class=\"font-weight-bold\">{{uvLevel}} UV</div>\n          <img *ngIf=\"uvLevel =='Extreme'\" src=\"./assets/widget/widget-flames/extreme.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='None'\" src=\"./assets/widget/widget-flames/none.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='Low'\" src=\"./assets/widget/widget-flames/low.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='High'\" src=\"./assets/widget/widget-flames/high.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='Moderate'\" src=\"./assets/widget/widget-flames/moderate.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='Very high'\" src=\"./assets/widget/widget-flames/veryhigh.svg\" alt=\"\">\n        </div>\n        <div class=\"col-xs-12 padding-button\">\n          <!--<div class=\"dropper\"></div>-->\n          <button [disabled]=\"!flamesLoading\" (click)=\"openWheelComponent()\" class=\"button-style\">Full UV report</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = "<div id=\"god\">\n  <section class=\"loading\" *ngIf=\"!isLoaded\">\n\n    {{hint}}\n\n  </section>\n  <section id=\"main-container\">\n    <div class=\"align\">\n      <div class=\" col-xs-12 col-md-6\" id=\"slider\" [ngStyle]=\"isLoaded ? {}: {'display':'none'}\"></div>\n    </div>\n    <div class =\"col-xs-12 col-md-6 offset-md-6 information\">\n        <section [ngStyle]=\"isLoaded ? {}: {'display':'none'}\" class=\"main-info col-xs-12\">\n          <h6  class=\"head-font location\" >{{forecastDay}} forecast</h6>\n          <h3 class=\"head-font uvTag\" [ngStyle]=\"{'color':textColor}\">{{uvValue}} UV</h3>\n          <h6 class=\"head-font location\" >in {{place}}</h6>\n        </section>\n        <section  class=\"col-xs-12\">\n          <div class=\"body-font\" [ngStyle]=\"isLoaded ? {}: {'display':'none'}\" >{{message}}</div>\n          <!--<button class=\"button-style\" >Explore UV</button>-->\n        </section>\n    </div>\n  </section>\n</div>\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = "<div class=\"widget\">\n  <!--<app-wheel (openComponent)=\"changeView()\" *ngIf=\"openWheel\"></app-wheel>-->\n  <app-map></app-map>\n</div>\n"

/***/ },
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 80 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 81 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 82 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 83 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 84 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 85 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 87 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = require("ng2-page-scroll");

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzIwMjE2YTBkM2IzNjIwODlhZWMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvZW1haWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldC9zaGFyZWQvd2lkZ2V0Q29uZWN0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvY29udGFjdC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJ0aWNzMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZ2VuZXJhbC1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZ2VuZXJhbC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9kZXZlbG9wZXJzL2RldmVsb3BlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9mb3VuZGVycy9mb3VuZGVycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9zY2hvb2xzL2Fib3V0LXBhZ2UvYWJvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvc2Nob29scy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd2lkZ2V0L21hcC9tYXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd2lkZ2V0L3doZWVsL3doZWVsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZ2VuZXJhbC1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2dlbmVyYWwtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9mb3VuZGVycy9mb3VuZGVycy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9zY2hvb2xzL2Fib3V0LXBhZ2UvYWJvdXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL3NjaG9vbHMvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXQvbWFwL21hcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd2lkZ2V0L3doZWVsL3doZWVsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9nZW5lcmFsLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2dlbmVyYWwtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZm91bmRlcnMvZm91bmRlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvc2Nob29scy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvc2Nob29scy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXQvbWFwL21hcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldC93aGVlbC93aGVlbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldC93aWRnZXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLXBhZ2Utc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLDBDOzs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNHO0FBSTNCO0FBS2hCO0lBQ0Usc0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUUsQ0FBQztJQUVoQyx1Q0FBZ0IsR0FBaEIsVUFBaUIsV0FBb0IsRUFBRSxJQUFXO1FBQ2hELGtEQUFrRDtRQUNsRCxXQUFXLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBRTdDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ1osS0FBSyxTQUFTO2dCQUNaLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO2dCQUNyQyxLQUFLLENBQUM7WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzFDLEtBQUssQ0FBQztZQUNSLEtBQUssT0FBTztnQkFDVixXQUFXLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztnQkFDbkMsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUdELElBQU0sSUFBSSxH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LDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDk3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MjAyMTZhMGQzYjM2MjA4OWFlYyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge2NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuaW1wb3J0ICdyeGpzL1J4J1xuXG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEVtYWlsU2VydmljZXtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe31cblxuICBzZW5kQ29udGFjdEVtYWlsKGNvbnRhY3RVc2VyOiBjb250YWN0LCB0eXBlOnN0cmluZyl7XG4gICAgLy8gY29udGFjdFVzZXIudG9fZW1haWwgPSAnZW5xdWlyaWVzQHNwYXJrNjQuY29tJztcbiAgICBjb250YWN0VXNlci50b19lbWFpbCA9ICdnb3JpdW5vdmRAZ21haWwuY29tJztcblxuICAgIHN3aXRjaCAodHlwZSl7XG4gICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgY29udGFjdFVzZXIuc3ViamVjdCA9ICdDb250YWN0IGZvcm0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG4gICAgICAgIGNvbnRhY3RVc2VyLnN1YmplY3QgPSAnUmVnaXN0cmF0aW9uIGZvcm0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29yZGVyJzpcbiAgICAgICAgY29udGFjdFVzZXIuc3ViamVjdCA9ICdPcmRlciBmb3JtJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG5cbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29udGFjdFVzZXIpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vdXZsZW5zLXdlYnNpdGUtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9zZW5kbWFpbCcgLCBib2R5ICwge2hlYWRlcnM6aGVhZGVyc30pXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2VtYWlsLnNlcnZpY2UudHMiLCJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCAncnhqcy9SeCdcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29ubmVjdGlvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7fTtcblxuICAgIG5ld1BsYWNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHBsYWNlTmFtZTogc3RyaW5nID0gJ0F1Y2tsYW5kJztcbiAgICBsb25naXR1ZGUgPSAxNzQuNzYzMzMxNTtcbiAgICBsYXRpdHVkZSA9IC0zNi44NDg0NTk3O1xuXG4gICAgbG9jYXRpb25PbkxvYWQoKXtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnaHR0cDovL2ZyZWVnZW9pcC5uZXQvanNvbi8nKVxuICAgICAgICAgICAgLm1hcChsb2NhdGlvbiA9PiBsb2NhdGlvbi5qc29uKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsb2NhdGlvbik9PntcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlTmFtZSA9IGxvY2F0aW9uLmNpdHkgKyAnLCAnICsgbG9jYXRpb24uY291bnRyeV9uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1BsYWNlLmVtaXQoe2xuZzp0aGlzLmxvbmdpdHVkZSAgLCBsYXQ6dGhpcy5sYXRpdHVkZSAgLCBwbGFjZU5hbWU6IHRoaXMucGxhY2VOYW1lfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRMb2NhdGlvbihsYXQgLCBsbmcgLCBwbGFjZURhdGEpe1xuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGxuZztcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxhdDtcbiAgICAgICAgdmFyIHNldENpdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdmFyIHNldEFkbWluU3RhdGU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgICAgICB2YXIgc3ViTG9jOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgY29uc29sZS5sb2cocGxhY2VEYXRhKTtcblxuICAgICAgICBpZihwbGFjZURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBsYWNlRGF0YVtpXS50eXBlcy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBsYWNlRGF0YVtpXS50eXBlc1tqXSA9PSAnc3VibG9jYWxpdHknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZU5hbWUgPSBwbGFjZURhdGFbaV0ubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIHN1YkxvYyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFzdWJMb2MpIHtcbiAgICAgICAgICAgICAgaWYgKHBsYWNlRGF0YVtpXS50eXBlc1swXSA9PSAnbG9jYWxpdHknICkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VOYW1lID0gcGxhY2VEYXRhW2ldLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBzZXRDaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmIChwbGFjZURhdGFbaV0udHlwZXNbMF0gPT0gJ2xvY2FsaXR5JyAmJiB0aGlzLnBsYWNlTmFtZSAhPSBwbGFjZURhdGFbaV0ubG9uZ19uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZU5hbWUgKz0gXCIsIFwiICsgcGxhY2VEYXRhW2ldLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBzZXRDaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCFzZXRDaXR5ICYmICFzdWJMb2Mpe1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBsYWNlRGF0YVtpXS50eXBlc1swXSA9PSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VOYW1lID0gcGxhY2VEYXRhW2ldLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBzZXRBZG1pblN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGxhY2VEYXRhW2ldLnR5cGVzWzBdID09ICdjb3VudHJ5Jykge1xuICAgICAgICAgICAgICB0aGlzLnBsYWNlTmFtZSArPScsICcgKyBwbGFjZURhdGFbaV0ubG9uZ19uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIXNldENpdHkgJiYgIXNldEFkbWluU3RhdGUgJiYgIXN1YkxvYyl7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAocGxhY2VEYXRhW2ldLnR5cGVzWzBdID09ICdjb3VudHJ5Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VOYW1lID0gcGxhY2VEYXRhW2ldLmxvbmdfbmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIHRoaXMubmV3UGxhY2UuZW1pdCh7bG5nOnRoaXMubG9uZ2l0dWRlICAsIGxhdDp0aGlzLmxhdGl0dWRlICAsIHBsYWNlTmFtZTogdGhpcy5wbGFjZU5hbWV9KTtcbiAgICB9XG5cbiAgICBnZXRGb3JlY2FzdERhdGEoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdodHRwOi8vYXBpLnV2bGVucy5jb20vYXBpL0NvbWJpbmVkP2xvbmdpdHVkZT0nK3RoaXMubG9uZ2l0dWRlKycmbGF0aXR1ZGU9Jyt0aGlzLmxhdGl0dWRlKycmc2tpblR5cGU9MCZrZXk9c3Bhcms2NCcpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9hcGkudXZsZW5zLmNvbS9hcGkvQ29tYmluZWQ/bG9uZ2l0dWRlPScrdGhpcy5sb25naXR1ZGUrJyZsYXRpdHVkZT0nK3RoaXMubGF0aXR1ZGUrJyZza2luVHlwZT0wJmtleT1zcGFyazY0JylcbiAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXQvc2hhcmVkL3dpZGdldENvbmVjdGlvbi5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIGNvbnRhY3R7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBib2R5OiBzdHJpbmcsXG4gICAgcHVibGljIGZyb21fZW1haWw6IHN0cmluZyxcbiAgICBwdWJsaWMgdG9fZW1haWw/OiBzdHJpbmcsXG4gICAgcHVibGljIHN1YmplY3Q/OnN0cmluZyxcbiAgKXt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9jb250YWN0LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXJ0aWNzMlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXJ0aWNzMlwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogdGhlIHBvbHlmaWxscyBtdXN0IGJlIHRoZSBmaXJzdCB0aGluZyBpbXBvcnRlZFxuICovXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcbmltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQudHMnOyAvLyB0ZW1wb3JhcnkgdW50aWwgMi4xLjEgdGhpbmdzIGFyZSBwYXRjaGVkIGluIENvcmVcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XG5cbi8vIEFwcFxuXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xuY29uc3QgUk9PVCA9IHBhdGguam9pbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MjAwO1xuXG4vKipcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gKi9cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8qKlxuICogRXhwcmVzcyBWaWV3XG4gKi9cbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihST09ULCAnY2xpZW50JykpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuXG4vKipcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxuICovXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vKipcbiAqIHNlcnZlIHN0YXRpYyBmaWxlc1xuICovXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZX0pKTtcblxuLyoqXG4gKiBwbGFjZSB5b3VyIGFwaSByb3V0ZXMgaGVyZVxuICovXG4vLyBhcHAudXNlKCcvYXBpJywgYXBpKTtcblxuLyoqXG4gKiBib290c3RyYXAgdW5pdmVyc2FsIGFwcFxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlc1xuICovXG5mdW5jdGlvbiBuZ0FwcChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XG4gICAgcmVxLFxuICAgIHJlcyxcbiAgICBuZ01vZHVsZTogQXBwTW9kdWxlLFxuICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgIGJhc2VVcmw6ICcvJyxcbiAgICByZXF1ZXN0VXJsOiByZXEub3JpZ2luYWxVcmwsXG4gICAgb3JpZ2luVXJsOiByZXEuaG9zdG5hbWVcbiAgfSk7XG59XG5cbi8qKlxuICogdXNlIHVuaXZlcnNhbCBmb3Igc3BlY2lmaWMgcm91dGVzXG4gKi9cbmFwcC5nZXQoJy8nLCBuZ0FwcCk7XG5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcbiAgYXBwLmdldChgLyR7cm91dGV9LypgLCBuZ0FwcCk7XG59KTtcblxuLyoqXG4gKiBpZiB5b3Ugd2FudCB0byB1c2UgdW5pdmVyc2FsIGZvciBhbGwgcm91dGVzLCB5b3UgY2FuIHVzZSB0aGUgJyonIHdpbGRjYXJkXG4gKi9cblxuYXBwLmdldCgnKicsIGZ1bmN0aW9uIChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgY29uc3QgcG9qbyA9IHtzdGF0dXM6IDQwNCwgbWVzc2FnZTogJ05vIENvbnRlbnQnfTtcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHBvam8sIG51bGwsIDIpO1xuICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcbn0pO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfX2NvbXBpbGVyX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG52YXIgX19jb3JlX3ByaXZhdGVfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xubGV0IHBhdGNoOiBCb29sZWFuID0gZmFsc2U7XG5cbmlmICghX19jb3JlX3ByaXZhdGVfXy5oYXNPd25Qcm9wZXJ0eSgnVmlld1V0aWxzJykpIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG59XG5cbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbnZhciBfX3VuaXZlcnNhbF9fOiBhbnkgPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbmlmIChwYXRjaCkge1xuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzfSBmcm9tIFwiYW5ndWxhcnRpY3MyXCI7XG5pbXBvcnQge1dpZGdldENvbm5lY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi93aWRnZXQvc2hhcmVkL3dpZGdldENvbmVjdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge2lzQnJvd3Nlcn0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljczogQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzICwgcHJpdmF0ZSB3aWRnZXRTZXJ2aWNlOiBXaWRnZXRDb25uZWN0aW9uU2VydmljZSkge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlLmxvY2F0aW9uT25Mb2FkKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIvKipcbiAqIFRoaXMgZmlsZSBhbmQgYG1haW4ubm9kZS50c2AgYXJlIGlkZW50aWNhbCwgYXQgdGhlIG1vbWVudCghKVxuICogQnkgc3BsaXR0aW5nIHRoZXNlLCB5b3UncmUgYWJsZSB0byBjcmVhdGUgbG9naWMsIGltcG9ydHMsIGV0YyB0aGF0IGFyZSBcIlBsYXRmb3JtXCIgc3BlY2lmaWMuXG4gKiBJZiB5b3Ugd2FudCB5b3VyIGNvZGUgdG8gYmUgY29tcGxldGVseSBVbml2ZXJzYWwgYW5kIGRvbid0IG5lZWQgdGhhdFxuICogWW91IGNhbiBhbHNvIGp1c3QgaGF2ZSAxIGZpbGUsIHRoYXQgaXMgaW1wb3J0ZWQgaW50byBib3RoXG4gKiBjbGllbnQudHMgYW5kIHNlcnZlci50c1xuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VuaXZlcnNhbE1vZHVsZSwgaXNCcm93c2VyLCBpc05vZGV9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9nZW5lcmFsLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9nZW5lcmFsLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvaG9tZS1wYWdlL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEZXZlbG9wZXJzQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9hYm91dC1wYWdlL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm91bmRlcnNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2Fib3V0LXBhZ2UvZm91bmRlcnMvZm91bmRlcnMuY29tcG9uZW50XCI7XG5pbXBvcnQge0Rlc2NyaXB0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9hYm91dC1wYWdlL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTY2hvb2xzQWJvdXRDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3NjaG9vbHMvYWJvdXQtcGFnZS9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVnaXN0cmF0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9zY2hvb2xzL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7RW1haWxTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvZW1haWwuc2VydmljZVwiO1xuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7V2lkZ2V0Q29tcG9uZW50fSBmcm9tIFwiLi93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gXCIuL3dpZGdldC9tYXAvbWFwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXaGVlbENvbXBvbmVudH0gZnJvbSBcIi4vd2lkZ2V0L3doZWVsL3doZWVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXaWRnZXRDb25uZWN0aW9uU2VydmljZX0gZnJvbSBcIi4vd2lkZ2V0L3NoYXJlZC93aWRnZXRDb25lY3Rpb24uc2VydmljZVwiO1xuXG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmVcIjtcbmltcG9ydCB7QW5ndWxhcnRpY3MyTW9kdWxlLCBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3N9IGZyb20gXCJhbmd1bGFydGljczJcIjtcbmltcG9ydCB7TmcyUGFnZVNjcm9sbE1vZHVsZX0gZnJvbSBcIm5nMi1wYWdlLXNjcm9sbFwiO1xuXG4vLyBpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgYXBwUm91dGVzIH0gZnJvbSAnLi9hcHAvYXBwLnJvdXRpbmcnO1xuXG5cbmNvbnN0IHJvdXRlcjogUm91dGVzID0gW1xuICB7cGF0aDogJycgLCByZWRpcmVjdFRvOiAnaG9tZScgLCBwYXRoTWF0Y2g6ICdmdWxsJ30sXG4gIHtwYXRoOiAnaG9tZScgLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICB7cGF0aDogJ2Fib3V0JyAsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnR9LFxuICB7cGF0aDogJ3NjaG9vbHMnICxyZWRpcmVjdFRvOiAnc2Nob29scy9hYm91dCcgLCBwYXRoTWF0Y2g6J2Z1bGwnfSxcbiAge3BhdGg6ICdzY2hvb2xzJyAsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnYWJvdXQnICwgY29tcG9uZW50OlNjaG9vbHNBYm91dENvbXBvbmVudH0sXG4gICAgICB7cGF0aDogJ3JlZ2lzdHJhdGlvbicsIGNvbXBvbmVudDpSZWdpc3RyYXRpb25Db21wb25lbnR9XG4gICAgXX0sXG4gIC8vIHtwYXRoOiAnd2lkZ2V0JywgY29tcG9uZW50OiBXaWRnZXRDb21wb25lbnR9LFxuICB7cGF0aDogJ2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnR9XG5dO1xuXG5cblxuLyoqXG4gKiBUb3AtbGV2ZWwgTmdNb2R1bGUgXCJjb250YWluZXJcIlxuICovXG5ATmdNb2R1bGUoe1xuICAvKiogUm9vdCBBcHAgQ29tcG9uZW50ICovXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgLyoqIE91ciBDb21wb25lbnRzICovXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgRGV2ZWxvcGVyc0NvbXBvbmVudCxcbiAgICBGb3VuZGVyc0NvbXBvbmVudCxcbiAgICBEZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICBSZWdpc3RyYXRpb25Db21wb25lbnQsXG4gICAgU2Nob29sc0Fib3V0Q29tcG9uZW50LFxuICAgIENvbnRhY3RDb21wb25lbnQsXG5cbiAgICAvKiogTG9hZGVkIGJ1dCB3aWxsIGJlIHVzZWQgaW4gYnJvd3NlciBjaGVjayB0cyBmaWxlIGZvciBpc0Jyb3dzZXIgc3RhdG1lbnQgISEhKi9cbiAgICBXaWRnZXRDb21wb25lbnQsXG4gICAgTWFwQ29tcG9uZW50LFxuICAgIFdoZWVsQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICAvKipcbiAgICAgKiBOT1RFOiBOZWVkcyB0byBiZSB5b3VyIGZpcnN0IGltcG9ydCAoISlcbiAgICAgKiBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgYXJlIGluY2x1ZGVkXG4gICAgICovXG4gICAgVW5pdmVyc2FsTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgLyoqXG4gICAgICogdXNpbmcgcm91dGVzXG4gICAgICovXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVyKSxcblxuICAgIC8qKiBMb2FkZWQgYnV0IHdpbGwgYmUgdXNlZCBpbiBicm93c2VyIGNoZWNrIHRzIGZpbGUgZm9yIGlzQnJvd3NlciBzdGF0bWVudCAhISEqL1xuICAgIE5nMlBhZ2VTY3JvbGxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBhcGlLZXk6IFwiQUl6YVN5Q015c0ozTXV0S0tBV0NfXzc0Szl0ekkwYVZja1Z5b0UwXCIsXG4gICAgICBsaWJyYXJpZXM6IFtcInBsYWNlc1wiXVxuICAgIH0pLFxuICAgIEFuZ3VsYXJ0aWNzMk1vZHVsZS5mb3JSb290KFsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIF0pXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogJ2lzQnJvd3NlcicsIHVzZVZhbHVlOiBpc0Jyb3dzZXIgfSxcbiAgICB7IHByb3ZpZGU6ICdpc05vZGUnLCB1c2VWYWx1ZTogaXNOb2RlIH0sXG4gICAgRW1haWxTZXJ2aWNlLFxuXG4gICAgLyoqIExvYWRlZCBidXQgd2lsbCBiZSB1c2VkIGluIGJyb3dzZXIgY2hlY2sgdHMgZmlsZSBmb3IgaXNCcm93c2VyIHN0YXRtZW50ICEhISovXG4gICAgV2lkZ2V0Q29ubmVjdGlvblNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2dlbmVyYWwtY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7Q29tcG9uZW50LCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc0Jyb3dzZXJ9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgaGVhZGVyU2Nyb2xsZWRTdHlsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNPcGVuOmJvb2xlYW4gPSBmYWxzZTtcbiAgZHJvcElzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnICwgWyckZXZlbnQnXSlcbiAgcmVtb3ZlTWVudShldmVudCl7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA4MTUpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk9wZW5NZW51KCl7XG4gICAgdGhpcy5kcm9wSXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW5cbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZ2VuZXJhbC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWFib3V0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOltcIi4vYWJvdXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtZGVzY3JpcHRpb25cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25Db21wb25lbnR7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWRldmVsb3BlcnNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9kZXZlbG9wZXJzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kZXZlbG9wZXJzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRGV2ZWxvcGVyc0NvbXBvbmVudHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9hYm91dC1wYWdlL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnQudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1mb3VuZGVyc1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2ZvdW5kZXJzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9mb3VuZGVycy5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEZvdW5kZXJzQ29tcG9uZW50IHtcblxuXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9mb3VuZGVycy9mb3VuZGVycy5jb21wb25lbnQudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Y29udGFjdH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb250YWN0XCI7XG5pbXBvcnQge0VtYWlsU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9lbWFpbC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonYXBwLWNvbnRhY3QnLFxuICB0ZW1wbGF0ZVVybDonLi9jb250YWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOlsnLi9jb250YWN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIG15Rm9ybTogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsU2VydmljZTogRW1haWxTZXJ2aWNlKXt9XG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5teUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICduYW1lJzogbmV3IEZvcm1Db250cm9sKCcnICwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAnZW1haWwnOm5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyldKSxcbiAgICAgICdwaG9uZU51bWJlcic6IG5ldyBGb3JtQ29udHJvbCgnJyAsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ21lc3NhZ2UnOiBuZXcgRm9ybUNvbnRyb2woJycgLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKXtcbiAgICBsZXQgYm9keSA9IFwiXFxuIFBob25lOiBcIiArIHRoaXMubXlGb3JtLmNvbnRyb2xzWydwaG9uZU51bWJlciddLnZhbHVlICsgXCJcXG4gTmFtZTogXCIgKyB0aGlzLm15Rm9ybS5jb250cm9sc1snbmFtZSddLnZhbHVlICsgXCIgXFxuIE1lc3NhZ2U6IFwiICsgdGhpcy5teUZvcm0uY29udHJvbHNbJ25hbWUnXS52YWx1ZTtcbiAgICBsZXQgY29udGFjdFVzZXI6IGNvbnRhY3QgPSBuZXcgY29udGFjdChib2R5ICAsIHRoaXMubXlGb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlKTtcbiAgICB0aGlzLmVtYWlsU2VydmljZS5zZW5kQ29udGFjdEVtYWlsKGNvbnRhY3RVc2VyICwgJ2NvbnRhY3QnKTtcbiAgICB0aGlzLm15Rm9ybS5yZXNldCgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtpc0Jyb3dzZXJ9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcbmRlY2xhcmUgdmFyICQ6YW55O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIGlzVmlkZW86Ym9vbGVhbiA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScgLCBbJyRldmVudCddKVxuICByZW1vdmVWaWRlbyhldmVudCl7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gODAwKSB7XG4gICAgICAgIHRoaXMuaXNWaWRlbyA9IGZhbHNlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuaXNWaWRlbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA4MDApIHtcbiAgICAgICAgdGhpcy5pc1ZpZGVvID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCxGb3JtR3JvdXAsVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge2NvbnRhY3R9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29udGFjdFwiO1xuaW1wb3J0IHtFbWFpbFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZW1haWwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1zY2hvb2xzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Fib3V0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU2Nob29sc0Fib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBteUZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsU2VydmljZTogRW1haWxTZXJ2aWNlKXt9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubXlGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBuYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5wYXR0ZXJuKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKV0pLFxuICAgICAgcGhvbmU6IG5ldyBGb3JtQ29udHJvbCgnJyksXG4gICAgICBzY2hvb2w6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICB9KTtcbiAgfVxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgYm9keSA9IFwiXFxuIFBob25lOiBcIiArIHRoaXMubXlGb3JtLmNvbnRyb2xzWydwaG9uZSddLnZhbHVlICsgXCJcXG4gTmFtZTogXCIgKyB0aGlzLm15Rm9ybS5jb250cm9sc1snbmFtZSddLnZhbHVlICsgXCJcXG4gU2Nob29sOiBcIiArIHRoaXMubXlGb3JtLmNvbnRyb2xzWydzY2hvb2wnXS52YWx1ZSA7XG4gICAgbGV0IGNvbnRhY3RVc2VyOiBjb250YWN0ID0gbmV3IGNvbnRhY3QoYm9keSAgLCB0aGlzLm15Rm9ybS5jb250cm9sc1snZW1haWwnXS52YWx1ZSk7XG4gICAgdGhpcy5lbWFpbFNlcnZpY2Uuc2VuZENvbnRhY3RFbWFpbChjb250YWN0VXNlciAsICdvcmRlcicpO1xuICAgIHRoaXMubXlGb3JtLnJlc2V0KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvc2Nob29scy9hYm91dC1wYWdlL2Fib3V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUNvbnRyb2wsRm9ybUdyb3VwLFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtjb250YWN0fSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbnRhY3RcIjtcbmltcG9ydCB7RW1haWxTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2VtYWlsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1yZWdpc3RyYXRpb25cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOltcIi4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIG15Rm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1haWxTZXJ2aWNlOiBFbWFpbFNlcnZpY2Upe31cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLm15Rm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgbmFtZTogbmV3IEZvcm1Db250cm9sKCcnLFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5wYXR0ZXJuKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKV0pLFxuICAgICAgcGhvbmU6IG5ldyBGb3JtQ29udHJvbCgnJyksXG4gICAgICBzY2hvb2w6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICBzZW5zb3I6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICB9KVxuICB9XG4gIG9uU3VibWl0KCkge1xuICAgIGxldCBib2R5ID0gXCJcXG4gUGhvbmU6IFwiICsgdGhpcy5teUZvcm0uY29udHJvbHNbJ3Bob25lJ10udmFsdWUgKyBcIlxcbiBOYW1lOiBcIiArIHRoaXMubXlGb3JtLmNvbnRyb2xzWyduYW1lJ10udmFsdWUgKyBcIlxcbiBTY2hvb2w6IFwiICsgdGhpcy5teUZvcm0uY29udHJvbHNbJ3NjaG9vbCddLnZhbHVlICsgXCJcXG4gU2Vuc29yOiBcIiArIHRoaXMubXlGb3JtLmNvbnRyb2xzWydzZW5zb3InXS52YWx1ZTtcbiAgICBsZXQgY29udGFjdFVzZXI6IGNvbnRhY3QgPSBuZXcgY29udGFjdChib2R5ICAsIHRoaXMubXlGb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlKTtcbiAgICB0aGlzLmVtYWlsU2VydmljZS5zZW5kQ29udGFjdEVtYWlsKGNvbnRhY3RVc2VyICwgJ3JlZ2lzdHJhdGlvbicpO1xuICAgIHRoaXMubXlGb3JtLnJlc2V0KCk7XG4gIH1cblxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9zY2hvb2xzL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBOZ1pvbmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtNYXBzQVBJTG9hZGVyfSBmcm9tIFwiYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZVwiO1xuaW1wb3J0IHtXaWRnZXRDb25uZWN0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC93aWRnZXRDb25lY3Rpb24uc2VydmljZVwiO1xuaW1wb3J0IHtpc0Jyb3dzZXJ9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuZGVjbGFyZSB2YXIgZ29vZ2xlIDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1tYXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21hcC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHNlYXJjaENvbnRyb2w6IEZvcm1Db250cm9sO1xuICB6b29tOiBudW1iZXI7XG4gIG1hcmtlcjogYW55O1xuICBnZW9jb2RlcjogYW55O1xuICBkaXNwbGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgaW5mb19iaWc6IGJvb2xlYW47XG4gIGZsYW1lc0xvYWRpbmc6IGJvb2xlYW4gPWZhbHNlO1xuICBuYW1lOiBhbnk7XG4gIGFwaURhdGE6IGFueTtcbiAgdXZMZXZlbDogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBvcGVuQ29tcG9uZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoXCJzZWFyY2hcIilcbiAgcHVibGljIHNlYXJjaEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJtYXBcIilcbiAgcHVibGljIG1hcEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXBzQVBJTG9hZGVyOiBNYXBzQVBJTG9hZGVyLFxuICAgIHByaXZhdGUgd2lkZ2V0U2VydmljZTpXaWRnZXRDb25uZWN0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWFyY2hDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLndpZGdldFNlcnZpY2UubmV3UGxhY2Uuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubmFtZSA9IGRhdGEucGxhY2VOYW1lO1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgLy9zZXQgZ29vZ2xlIG1hcHMgZGVmYXVsdHNcbiAgICAgIHRoaXMuem9vbSA9IDE3O1xuICAgICAgdGhpcy5sYXRpdHVkZSA9IHRoaXMud2lkZ2V0U2VydmljZS5sYXRpdHVkZTtcbiAgICAgIHRoaXMubG9uZ2l0dWRlID0gdGhpcy53aWRnZXRTZXJ2aWNlLmxvbmdpdHVkZTtcblxuICAgICAgLy9jcmVhdGUgc2VhcmNoIEZvcm1Db250cm9sXG5cblxuICAgICAgLy9sb2FkIFBsYWNlcyBBdXRvY29tcGxldGVcbiAgICAgIHRoaXMubWFwc0FQSUxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMubWFwRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgICAgY2VudGVyOiB7bGF0OiB0aGlzLmxhdGl0dWRlLCBsbmc6IHRoaXMubG9uZ2l0dWRlfSxcbiAgICAgICAgICB6b29tOiAxMyxcbiAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICBnZXN0dXJlSGFuZGxpbmc6ICdjb29wZXJhdGl2ZScsXG4gICAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX0NFTlRFUlxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxuICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlLFxuICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5SSUdIVF9DRU5URVJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgbWFwVHlwZUlkczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzZWFyY2hCb3ggPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZSh0aGlzLnNlYXJjaEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIG1hcC5jb250cm9sc1tnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uVE9QX0xFRlRdLnB1c2godGhpcy5zZWFyY2hFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIG1hcC5hZGRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGxhY2VNYXJrZXIoe2xhdDogZS5sYXRMbmcubGF0KCksIGxuZzogZS5sYXRMbmcubG5nKCl9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFwLmFkZExpc3RlbmVyKCdib3VuZHNfY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICBzZWFyY2hCb3guc2V0Qm91bmRzKG1hcC5nZXRCb3VuZHMoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWFyY2hCb3guYWRkTGlzdGVuZXIoXCJwbGFjZV9jaGFuZ2VkXCIsICgpID0+IHtcbiAgICAgICAgICAvL2dldCB0aGUgcGxhY2UgcmVzdWx0XG4gICAgICAgICAgdmFyIHBsYWNlID0gc2VhcmNoQm94LmdldFBsYWNlKCk7XG5cbiAgICAgICAgICBpZiAocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcbiAgICAgICAgICAgIG1hcC5maXRCb3VuZHMocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXAuc2V0Q2VudGVyKHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICAgICAgICAgIG1hcC5zZXRab29tKDE3KTsvLyBXaHkgMTc/IEJlY2F1c2UgaXQgbG9va3MgZ29vZC5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XG4gICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcblxuICAgICAgICAgIHRoaXMucGxhY2VNYXJrZXIoe2xhdDogdGhpcy5sYXRpdHVkZSwgbG5nOiB0aGlzLmxvbmdpdHVkZX0pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgdGhpcy5nZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcjtcbiAgICAgICAgdGhpcy5wbGFjZU1hcmtlcih7bGF0OiB0aGlzLmxhdGl0dWRlLCBsbmc6IHRoaXMubG9uZ2l0dWRlfSk7XG4gICAgICAgIHRoaXMubWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dJbmZvKCk7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHBsYWNlTWFya2VyKGxhdExuZyl7XG4gICAgdGhpcy5zaG93SW5mbygpO1xuICAgIHRoaXMuZ2VvY29kZVRoaXMoe2xhdDpsYXRMbmcubGF0LCBsbmc6bGF0TG5nLmxuZ30pO1xuICB9XG5cbiAgZ2VvY29kZVRoaXMobGF0TG5nKXtcbiAgICB0aGlzLmZsYW1lc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmluZm9fYmlnID0gZmFsc2U7XG4gICAgdGhpcy5nZW9jb2Rlci5nZW9jb2RlKHsnbG9jYXRpb24nOiBsYXRMbmd9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICBpZiAocmVzdWx0c1sxXSkge1xuICAgICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKGxhdExuZyk7XG4gICAgICAgICAgdGhpcy53aWRnZXRTZXJ2aWNlLnNldExvY2F0aW9uKGxhdExuZy5sYXQsIGxhdExuZy5sbmcsIHJlc3VsdHNbMV0uYWRkcmVzc19jb21wb25lbnRzKTtcbiAgICAgICAgICB0aGlzLndpZGdldFNlcnZpY2UuZ2V0Rm9yZWNhc3REYXRhKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGEpPT4ge1xuICAgICAgICAgICAgICB0aGlzLmFwaURhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICB2YXIgY3VycmVudFV2ID0gdGhpcy5hcGlEYXRhLkN1cnJlbnRVVjtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRVdiA+PSAwLjAgJiYgY3VycmVudFV2IDwgMC41KSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dkxldmVsID0gJ05vbmUnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50VXYgPj0gMC41ICYmIGN1cnJlbnRVdiA8IDMuMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXZMZXZlbCAgPSAnTG93JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY3VycmVudFV2ID49IDMuMCAmJiBjdXJyZW50VXYgPCA2LjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV2TGV2ZWwgID0gJ01vZGVyYXRlJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY3VycmVudFV2ID49ICA2LjAgICYmIGN1cnJlbnRVdiA8IDguMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXZMZXZlbCAgPSAnSGlnaCc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRVdiA+PSAgOC4wICAmJiBjdXJyZW50VXYgPCAxMS4wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dkxldmVsICA9ICdWZXJ5IGhpZ2gnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50VXYgPj0gIDExLjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV2TGV2ZWwgID0gJ0V4dHJlbWUnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZmxhbWVzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCk9Pnt9KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpPT57XG4gICAgICAgICAgICAgIHRoaXMuYXBpRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIlN0YXJ0VGltZVwiOiBcIjIwMTctMDEtMDJUMDY6MDA6MDBcIixcbiAgICAgICAgICAgICAgICBcIlVWRm9yZWNhc3RcIjogW1xuICAgICAgICAgICAgICAgICAgMC4yODgwODU5MzgsXG4gICAgICAgICAgICAgICAgICAwLjg2OTE0MDYsXG4gICAgICAgICAgICAgICAgICAyLjIzMTQ0NTMxLFxuICAgICAgICAgICAgICAgICAgNC4yMjM2MzMsXG4gICAgICAgICAgICAgICAgICAyLjI4MDI3MzQ0LFxuICAgICAgICAgICAgICAgICAgMi45NDQzMzYsXG4gICAgICAgICAgICAgICAgICAzLjI5NTg5ODQ0LFxuICAgICAgICAgICAgICAgICAgNC4zNTU0Njg3NSxcbiAgICAgICAgICAgICAgICAgIDMuNzIwNzAzMTMsXG4gICAgICAgICAgICAgICAgICAyLjcyOTQ5MjE5LFxuICAgICAgICAgICAgICAgICAgMi4yNDEyMTEsXG4gICAgICAgICAgICAgICAgICAxLjA3OTEwMTU2LFxuICAgICAgICAgICAgICAgICAgMC4zNzEwOTM3NSxcbiAgICAgICAgICAgICAgICAgIDAuMDkyNzczNDQsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMC4yOTc4NTE1NjMsXG4gICAgICAgICAgICAgICAgICAwLjc5NTg5ODQzOCxcbiAgICAgICAgICAgICAgICAgIDIuMDUwNzgxMjUsXG4gICAgICAgICAgICAgICAgICAzLjg5NjQ4NDM4LFxuICAgICAgICAgICAgICAgICAgOC41MzAyNzMsXG4gICAgICAgICAgICAgICAgICAxMS4wMjA1MDc4LFxuICAgICAgICAgICAgICAgICAgMTIuMzI5MTAxNixcbiAgICAgICAgICAgICAgICAgIDEyLjQzNjUyMzQsXG4gICAgICAgICAgICAgICAgICAxMC42MjUsXG4gICAgICAgICAgICAgICAgICA3Ljc5Mjk2ODc1LFxuICAgICAgICAgICAgICAgICAgNC4zNzUsXG4gICAgICAgICAgICAgICAgICAyLjEwNDQ5MjE5LFxuICAgICAgICAgICAgICAgICAgMC43MjI2NTYyNSxcbiAgICAgICAgICAgICAgICAgIDAuMDE5NTMxMjUsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIkZvcmVjYXN0TG9jYXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxNzUsXG4gICAgICAgICAgICAgICAgICAgIC0zN1xuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJCdXJudGltZUZvcmVjYXN0XCI6IFtdLFxuICAgICAgICAgICAgICAgIFwiRGFpbHlNZXNzYWdlXCI6IFwiVGhlIFVWIHRvZGF5IGlzIGZvcmVjYXN0ZWQgdG8gYmUgTW9kZXJhdGUuIEJlIGNhcmVmdWwgYmV0d2VlbiA4OjAwIEFNIGFuZCAzOjAwIFBNIGFuZCByZW1lbWJlciB0byBjb3ZlciB1cCBkdXJpbmcgdGhlc2UgdGltZXMuXCIsXG4gICAgICAgICAgICAgICAgXCJEYWlseU1lc3NhZ2VUb21vcnJvd1wiOiBcIlRoZSBVViB0b21vcnJvdyBpcyBmb3JlY2FzdGVkIHRvIGJlIEV4dHJlbWUuIEJlIGNhcmVmdWwgYmV0d2VlbiA4OjAwIEFNIGFuZCA1OjAwIFBNIGFuZCByZW1lbWJlciB0byBjb3ZlciB1cCBkdXJpbmcgdGhlc2UgdGltZXMuXCIsXG4gICAgICAgICAgICAgICAgXCJEYWlseUZvcmVjYXN0c1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiU2FmZUJlZm9yZVwiOiBcIjIwMTctMDEtMDJUMDg6MDA6MDBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTYWZlQWZ0ZXJcIjogXCIyMDE3LTAxLTAyVDE1OjAwOjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTWF4VVZTdHJpbmdcIjogXCJNb2RlcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIk1heFVWSVwiOiA0LjM1NTQ2ODc1XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIlNhZmVCZWZvcmVcIjogXCIyMDE3LTAxLTAzVDA4OjAwOjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU2FmZUFmdGVyXCI6IFwiMjAxNy0wMS0wM1QxNzowMDowMFwiLFxuICAgICAgICAgICAgICAgICAgICBcIk1heFVWU3RyaW5nXCI6IFwiRXh0cmVtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIk1heFVWSVwiOiAxMi40MzY1MjM0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIkN1cnJlbnRVVlwiOiAxLFxuICAgICAgICAgICAgICAgIFwiU2Vuc29yTG9jYXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxNzQuNzY2NjQ3MzM4ODY3MTksXG4gICAgICAgICAgICAgICAgICAgIC0zNi44NTYxNTUzOTU1MDc4MTNcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiTWVhc3VyZW1lbnRUaW1lXCI6IFwiMjAxNy0wMS0wMlQwNDoxODozMCswMDowMFwiLFxuICAgICAgICAgICAgICAgIFwiTGl2ZURhdGFcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIkN1cnJlbnRXZWF0aGVyXCI6IFwiTW9zdGx5IENsb3VkeVwiLFxuICAgICAgICAgICAgICAgIFwiQ3VycmVudFRlbXBlcmF0dXJlXCI6IDIxLjEsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblN0cmluZ1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiVGltZVpvbmVPZmZzZXRcIjogNDY4MDAwMDBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnRVdiA9IHRoaXMuYXBpRGF0YS5DdXJyZW50VVY7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50VXYgPj0gMC4wICYmIGN1cnJlbnRVdiA8IDAuNSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXZMZXZlbCA9ICdOb25lJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY3VycmVudFV2ID49IDAuNSAmJiBjdXJyZW50VXYgPCAzLjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV2TGV2ZWwgID0gJ0xvdyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRVdiA+PSAzLjAgJiYgY3VycmVudFV2IDwgNi4wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dkxldmVsICA9ICdNb2RlcmF0ZSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRVdiA+PSAgNi4wICAmJiBjdXJyZW50VXYgPCA4LjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV2TGV2ZWwgID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50VXYgPj0gIDguMCAgJiYgY3VycmVudFV2IDwgMTEuMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXZMZXZlbCAgPSAnVmVyeSBoaWdoJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY3VycmVudFV2ID49ICAxMS4wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dkxldmVsICA9ICdFeHRyZW1lJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmZsYW1lc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpPT57fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCk9Pnt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoJ05vIHJlc3VsdHMgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFsZXJ0KCdHZW9jb2RlciBmYWlsZWQgZHVlIHRvOiAnICsgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVJbmZvKCl7XG4gICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gIH1cbiAgbWluaW1pemVJbmZvKCl7XG4gICAgdGhpcy5pbmZvX2JpZyA9IGZhbHNlO1xuICB9XG4gIHNob3dJbmZvKCl7XG4gICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgfVxuICBvcGVuV2hlZWxDb21wb25lbnQoKXtcbiAgICB0aGlzLmluZm9fYmlnID0gdHJ1ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXQvbWFwL21hcC5jb21wb25lbnQudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIE5nWm9uZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2lkZ2V0Q29ubmVjdGlvblNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvd2lkZ2V0Q29uZWN0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7ZXJyb3J9IGZyb20gXCJ1dGlsXCI7XG5pbXBvcnQge2lzQnJvd3Nlcn0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5kZWNsYXJlIHZhciAkOmFueTtcbmRlY2xhcmUgdmFyIENvbmljR3JhZGllbnQ6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC13aGVlbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3doZWVsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi93aGVlbC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXaGVlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBoaW50OnN0cmluZz1cIkxvYWRpbmcuLi5cIjtcbiAgICBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNsaWRlcjtcbiAgICB0aW1lWm9uZU9mZnNldDtcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnSW5mb3JtYXRpb24gYWJvdXQgdG9kYXknO1xuICAgIHV2VmFsdWU6IHN0cmluZyA9ICdWYWx1ZSc7XG4gICAgZm9yZWNhc3RBcnJheSA9IFtdO1xuICAgIHRleHRDb2xvcjogc3RyaW5nO1xuICAgIGZvcmVjYXN0RGF5OiBzdHJpbmc9Jyc7XG4gICAgcGxhY2U6IHN0cmluZz0gJ0xvY2F0aW9uJztcbiAgICBzZXRXaWR0aDtcbiAgICBASW5wdXQoKSBhcGlEYXRhO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpZGdldFNlcnZpY2U6IFdpZGdldENvbm5lY3Rpb25TZXJ2aWNlICwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpe31cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIHJlc2l6ZWQoZXZlbnQpe1xuICAgICAgaWYoaXNCcm93c2VyICkge1xuICAgICAgICBsZXQgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgaWYod2lkdGggIT0gdGhpcy5zZXRXaWR0aCkge1xuICAgICAgICAgIHRoaXMuc2V0V2lkdGggPSB3aWR0aDtcbiAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICB0aGlzLmRyYXdXaGVlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2UgPSB0aGlzLndpZGdldFNlcnZpY2UucGxhY2VOYW1lO1xuICAgICAgICB0aGlzLmdldEluZm9ybWF0aW9uKCk7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldEluZm9ybWF0aW9uKCl7XG4gICAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgICAgdGhpcy50aW1lWm9uZU9mZnNldCA9IHRoaXMuYXBpRGF0YS5UaW1lWm9uZU9mZnNldDtcbiAgICAgICAgdGhpcy5mb3JlY2FzdEFycmF5ID0gdGhpcy5hcGlEYXRhLlVWRm9yZWNhc3Q7XG4gICAgICAgIHZhciBuZCA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy50aW1lWm9uZU9mZnNldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5kLmdldFVUQ0hvdXJzKCkpO1xuICAgICAgICBpZiAobmQuZ2V0VVRDSG91cnMoKSA+PSAxOCAmJiBuZC5nZXRVVENIb3VycygpIDw9IDIzIHx8IG5kLmdldFVUQ0hvdXJzKCkgPj0gMCAmJiBuZC5nZXRVVENIb3VycygpIDwgNikge1xuICAgICAgICAgIHRoaXMuZm9yZWNhc3REYXkgPSBcIlRvbW9ycm93J3NcIjtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmFwaURhdGEuRGFpbHlNZXNzYWdlVG9tb3Jyb3c7XG4gICAgICAgICAgdGhpcy51dlZhbHVlID0gdGhpcy5hcGlEYXRhLkRhaWx5Rm9yZWNhc3RzWzFdLk1heFVWU3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9yZWNhc3REYXkgPSBcIlRvZGF5J3NcIjtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmFwaURhdGEuRGFpbHlNZXNzYWdlO1xuICAgICAgICAgIHRoaXMudXZWYWx1ZSA9IHRoaXMuYXBpRGF0YS5EYWlseUZvcmVjYXN0c1swXS5NYXhVVlN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51dlZhbHVlID09ICdFeHRyZW1lJykge1xuICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gJyM4QzM3NUQnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXZWYWx1ZSA9PSAnTm9uZScpIHtcbiAgICAgICAgICB0aGlzLnRleHRDb2xvciA9ICcjNEJCOEEzJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnV2VmFsdWUgPT0gJ0xvdycpIHtcbiAgICAgICAgICB0aGlzLnRleHRDb2xvciA9ICcjODZCMzdDJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnV2VmFsdWUgPT0gJ01vZGVyYXRlJykge1xuICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gJyNGREFBMkQnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXZWYWx1ZSA9PSAnSGlnaCcpIHtcbiAgICAgICAgICB0aGlzLnRleHRDb2xvciA9ICcjRkQ3QzM0JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnV2VmFsdWUgPT0gJ1ZlcnkgSGlnaCcpIHtcbiAgICAgICAgICB0aGlzLnRleHRDb2xvciA9ICcjREM1NTM1JztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdXaGVlbCgpO1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBpRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1doZWVsKCl7XG4gICAgICAgIHZhciBzaXplID1NYXRoLm1pbigkKCcjZ29kJykuaGVpZ2h0KCksICQoJyNnb2QnKS53aWR0aCgpKS8yLyAgMS4yNTtcbiAgICAgICAgaWYoJCgnI2dvZCcpLndpZHRoKCkgPCA3NjggJiYgJCgnI2dvZCcpLndpZHRoKCkgPiA0NzApe1xuICAgICAgICAgIHNpemUgPSAkKCcjZ29kJykuaGVpZ2h0KCkvMiAvICAxLjI1IC8gMS4yNTtcbiAgICAgICAgfVxuICAgICAgICBpZigkKCcjZ29kJykud2lkdGgoKSA8PSA0NzAgJiYgJCgnI2dvZCcpLmhlaWdodCgpPCA2MDApe1xuICAgICAgICAgIHNpemUgPSAxMjU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihzaXplIDwgMTI1KXtcbiAgICAgICAgICAgIHNpemUgPSAxMjU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihzaXplID4gMjAwKXtcbiAgICAgICAgICAgIHNpemUgPSAyMDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2l6ZSA+IDE4MCAmJiAkKCcjZ29kJykud2lkdGgoKSA8IDgxMyApe1xuICAgICAgICAgIHNpemUgPSAxNTA7XG4gICAgICAgIH1cblxuICAgICAgICBpZihzaXplIDwgMTUwICYmICQod2luZG93KS53aWR0aCgpID4gNzY3ICl7XG4gICAgICAgICAgJCgnI3NsaWRlcicpLmNzcyh7XG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6JzI1cHgnXG4gICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgJCgnI3NsaWRlcicpLmNzcyh7XG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6JzBweCdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKCcjc2xpZGVyJykuQ2lyY3VsYXJTbGlkZXIoe1xuICAgICAgICAgICAgcmFkaXVzOiBzaXplLFxuICAgICAgICAgICAgaW5uZXJDaXJjbGVSYXRpbzogJzAuNicsXG4gICAgICAgICAgICBoYW5kbGVEaXN0OiA4MCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNzIsXG4gICAgICAgICAgICBjbG9ja3dpc2U6IHRydWUsXG4gICAgICAgICAgICAvLyBsYWJlbFN1ZmZpeDogXCI8ZGl2IGlkPSdsYWJlbFN1ZmZpeCc+PGltZyB0eXBlPSdpbWFnZS9zdmcreG1sJyBjbGFzcz0naW1hZ2UtaW5zaWRlJyBpZD0nZXh0cmVtZScgc3JjPSdhc3NldHMvd2lkZ2V0L3dpZGdldC1mbGFtZXMvZXh0cmVtZS5zdmcnPjxpbWcgdHlwZT0naW1hZ2Uvc3ZnK3htbCcgY2xhc3M9J2ltYWdlLWluc2lkZScgaWQ9J25vbmUnIHNyYz0nYXNzZXRzL3dpZGdldC93aWRnZXQtZmxhbWVzL25vbmUuc3ZnJyBhbHQ9J2xvYWRpbmcnPjxpbWcgdHlwZT0naW1hZ2Uvc3ZnK3htbCcgY2xhc3M9J2ltYWdlLWluc2lkZScgaWQ9J2xvdycgc3JjPSdhc3NldHMvd2lkZ2V0L3dpZGdldC1mbGFtZXMvbG93LnN2ZycgYWx0PSdsb2FkaW5nJz48aW1nIHR5cGU9J2ltYWdlL3N2Zyt4bWwnIGNsYXNzPSdpbWFnZS1pbnNpZGUnIGlkPSdtb2RlcmF0ZScgc3JjPSdhc3NldHMvd2lkZ2V0L3dpZGdldC1mbGFtZXMvbW9kZXJhdGUuc3ZnJyBhbHQ9J2xvYWRpbmcnPjxpbWcgdHlwZT0naW1hZ2Uvc3ZnK3htbCcgY2xhc3M9J2ltYWdlLWluc2lkZScgaWQ9J2hpZ2gnIHNyYz0nYXNzZXRzL3dpZGdldC93aWRnZXQtZmxhbWVzL2hpZ2guc3ZnJyBhbHQ9J2xvYWRpbmcnPjxpbWcgdHlwZT0naW1hZ2Uvc3ZnK3htbCcgY2xhc3M9J2ltYWdlLWluc2lkZScgaWQ9J3ZlcnloaWdoJyBzcmM9J2Fzc2V0cy93aWRnZXQvd2lkZ2V0LWZsYW1lcy92ZXJ5aGlnaC5zdmcnIGFsdD0nbG9hZGluZyc+PGJyPjxzbWFsbCBpZD0naW1hZ2UtaW4tdGV4dCcgc3R5bGU9JyB0ZXh0LWFsaWduOmNlbnRlcjsgY29sb3I6d2hpdGU7IGZvbnQtc2l6ZTogMThweCc+T29wcyA6KDwvc21hbGw+PC9kaXY+XCIsXG4gICAgICAgICAgICBsYWJlbFN1ZmZpeDogXCI8ZGl2IGlkPSdsYWJlbFN1ZmZpeCc+PGltZyAgY2xhc3M9J2ltYWdlLWluc2lkZScgaWQ9J2V4dHJlbWUnIHNyYz0nYXNzZXRzL3dpZGdldC93aWRnZXQtZmxhbWVzL2ZsYW1lcy1leHRyZW1lLnBuZyc+PGltZyBjbGFzcz0naW1hZ2UtaW5zaWRlJyBpZD0nbm9uZScgc3JjPSdhc3NldHMvd2lkZ2V0L3dpZGdldC1mbGFtZXMvZmxhbWVzLW5vbmUucG5nJyBhbHQ9J2xvYWRpbmcnPjxpbWcgIGNsYXNzPSdpbWFnZS1pbnNpZGUnIGlkPSdsb3cnIHNyYz0nYXNzZXRzL3dpZGdldC93aWRnZXQtZmxhbWVzL2ZsYW1lcy1sb3cucG5nJyBhbHQ9J2xvYWRpbmcnPjxpbWcgY2xhc3M9J2ltYWdlLWluc2lkZScgaWQ9J21vZGVyYXRlJyBzcmM9J2Fzc2V0cy93aWRnZXQvd2lkZ2V0LWZsYW1lcy9mbGFtZXMtbW9kZXJhdGUucG5nJyBhbHQ9J2xvYWRpbmcnPjxpbWcgY2xhc3M9J2ltYWdlLWluc2lkZScgaWQ9J2hpZ2gnIHNyYz0nYXNzZXRzL3dpZGdldC93aWRnZXQtZmxhbWVzL2ZsYW1lcy1oaWdoLnBuZycgYWx0PSdsb2FkaW5nJz48aW1nIGNsYXNzPSdpbWFnZS1pbnNpZGUnIGlkPSd2ZXJ5aGlnaCcgc3JjPSdhc3NldHMvd2lkZ2V0L3dpZGdldC1mbGFtZXMvZmxhbWVzLXZlcnloaWdoLnBuZycgYWx0PSdsb2FkaW5nJz48YnI+PHNtYWxsIGlkPSdpbWFnZS1pbi10ZXh0JyBzdHlsZT0nIHRleHQtYWxpZ246Y2VudGVyOyBjb2xvcjp3aGl0ZTsgZm9udC1zaXplOiAxOHB4Jz5Pb3BzIDooPC9zbWFsbD48L2Rpdj5cIixcbiAgICAgICAgICAgIGxhYmVsUHJlZml4OiBcIjxicj5cIixcbiAgICAgICAgICAgIHNoYXBlOiBcIkNpcmNsZVwiLFxuICAgICAgICAgICAgdG91Y2g6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgYW5pbWF0ZUR1cmF0aW9uOiAxNTAsXG4gICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZvcmVjYXN0QXJyYXk6IHRoaXMuZm9yZWNhc3RBcnJheSxcbiAgICAgICAgICAgIGxvY2F0aW9uT2Zmc2V0OiB0aGlzLnRpbWVab25lT2Zmc2V0LFxuICAgICAgICAgICAgZm9ybUxhYmVsOiB1bmRlZmluZWQsXG5cbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldC93aGVlbC93aGVlbC5jb21wb25lbnQudHMiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi93aWRnZXQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29tcG9uZW50IHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgMiBhbmQgaXMgbG9hZGVkIGJlZm9yZVxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cblxuLy8gaW1wb3J0ICdjb3JlLWpzL2NsaWVudC9zaGltLm1pbi5qcyc7XG4vLyBpbXBvcnQgJy4vYXNzZXRzL3BvbHlmaWxzL3dlYi1hbmltYXRpb24uanMnO1xuLy8gaW1wb3J0ICcuL2Fzc2V0cy9wb2x5Zmlscy9jbGFzc0xpc3QuanMnO1xuXG5cbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5cbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcbmltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcblxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXG4gKlxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICogJ2hvbWUnLCAnYWJvdXQnXG4gKiBdO1xuICoqL1xuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gICdob21lJywgJ2Fib3V0JywgJ3NjaG9vbHMvYWJvdXQnLCAnc2Nob29scy9yZWdpc3RyYXRpb24nICwgJ2NvbnRhY3QnXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZm9vdGVyLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTNCNDg7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmhvdmVyLCBhIGZvY3VzIHtcXG4gIGNvbG9yOiAjNTVhY2VlO1xcbn1cXG5cXG4uZm9vdGVyLXNvY2lhbCB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmZvb3Rlci1mYWNlYm9vayB7XFxuICBjb2xvcjogIzNiNTk5OCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9vdGVyLXR3aXR0ZXIge1xcbiAgY29sb3I6ICM1NWFjZWUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvb3Rlci1pbnN0YWdyYW0ge1xcbiAgY29sb3I6ICMzZjcyOWIgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZvb3Rlci1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9vdGVyLXNvY2lhbCB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgfVxcblxcbiAgLmxpY2VuY2Utcm93IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2dlbmVyYWwtY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuYm94IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTNiNDg7XFxuICBtaW4taGVpZ2h0OiA2NXB4O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmY3ZTI5O1xcbn1cXG5cXG4uZHJvcC1pbi1kcm9wLWdyb3VwIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnNjaG9vbHMtc3BlY2lhbCB7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZmY3ZTI5ICFpbXBvcnRhbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5zY2hvb2xzLXNwZWNpYWw6aG92ZXIge1xcbiAgY29sb3I6ICNGRkE0NDIgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3AtaW4tZHJvcCB7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZmY3ZTI5ICFpbXBvcnRhbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmRyb3AtaW4tZHJvcDpob3ZlciB7XFxuICBjb2xvcjogI0ZGQTQ0MiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJvcC1pbi1kcm9wLWFjdGl2ZSB7XFxuICBjb2xvcjogI0ZGQTQ0MiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3BhY2luZyB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdG9wOiAzM3B4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XFxufVxcblxcbi5kcm9wLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFOUU5O1xcbn1cXG5cXG4uZHJvcC1pbi1kcm9wLWRpc3BsYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bjpob3ZlciBhOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mYWNlYm9vayB7XFxuICBjb2xvcjogIzNiNTk5OCAgIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogOXB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA5cHggIWltcG9ydGFudDtcXG59XFxuXFxuLnR3aXR0ZXIge1xcbiAgY29sb3I6ICM1NWFjZWUgICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pbnN0YWdyYW0ge1xcbiAgY29sb3I6ICMzZjcyOWIgICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZW51LWl0ZW0tY2VudGVyLFxcbi5tZW51LWl0ZW0tc3BlY2lhbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uc29jaWFsLWdyb3VwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsb2F0OiBub25lO1xcbn1cXG4uc29jaWFsLWdyb3VwIC5zb2NpYWwge1xcbiAgcGFkZGluZzogN3B4O1xcbn1cXG4uc29jaWFsLWdyb3VwIC5zb2NpYWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuLm1lbnUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBwYWRkaW5nLXRvcDogN3B4O1xcbn1cXG4ubG9nbyBpbWcge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBwYWRkaW5nLXRvcDogMjFweDtcXG59XFxuXFxuYTpob3ZlciwgYTphY3RpdmUsIGE6dmlzaXRlZCwgYTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5vcmFuZ2UtbGluayB7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XFxuICBjb2xvcjogI2ZmN2UyOSAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ub3JhbmdlLWxpbms6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjdlMjk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2JpbGUtbmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub3BlblNjaG9vbHMgLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRyb3BwZWQtbW9iaWxlLW1lbnUgLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLmRyb3BwZWQtbW9iaWxlLW1lbnUgLm1lbnUtaXRlbSBhIHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXG4gIC5vcGVuIC5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tb2JpbGUtbmF2aWdhdGlvbiB7XFxuICAgIGNvbG9yOiAjZmY3ZTI5O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgfVxcbiAgLm1vYmlsZS1uYXZpZ2F0aW9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gIC5pbnN0YWdyYW0sXFxuICAudHdpdHRlciB7XFxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmZhY2Vib29rIHtcXG4gICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuaW5zdGFncmFtLFxcbiAgLnR3aXR0ZXIge1xcbiAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5mYWNlYm9vayB7XFxuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgLm1lbnUtaXRlbS1zcGVjaWFsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm1lbnUtaXRlbS1zcGVjaWFsIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIH1cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZ2VuZXJhbC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlLWhlYWRlcntcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgY29sb3I6ICNmMjcxMjE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRhYmJlZC10ZXh0e1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XFxuICBwYWRkaW5nOjEwcHggMjBweCAxMHB4IDE1cHggIDtcXG59XFxuXFxuLmhlYWRlci1ibG9ja3tcXG4gIG1hcmdpbjoyMHB4O1xcbn1cXG4uc3RvcnktdGl0bGV7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICNmMjcxMjE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpe1xcbiAgLmhlYWRlci1ibG9jayB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlLWhlYWRlcntcXG4gIG1hcmdpbi10b3A6IDkwcHg7XFxuICBjb2xvcjogI2YyNzEyMTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uZml4ZWQtcHJvcGVydGllc3tcXG4gIHdpZHRoOiA5MCUgO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLm5hbWUtd3JhcHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmhlYWRlci1ibG9ja3tcXG4gIG1hcmdpbjoyMHB4O1xcbn1cXG4uZGV2LWhlYWR7XFxuICBoZWlnaHQ6NzVweDtcXG59XFxuLmRldi1yb3d7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZGV2ZWxvcGVycy9kZXZlbG9wZXJzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZml4ZWQtcHJvcGVydGllcyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmhlYWRlci1ibG9jayB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5mb3VuZGVycy10ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGEyNDI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGEyNDI7XFxuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmZvdW5kZXJzLWhlYWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYXJkLWRlY2std3JhcHBlciB7XFxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYWdlLWhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgY29sb3I6ICNmMjcxMjE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDkxcHgpIHtcXG4gIC5maXhlZC1wcm9wZXJ0aWVzIHtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0NXB4KSB7XFxuICAuY2FyZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDc5MnB4KSB7XFxuICAucmljaGFyZC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLmNhcmQge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmZpeGVkLXByb3BlcnRpZXMge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAuZml4ZWQtcHJvcGVydGllcyB7XFxuICAgIGhlaWdodDogMTkwcHg7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gIH1cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9mb3VuZGVycy9mb3VuZGVycy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmFsaWduLWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUzQjQ4O1xcbiAgcGFkZGluZy10b3A6IDE1JTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogNSU7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRleHQtc3R5bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5wYWRkaW5nLWFkZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNiU7XFxufVxcblxcbi5sYWJlbC1zdHlsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tYXJnaW4tYWRkIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG4uYnRuLWN1c3RvbSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmNjA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB3aWR0aDogMTE1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxufVxcbi5idG4tY3VzdG9tOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmYTg2MGE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzIGVhc2U7XFxufVxcblxcbi5oZWxwLXRleHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzczNzM3MztcXG59XFxuXFxuZm9ybSAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOTUzNGY7XFxuICAvKiByZWQgKi9cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5sYWJlbC1zdHlsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcXG4gIC5oZWxwLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaGVhZGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDg1cHg7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuc2hhZG93LW92ZXJsYXkge1xcbiAgLyptYXgtaGVpZ2h0OiAxMDB2aDsqL1xcbiAgLyptaW4taGVpZ2h0OiAxMDB2aDsqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAvKmJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9FYXJ0aE1hcC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZm9yTW9iaWxle1xcbiAgaGVpZ2h0OiA4MDBweDtcXG59XFxuLmZvck1vYmlsZSAuc2hhZG93LW92ZXJsYXl7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG52aWRlb3tcXG4gIHotaW5kZXg6IC0xMDAwO1xcbn1cXG52aWRlbyNiZ3ZpZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcztcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAtMTAwMDtcXG4gIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9FYXJ0aE1hcC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmRpdiB7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcXG59XFxuXFxuLnBhcmVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzUlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi10b3A6IC01NXB4O1xcbiAgLyogYWNjb3VudCBmb3IgcGFkZGluZyBhbmQgYm9yZGVyIGlmIG5vdCB1c2luZyBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xcbn1cXG5cXG4uc2xvZ2FuIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idXR0b24tbWFyZ2luLXRvcCB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTAyLCAwLCAwLjcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XFxufVxcbi5idXR0b25zOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5idXR0b25zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZjY2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcGVjaWFsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubWlkZGxlSW1hZ2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGFydG5lckltYWdlcyB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICB3aWR0aDogMTQ1cHg7XFxufVxcblxcbi5sb25nUGFydG5lckltYWdlcyB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ucGFydG5lcnMge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbi5ib2R5LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxufVxcblxcbi5zcGVjQWxpZ24ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jb2wtc20tcHVzaC02IHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmNvbC1zbS1wdWxsLTYge1xcbiAgcmlnaHQ6IDUwJTtcXG59XFxuXFxuLm1hcmdpbi1yb3cge1xcbiAgbWFyZ2luLXRvcDogMyU7XFxufVxcblxcbi5pbWFnZS1zaXplIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi53aGVlbC1pbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5pcGhvbmUtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYmFkZ2UtcmVzaXplIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLm9yYW5nZS1oZWFkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAxMjYsIDQxLCAwLjkpO1xcbn1cXG5cXG4ubGVmdC1oZWFkZXIsIC5sZWZ0LXRleHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5hYm91dC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41JTtcXG59XFxuXFxuLnRleHQtcGFkZGluZyB7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMiU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTUlO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbC1tZC1vZmZzZXQtMiB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG4udG8taGlkZSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5yZW1vdmUtcGFkZGluZyB7XFxuICBwYWRkaW5nLXRvcDogMjAlO1xcbn1cXG4ucmVtb3ZlLXBhZGRpbmcgZGl2IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNkb3dubG9hZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG5cXG4uZG93bmxvYWQtdGV4dCB7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbi50cnktdXYge1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbn1cXG4udHJ5LXV2IGgzIHtcXG4gIGNvbG9yOiAjNjYzO1xcbn1cXG5cXG4uc2VwYXJhdG9yLWluIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5tYXJnaW4tdG9wIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC53aGVlbC1pbWcge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdG9wOiAzMCU7XFxuICB9XFxuXFxuICAubWVkaWFSZXNpemUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucGFydG5lckltYWdlcyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC5sb25nUGFydG5lckltYWdlcyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gIH1cXG5cXG4gIC5wYXJ0bmVycyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29sLXNtLTYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tcHVzaC02IHtcXG4gICAgbGVmdDogMCU7XFxuICB9XFxuXFxuICAuY29sLXNtLXB1bGwtNiB7XFxuICAgIHJpZ2h0OiAwJTtcXG4gIH1cXG5cXG4gIC5sZWZ0LWhlYWRlciwgLmxlZnQtdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbWctbGVmdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb2wteHMtb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC14cy02IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5pcGhvbmUtaW1nIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC50by1oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5jZW50ZXItYWxpZ24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xcbiAgfVxcblxcbiAgLmJhZGdlLXJlc2l6ZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gIH1cXG5cXG4gIC5yZW1vdmUtcGFkZGluZyB7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcXG4gIC5sb25nUGFydG5lckltYWdlcyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5N3B4KSB7XFxuICAuYmFkZ2UtcmVzaXplIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzYwcHgpIHtcXG4gIC5iYWRnZS1yZXNpemUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYmFjay1pbWFnZSB7XFxuICAgIC8qbWF4LWhlaWdodDogMTAwdmg7Ki9cXG4gICAgLyptaW4taGVpZ2h0OiAxMDB2aDsqL1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL21vYmlsZUJhY2suanBnXFxcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuXFxuICAvKnZpZGVvI2JndmlkIHsqL1xcbiAgICAvKmRpc3BsYXk6IG5vbmU7Ki9cXG4gIC8qfSovXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuaW50cm8ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1pbWFnZSB7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9pbWFnZXMvc2Nob29scy9iZy1zZWN0aW9uLnN2Z1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJsb2NrLWFsaWduLWNlbnRlciB7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDQlO1xcbn1cXG5cXG4udW5kZXItaGVhZGVyIHtcXG4gIGNvbG9yOiAjZjlkN2NlO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4ud2VhdGhlci1raXQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMzAzZTtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4ud2VhdGhlci1raXQtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGV4dC1hbGlnbiB7XFxuICBwYWRkaW5nLXRvcDogMTUlO1xcbn1cXG5cXG4uaW50cm8tdG9wIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2I3YjRiYTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbi51bmRlci10b3Age1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogI2FkYjRiYTtcXG59XFxuXFxuLmluZm9ybWF0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcblxcbi5jb2wtc20tcHVzaC02IHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmNvbC1zbS1wdWxsLTYge1xcbiAgcmlnaHQ6IDUwJTtcXG59XFxuXFxuLmltYWdlLXNpemUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3JhbmdlLWhlYWRlciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5vcmFuZ2UtaGVhZGVyIHNwYW4ge1xcbiAgY29sb3I6ICNmZjdlMjk7XFxufVxcblxcbi51bC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmxpLW1hcmdpbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuLm9yZGVyIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvaW1hZ2VzL3NjaG9vbHMvYmctMi5qcGdcXFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nLXRvcDogMTAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcXG59XFxuXFxuLmFsaWduLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vcmRlci1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm9yZGVyLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaW1nLXBhZGRpbmcge1xcbiAgcGFkZGluZzogNSU7XFxufVxcblxcbi50ZXh0LXBhZGRpbmcge1xcbiAgcGFkZGluZy10b3A6IDYlO1xcbiAgcGFkZGluZy1yaWdodDogNSU7XFxuICBwYWRkaW5nLWJvdHRvbTogOCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZ3JleS1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgY29sb3I6ICNjYzAwMDA7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5wcmljZSAubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4ucHJpY2UgLmJyYWNrZXRzIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ1dHRvbi1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0MjA7XFxuICBwYWRkaW5nOiAyMHB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB3aWR0aDogMTYwcHg7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYnV0dG9uLWluZm86Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmJ1dHRvbi1pbmZvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmYTg2MGE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXF1aXJlZC10ZXh0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybSAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkOTUzNGY7XFxuICAvKiByZWQgKi9cXG59XFxuXFxuLmNvbnRhY3QtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjUzYjQ4O1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogMjBweCA1MHB4O1xcbn1cXG5cXG4ubGFiZWwtc3R5bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY3VzdG9tLWhlbHAge1xcbiAgY29sb3I6ICM3MzczNzM7XFxufVxcblxcbi5idG4tY3VzdG9tIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2Y2MDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHdpZHRoOiAxMTVweDtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuLmJ0bi1jdXN0b206aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZhODYwYTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMgZWFzZTtcXG59XFxuXFxuLm1vZGFsLWZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjUzYjQ4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnV0dG9uLW9yZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0MjA7XFxuICBwYWRkaW5nOiAyMHB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5idXR0b24tb3JkZXI6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmJ1dHRvbi1vcmRlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmE4NjBhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlLXVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAudGV4dC1hbGlnbiB7XFxuICAgIHBhZGRpbmctdG9wOiAzJTtcXG4gIH1cXG5cXG4gIC5pbmZvcm1hdGlvbi1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMCU7XFxuICB9XFxuXFxuICAuYmxvY2stYWxpZ24tY2VudGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDE1JTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5yZXF1aXJlZC10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWtpdC1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIH1cXG5cXG4gIC5pbnRyby10b3Age1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICB9XFxuXFxuICAudW5kZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAudW5kZXItdG9wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1wdXNoLTYge1xcbiAgICBsZWZ0OiAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tcHVsbC02IHtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgfVxcblxcbiAgLm9yZGVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG5cXG4gIC5pbWctcGFkZGluZyB7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gIH1cXG5cXG4gIC50ZXh0LXBhZGRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIH1cXG5cXG4gIC5idXR0b24taW5mbyB7XFxuICAgIG1hcmdpbjogNy41JSBhdXRvIDIuNSU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEwcHgpIHtcXG4gIC5tb2RhbC1oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLmJsb2NrLWFsaWduLWNlbnRlciB7XFxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9zY2hvb2xzL2Fib3V0LXBhZ2UvYWJvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5iYWNrLWltYWdlIHtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2ltYWdlcy9zY2hvb2xzL2JnLXNlY3Rpb24uc3ZnXFxcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZy10b3A6IDIwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWZvbnQge1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG1hcmdpbi1yaWdodDogNy41JTtcXG4gIG1hcmdpbi1ib3R0b206IDcuNSU7XFxuICBtYXJnaW4tbGVmdDogNy41JTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Yi1oZWFkZXItZm9udCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6ICNmOWQ3Y2U7XFxuICBtYXJnaW4tbGVmdDogMi41JTtcXG4gIG1hcmdpbi1yaWdodDogMi41JTtcXG4gIG1hcmdpbi1ib3R0b206IDEyLjUlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LHNhbnMtc2VyaWY7XFxufVxcblxcbi5sYWJlbC1zdHlsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50ZXh0LXN0eWxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uY2VudGVyLWZvcm0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxufVxcblxcbi5jdXN0b20taGVscCB7XFxuICBjb2xvcjogIzczNzM3MztcXG59XFxuXFxuLmJ0bi1jdXN0b20ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjZjYwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbn1cXG4uYnRuLWN1c3RvbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmE4NjBhO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyBlYXNlO1xcbn1cXG5cXG5mb3JtIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5NTM0ZjtcXG4gIC8qIHJlZCAqL1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuaGVhZGVyLWZvbnQge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luLXRvcDogNy41JTtcXG4gIH1cXG5cXG4gIC5zdWItaGVhZGVyLWZvbnQge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvc2Nob29scy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5tYXAtc2l6ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuI21hcCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnV2LXN0YXR1cyB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uaW5mby13aW5kb3cge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MHB4O1xcbiAgbGVmdDogMTVweDtcXG4gIHJpZ2h0OiAzJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmluZm8td2luZG93LXNtYWxsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmc6IDElO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgbGVmdDogMTVweDtcXG4gIGJvdHRvbTogMyU7XFxuICB0b3A6IDYzJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAzOTBweDtcXG4gIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XFxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwYWMtaW5wdXQge1xcbiAgbGVmdDogMTVweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5uby1tYXJnaW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmluZm8tcGljdHVyZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5pbmZvLXBpY3R1cmUgaW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3BhYy1pbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM0ZDkwZmU7XFxufVxcblxcbi5jb250ZW50LXN0eWxlIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb250ZW50LXN0eWxlIGg1IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjM2UzZTNlO1xcbn1cXG5cXG4uYnV0dG9uLXN0eWxlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3NDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5idXR0b24tc3R5bGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmJ1dHRvbi1zdHlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmE4NjBhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uLXN0eWxlOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICNmYTg2MGE7XFxufVxcblxcbi5kcm9wcGVyIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnBhZGRpbmctYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDJweDtcXG4gIHJpZ2h0OiA1JTtcXG59XFxuXFxuLmNvbnRhaW5lci1mbHVpZCB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAjcGFjLWlucHV0IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXN0eWxlIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAuaW5mby1waWN0dXJlIGltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5pbmZvLXdpbmRvdy1zbWFsbCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmRyb3BwZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4OHB4KSB7XFxuICAuZHJvcHBlciB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gIH1cXG59XFxuLmxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxNTBweDtcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xcbiAgLyogTGlnaHQgZ3JleSAqL1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjZjI3NDIwO1xcbiAgLyogQmx1ZSAqL1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAubG9hZGVyIHtcXG4gICAgbGVmdDogNDUlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLmxvYWRlciB7XFxuICAgIGxlZnQ6IDQzJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5sb2FkZXIge1xcbiAgICBsZWZ0OiA0MSU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubG9hZGVyIHtcXG4gICAgbGVmdDogNDAlO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93aWRnZXQvbWFwL21hcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI21haW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmluZm9ybWF0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MCUpO1xcbn1cXG5cXG4uY29sLXhzLTEyIHtcXG4gIHBhZGRpbmc6IDFweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubG9hZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLmJ1dHRvbi1zdHlsZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0MjA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uYnV0dG9uLXN0eWxlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5idXR0b24tc3R5bGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZhODYwYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFsaWduIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlYWQtZm9udCB7XFxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oZWFkLWZvbnQsXFxuLmJvZHktZm9udCB7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYm9keS1mb250IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpbmstbWFwIHtcXG4gIGNvbG9yOiAjM0E4NUQ0ICFpbXBvcnRhbnQ7XFxufVxcbi5saW5rLW1hcDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMwRDgyRkYgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5pbmZvcm1hdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG5cXG4gIC5oZWFkLWZvbnQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAuYm9keS1mb250IHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcblxcbiAgLmxvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzhweCkge1xcbiAgLmhlYWQtZm9udCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG5cXG4gIC5ib2R5LWZvbnQge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuXFxuICAubG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XFxuICAuYnV0dG9uLXN0eWxlIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93aWRnZXQvd2hlZWwvd2hlZWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5tYXJnaW57XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbjxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgIDxoMiA+PGEgW3JvdXRlckxpbmtdPVxcXCJbJ2NvbnRhY3QnXVxcXCI+IENvbnRhY3QgVXMgPC9hPiA8L2gyPlxcbiAgICAgICAgPHAgPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCJtYWlsdG86IGVucXVpcmllc0BzcGFyazY0LmNvbT9TdWJqZWN0PUhlbGxvJTIwXFxcIiB0YXJnZXQ9XFxcIl90b3BcXFwiPmVucXVpcmllc0BzcGFyazY0LmNvbTwvYT5cXG4gICAgICAgICAgPGJyPlxcbiAgICAgICAgICA8YnI+IEdyb3VuZCBGbG9vciA8YnI+IDcwIFN5bW9uZHMgU3QgPGJyPiBBdWNrbGFuZCwgPGJyPiBOZXcgWmVhbGFuZCA8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLXNtLTEyIFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiID5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcImZvb3Rlci1zb2NpYWwgZm9vdGVyLWluc3RhZ3JhbVxcXCIgIGhyZWY9XFxcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdXZsZW5zL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFxuICAgICAgICAgICAgIHJlbD1cXFwibm9mb2xsb3dcXFwiIHRpdGxlPVxcXCJVVkxlbnMgb24gSW5zdGFncmFtXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWluc3RhZ3JhbSBmYS0yeFxcXCI+PC9pPiA8L2E+XFxuXFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJmb290ZXItc29jaWFsIGZvb3Rlci10d2l0dGVyXFxcIiBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL3V2bGVuc1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFxuICAgICAgICAgICAgIHJlbD1cXFwibm9mb2xsb3dcXFwiIHRpdGxlPVxcXCJVVkxlbnMgb24gVHdpdHRlclxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyIGZhLTJ4XFxcIj48L2k+IDwvYT5cXG5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcImZvb3Rlci1zb2NpYWwgZm9vdGVyLWZhY2Vib29rXFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vVVZMZW5zLz9mcmVmPXRzXFxcIlxcbiAgICAgICAgICAgICB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub2ZvbGxvd1xcXCIgdGl0bGU9XFxcIlVWTGVucyBvbiBGYWNlYm9va1xcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mYWNlYm9vayBmYS0yeFxcXCI+PC9pPiA8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTYgcHVzaC1sZy02XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJmb290ZXItc29jaWFsXFxcIiAgaHJlZj1cXFwiaHR0cDovL3d3dy51dmxlbnMuY29tL2xpY2Vuc2UuaHRtbFxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJsaWNlbmNlLXJvd1xcXCI+TGljZW5zZSBBZ3JlZW1lbnQ8L3A+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZm9vdGVyLXNvY2lhbFxcXCIgIGhyZWY9XFxcImh0dHA6Ly93d3cudXZsZW5zLmNvbS9wcml2YWN5Lmh0bWxcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibGljZW5jZS1yb3dcXFwiPlByaXZhY3kgUG9saWN5PC9wPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImZvb3Rlci1zb2NpYWxcXFwiICBocmVmPVxcXCJodHRwczovL21lZGl1bS5jb20vQHRlY2hubzI0Ni91dmxlbnMtbWVkaWEta2l0LWYxYjcxYzJkZjg3NyMueTV6djY1cThlXFxcIj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImxpY2VuY2Utcm93XFxcIj5QcmVzcyBLaXQ8L3A+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTYgcHVsbC1sZy02IFxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiXFxcIj4gJmNvcHk7IDIwMTYgU3BhcmsgU2l4dHkgRm91ciBMaW1pdGVkLCBBbGwgUmlnaHRzIFJlc2VydmVkLiA8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZ2VuZXJhbC1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJib3ggY29sLXhzLTEyIG92ZXJyaWRlLXN0eWxlXFxcIiBbbmdDbGFzc10gPVxcXCJoZWFkZXJTY3JvbGxlZFN0eWxlZCA/ICdkeW5hbWljLXN0eWxlcyc6ICcnXFxcIj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0yIGxvZ29cXFwiPlxcbiAgICAgIDxpbWcgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL2xvZ28vbG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLXNtLTYgb2Zmc2V0LWxnLTEgbWVudSBuYXZpZ2F0aW9uXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMiBjb2wtbGctMiAgbWVudS1pdGVtIG1lbnUtaXRlbS1jZW50ZXJcXFwiPlxcbiAgICAgICAgPGEgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua109XFxcIlsnaG9tZSddXFxcIiBjbGFzcz1cXFwib3JhbmdlLWxpbmtcXFwiPkhPTUU8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLWxnLTMgY29sLXhsLTIgIG1lbnUtaXRlbSAgbWVudS1pdGVtLXNwZWNpYWwgZHJvcGRvd25cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm9yYW5nZS1saW5rXFxcIj5TQ0hPT0xTPC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgIDxhIHJvdXRlckxpbmtBY3RpdmU9XFxcImRyb3AtYWN0aXZlXFxcIiBbcm91dGVyTGlua109XFxcIlsnc2Nob29scy9hYm91dCddXFxcIj5BQk9VVDwvYT5cXG4gICAgICAgICAgPGEgcm91dGVyTGlua0FjdGl2ZT1cXFwiZHJvcC1hY3RpdmVcXFwiIGhyZWY9XFxcImh0dHA6Ly9oZWxwLnV2bGVucy5jb20vYXJ0aWNsZS82LXdlYXRoZXItc3RhdGlvbi1pbnN0YWxsYXRpb25cXFwiPklOU1RBTExBVElPTjwvYT5cXG4gICAgICAgICAgPGEgcm91dGVyTGlua0FjdGl2ZT1cXFwiZHJvcC1hY3RpdmVcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWydzY2hvb2xzL3JlZ2lzdHJhdGlvbiddXFxcIiBocmVmPVxcXCIjXFxcIj5SRUdJU1RSQVRJT048L2E+XFxuICAgICAgICAgIDxhIHJvdXRlckxpbmtBY3RpdmU9XFxcImRyb3AtYWN0aXZlXFxcIiBocmVmPVxcXCIjXFxcIj5EQVRBIFBPUlRBTDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1sZy0yIG1lbnUtaXRlbSBtZW51LWl0ZW0tY2VudGVyXFxcIj5cXG4gICAgICAgIDxhIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ2Fib3V0J11cXFwiIGNsYXNzPVxcXCJvcmFuZ2UtbGlua1xcXCI+QUJPVVQ8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLWxnLTIgIG1lbnUtaXRlbSAgbWVudS1pdGVtLWNlbnRlclxcXCI+XFxuICAgICAgICA8YSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWydjb250YWN0J11cXFwiIGNsYXNzPVxcXCJvcmFuZ2UtbGlua1xcXCI+Q09OVEFDVDwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29sLXNtLTQgIGNvbC1sZy0zICBuYXZpZ2F0aW9uXFxcIj5cXG4gICAgICA8IS0tPHNlY3Rpb24gY2xhc3M9XFxcImNvbC1zbS01XFxcIj4tLT5cXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCIgbWVudS1pdGVtLXJpZ2h0XFxcIj4tLT5cXG4gICAgICAgICAgPCEtLTxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJvcmFuZ2UtbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ3dpZGdldCddXFxcIj5GT1JFQ0FTVDwvYT4tLT5cXG4gICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICA8IS0tPC9zZWN0aW9uPi0tPlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb2wtc20tNyBvZmZzZXQtc20tNVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCIgbWVudS1pdGVtLXJpZ2h0IHNvY2lhbC1ncm91cFxcXCI+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJzb2NpYWwgZmFjZWJvb2tcXFwiIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9VVkxlbnMvP2ZyZWY9dHNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZmFjZWJvb2tcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwic29jaWFsIHR3aXR0ZXJcXFwiIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vdXZsZW5zXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwic29jaWFsIGluc3RhZ3JhbVxcXCIgaHJlZj1cXFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS91dmxlbnMvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWluc3RhZ3JhbVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPHNlY3Rpb24gY2xhc3MgPSBcXFwibW9iaWxlLW5hdmlnYXRpb25cXFwiPlxcbiAgICAgIDxpIChjbGljayk9XFxcIm9uT3Blbk1lbnUoKVxcXCIgY2xhc3M9XFxcImZhIGZhLWJhcnNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gIDxkaXYgW25nQ2xhc3NdPVxcXCJpc09wZW4gPyAnb3Blbic6ICcnXFxcIj5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImRyb3BwZWQtbW9iaWxlLW1lbnUgY29sLXhzLTEyXFxcIiA+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIG1lbnUtaXRlbSBtZW51LWl0ZW0tY2VudGVyXFxcIj5cXG4gICAgICAgIDxhIChjbGljayk9XFxcIm9uT3Blbk1lbnUoKVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua109XFxcIlsnaG9tZSddXFxcIiBjbGFzcz1cXFwib3JhbmdlLWxpbmtcXFwiPkhPTUU8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIG1lbnUtaXRlbSAgbWVudS1pdGVtLWNlbnRlclxcXCI+XFxuICAgICAgICA8YSAgKGNsaWNrKT1cXFwiZHJvcElzT3BlbiA9ICFkcm9wSXNPcGVuXFxcIiAgY2xhc3M9XFxcIm9yYW5nZS1saW5rXFxcIj5TQ0hPT0xTIDxpIGNsYXNzPVxcXCJmYSBmYS1jYXJldC1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBkcm9wLWluLWRyb3AtZ3JvdXAgXFxcIiBbbmdDbGFzc109XFxcImRyb3BJc09wZW4gPyAnJzogJ2Ryb3Bkb3duLWNvbnRlbnQnXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHNwYWNpbmdcXFwiPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbmtBY3RpdmU9XFxcImRyb3AtaW4tZHJvcC1hY3RpdmVcXFwiICAoY2xpY2spPVxcXCJvbk9wZW5NZW51KClcXFwiIGNsYXNzPVxcXCJkcm9wLWluLWRyb3AgXFxcIiBbcm91dGVyTGlua109XFxcIlsnc2Nob29scy9hYm91dCddXFxcIj5BQk9VVDwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBzcGFjaW5nXFxcIj5cXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJkcm9wLWluLWRyb3AtYWN0aXZlXFxcIiAgKGNsaWNrKT1cXFwib25PcGVuTWVudSgpXFxcIiAgY2xhc3M9XFxcImRyb3AtaW4tZHJvcFxcXCIgaHJlZj1cXFwiaHR0cDovL2hlbHAudXZsZW5zLmNvbS9hcnRpY2xlLzYtd2VhdGhlci1zdGF0aW9uLWluc3RhbGxhdGlvblxcXCI+SU5TVEFMTEFUSU9OPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHNwYWNpbmdcXFwiPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbmtBY3RpdmU9XFxcImRyb3AtaW4tZHJvcC1hY3RpdmVcXFwiICAoY2xpY2spPVxcXCJvbk9wZW5NZW51KClcXFwiIGNsYXNzPVxcXCJkcm9wLWluLWRyb3BcXFwiICBbcm91dGVyTGlua109XFxcIlsnc2Nob29scy9yZWdpc3RyYXRpb24nXVxcXCIgaHJlZj1cXFwiI1xcXCI+UkVHSVNUUkFUSU9OPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHNwYWNpbmdcXFwiPlxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbmtBY3RpdmU9XFxcImRyb3AtaW4tZHJvcC1hY3RpdmVcXFwiICAoY2xpY2spPVxcXCJvbk9wZW5NZW51KClcXFwiIGNsYXNzPVxcXCJkcm9wLWluLWRyb3BcXFwiIGhyZWY9XFxcIiNcXFwiPkRBVEEgUE9SVEFMPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBtZW51LWl0ZW0gbWVudS1pdGVtLWNlbnRlclxcXCI+XFxuICAgICAgICA8YSAoY2xpY2spPVxcXCJvbk9wZW5NZW51KClcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ2Fib3V0J11cXFwiIGNsYXNzPVxcXCJvcmFuZ2UtbGlua1xcXCI+QUJPVVQ8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIG1lbnUtaXRlbSAgbWVudS1pdGVtLWNlbnRlclxcXCI+XFxuICAgICAgICA8YSAoY2xpY2spPVxcXCJvbk9wZW5NZW51KClcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ2NvbnRhY3QnXVxcXCIgY2xhc3M9XFxcIm9yYW5nZS1saW5rXFxcIiA+Q09OVEFDVDwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgbWVudS1pdGVtICBtZW51LWl0ZW0tY2VudGVyXFxcIj5cXG4gICAgICAgIDwhLS08YSAoY2xpY2spPVxcXCJvbk9wZW5NZW51KClcXFwiIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJvcmFuZ2UtbGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJ3dpZGdldCddXFxcIj5GT1JFQ0FTVDwvYT4tLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZ2VuZXJhbC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8YXBwLWRlc2NyaXB0aW9uPjwvYXBwLWRlc2NyaXB0aW9uPlxcbjxhcHAtZm91bmRlcnM+PC9hcHAtZm91bmRlcnM+XFxuPGFwcC1kZXZlbG9wZXJzPjwvYXBwLWRldmVsb3BlcnM+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItYmxvY2tcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxuICAgICAgPGgxID5VVkxlbnMgLSBPdXIgU3RvcnkgPC9oMT5cXG4gICAgPC9kaXY+XFxuICAgIDxibG9ja3F1b3RlIGNsYXNzPVxcXCJ0YWJiZWQtdGV4dFxcXCI+XFxuICAgICAgPHA+IDxzcGFuIGNsYXNzPVxcXCJzdG9yeS10aXRsZVxcXCI+VVZMZW5zIDwvc3Bhbj4gaXMgYmVpbmcgZGV2ZWxvcGVkIGJ5IGEgdGVhbSBhdCBTcGFyayA2NCBMdGQsIGEgY29tcGFueSBtYWtpbmcgcHJvZHVjdHNcXG4gICAgICAgIHRvIGhlbHAgcGVvcGxlIGxpdmUgaGVhbHRoaWVyIG91dGRvb3IgbGl2ZXMuIEd1aWRlZCBieSBSaWNoYXJkIE1jTGVhbiwgd2hvIGhhcyBvdmVyIDMwIHllYXJzIG9mIGNvbW1lcmNpYWxcXG4gICAgICAgIGJ1c2luZXNzIGV4cGVyaWVuY2UsIHRoZSBjb21wYW55IGZvcm1lZCBpbiAyMDEzIGFmdGVyIHRoZSB0ZWFtIHdvbiB0aGUgTmF0aW9uYWwgRmluYWxzIG9mIHRoZSBNaWNyb3NvZnQgSW1hZ2luZVxcbiAgICAgICAgQ3VwIHdoaWxlIERhbmllbCBhbmQgTWluZyB3ZXJlIHN0aWxsIHN0dWR5aW5nIHRoZWlyIFBoRCBkZWdyZWVzLlxcbiAgICAgICAgPGJyPlxcbiAgICAgICAgPGJyPiBUaGUgY29tcGFueSBoYXMgYSBmb2N1cyBpbiBlZHVjYXRpb24sIHByb3ZpZGluZyBkaWdpdGFsIGluZm9ybWF0aW9uIGFuZCB0b29scyB0byB0ZWFjaCBwZW9wbGUgYWJvdXRcXG4gICAgICAgIFVWIGFuZCBzdW4gc2FmZXR5LiBJbiBhIHBhcnRuZXJzaGlwIHdpdGggQmFuYW5hIEJvYXQgc3Vuc2NyZWVuLCBvdmVyIDEwMCBVViBzZW5zb3JzIHdlcmUgaW5zdGFsbGVkIGFyb3VuZFxcbiAgICAgICAgdGhlIGNvdW50cnkgdG8gcHJvdGVjdCBwcmVzY2hvb2wgY2hpbGRyZW4gZnJvbSB0aGUgc3VuLlxcbiAgICAgICAgPGJyPlxcbiAgICAgICAgPGJyPiBUaGUgdGVhbSBhdCBTcGFyayA2NCBiZWxpZXZlIGluIHVzaW5nIHRlY2hub2xvZ3kgdG8gaWduaXRlIG5ldyBpZGVhcywgYnVzaW5lc3MgYXMgYSBmb3JjZSBmb3IgZ29vZCxcXG4gICAgICAgIGhhdmluZyBmdW4gYW5kIGdpdmluZyBiYWNrIHRvIHRoZSBjb21tdW5pdHkgdGhyb3VnaCBpbnRlcm5zaGlwIGFuZCBzY2hvbGFyc2hpcCBvcHBvcnR1bml0aWVzLiA8L3A+XFxuICAgIDwvYmxvY2txdW90ZT5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWJsb2NrXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcbiAgICAgIDxoMSA+RGVzaWduZXJzIGFuZCBEZXZlbG9wZXJzIDwvaDE+XFxuICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBkZXYtcm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS00IGNvbC1tZC0zIGNvbC1sZy0yXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayB0ZXh0LXhzLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXYtaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+SmFkZTwvaDU+XFxuICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXFxcIj4gTGVhZCBEZXNpZ25lcjwvaDY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImZpeGVkLXByb3BlcnRpZXMgcm91bmRlZC1jaXJjbGUgXFxcIiBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9hYm91dC90ZWFtL2phZGUuanBnXFxcIiAgYWx0PVxcXCJDYXJkIGltYWdlXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS00IGNvbC1tZC0zIGNvbC1sZy0yXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayB0ZXh0LXhzLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXYtaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+TmljbGFzPC9oNT5cXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzPVxcXCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcXFwiPiBDb2RpbmcgR3JhbmQtbWFzdGVyPC9oNj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vbmljbGFzLmpwZ1xcXCIgIGFsdD1cXFwiQ2FyZCBpbWFnZVxcXCI+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2sgdGV4dC14cy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV2LWhlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPk1pY2hhZWw8L2g1PlxcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFxcXCI+PC9oNj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vbWljaGFlbC5qcGdcXFwiICBhbHQ9XFxcIkNhcmQgaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTMgY29sLWxnLTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIHRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldi1oZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5EaW1pdHJpaTwvaDU+XFxuICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXFxcIj4gPC9oNj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vZGltaXRyaWkuanBnXFxcIiAgYWx0PVxcXCJDYXJkIGltYWdlXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS00IGNvbC1tZC0zIG9mZnNldC1tZC0zIGNvbC1sZy0yIG9mZnNldC1sZy0wXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayB0ZXh0LXhzLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXYtaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+QW50b248L2g1PlxcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFxcXCI+PC9oNj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vYW50b24uanBnXFxcIiAgYWx0PVxcXCJDYXJkIGltYWdlXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG48IS0tICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGRldi1yb3dcXFwiPi0tPlxcblxcblxcblxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTQgY29sLW1kLTMgY29sLWxnLTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIHRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldi1oZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Bb3JhbmdpPC9oNT5cXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzPVxcXCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcXFwiPiA8L2g2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJmaXhlZC1wcm9wZXJ0aWVzIHJvdW5kZWQtY2lyY2xlIFxcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdGVhbS9hb3JhbmdpLmpwZ1xcXCIgIGFsdD1cXFwiQ2FyZCBpbWFnZVxcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9kZXZlbG9wZXJzL2RldmVsb3BlcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWJsb2NrXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcbiAgICAgIDxoMSA+Rm91bmRlcnMgPC9oMT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZGVjay13cmFwcGVyXFxcIj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWRlY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2sgZm91bmRlcnMtaGVhZCB0ZXh0LXhzLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5EYW5pZWwgWHUgPGEgaHJlZj1cXFwiaHR0cDovL256LmxpbmtlZGluLmNvbS9pbi9kYW5pZWx4dTY0XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgPjxpIGNsYXNzPVxcXCJmYSBmYS1saW5rZWRpbi1zcXVhcmVcXFwiPjwvaT48L2E+PC9oNT5cXG4gICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFxcXCI+IENFTzwvaDY+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vZGFuaWVsLmpwZ1xcXCIgIGFsdD1cXFwiQ2FyZCBpbWFnZVxcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIGZvdW5kZXJzLXRleHRcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPiBEYW5pZWwgZGlkIGEgUGhEIGluIGJpby1tZWNoYXRyb25pY3MgRW5naW5lZXJpbmcuIEhlIHdhcyBhd2FyZGVkIHRoZSBBTVAgTmF0aW9uYWwgU2Nob2xhcnNoaXAgYXNcXG4gICAgICAgICAgICAgIG9uZSBvZiAxMCBwZW9wbGUgZG9pbmcgZ3JlYXQgdGhpbmdzIGluIE5ldyBaZWFsYW5kLiBIZSBlbmpveXMgZmluZGluZyBjaGFsbGVuZ2luZyBwcm9ibGVtcyB0b1xcbiAgICAgICAgICAgICAgc29sdmUgYW5kIGlzIHRoZSBpbnZlbnRvciBvZiBhIG51bWJlciBvZiBwYXRlbnRzLiBJbiBoaXMgc3BhcmUgdGltZSwgaGUgZW5qb3lzIHN1cmZpbmcsIGhvY2tleSxcXG4gICAgICAgICAgICAgIGZvb3RiYWxsIGFuZCBleHBsb3JpbmcgdGhlIG91dGRvb3JzLiA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayBmb3VuZGVycy1oZWFkIHRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPk1pbmcgQ2hldWsgIDxhIGhyZWY9XFxcImh0dHA6Ly9uei5saW5rZWRpbi5jb20vaW4vbWluZ2NoZXVrXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgPjxpIGNsYXNzPVxcXCJmYSBmYS1saW5rZWRpbi1zcXVhcmVcXFwiPjwvaT48L2E+PC9oNT5cXG4gICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFxcXCI+IENUTzwvaDY+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vbWluZy5qcGdcXFwiICBhbHQ9XFxcIkNhcmQgaW1hZ2VcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayBmb3VuZGVycy10ZXh0XFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj4gTWluZyBsZWFkcyB0aGUgUiZEIGF0IFNwYXJrIDY0LiBIZSBoYXMgYSBiYWNrZ3JvdW5kIGluIE1lY2hhdHJvbmljcyBFbmdpbmVlcmluZyB3aGVyZSBoZSBncmFkdWF0ZWRcXG4gICAgICAgICAgICAgIHRvcCBvZiBoaXMgY2xhc3MuIEluIGhpcyBzcGFyZSB0aW1lLCBoZSB2b2x1bnRlZXJzIHRlYWNoaW5nIHNvZnR3YXJlIGNvdXJzZXMgdG8gdGVydGlhcnkgc3R1ZGVudHNcXG4gICAgICAgICAgICAgIHRocm91Z2ggdGhlIE1pY3Jvc29mdCBTdHVkZW50IEFjY2VsZXJhdG9yIHByb2dyYW1tZS4gSGUgd2FzIGludml0ZWQgdG8gcmVwcmVzZW50IE5ldyBaZWFsYW5kXFxuICAgICAgICAgICAgICBhcyB0aGUgU3R1ZGVudCBQYXJ0bmVyIGF0IHRoZSBNU1Agd29ybGQgc3VtbWl0LjwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrIGZvdW5kZXJzLWhlYWQgdGV4dC14cy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZSByaWNoYXJkLXRleHRcXFwiPlJpY2hhcmQgTWNMZWFuIDxhIGhyZWY9XFxcImh0dHA6Ly9uei5saW5rZWRpbi5jb20vaW4vcmljaGFyZG1jbGVhbm56XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgPjxpIGNsYXNzPVxcXCJmYSBmYS1saW5rZWRpbi1zcXVhcmVcXFwiPjwvaT48L2E+PC9oNT5cXG4gICAgICAgICAgICA8aDYgY2xhc3M9XFxcImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFxcXCI+IEV4ZWN1dGl2ZSBDaGFpcjwvaDY+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZml4ZWQtcHJvcGVydGllcyByb3VuZGVkLWNpcmNsZSBcXFwiIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2Fib3V0L3RlYW0vcmljaGFyZC5qcGdcXFwiICBhbHQ9XFxcIkNhcmQgaW1hZ2VcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9jayBmb3VuZGVycy10ZXh0XFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj4gUmljaGFyZCBpcyBhbiBleHBlcmllbmNlZCBkaXJlY3RvciBhbmQgYSBzcGVjaWFsaXN0IGluIHRoZSBkZXZlbG9wbWVudCBvZiBJUCBiYXNlZCBnbG9iYWwgYnVzaW5lc3Nlcy5cXG4gICAgICAgICAgICAgIEhlIGhhcyBvdmVyIDMwIHllYXJzIG9mIHNvbGlkIGNvbW1lcmNpYWwgZXhwZXJpZW5jZSBhbmQgYSBwYXNzaW9uIGZvciByYXBpZCBncm93dGggYW5kIHRoZSBjcmVhdGlvblxcbiAgICAgICAgICAgICAgb2YgY29tcGFueSB2YWx1ZS4gT3ZlciB0aW1lIGhlIGhhcyBwbGF5ZWQgYW4gYWN0aXZlIHJvbGUgaW4gdGhlIHN1Y2Nlc3Mgb2YgbWFueSBOZXcgWmVhbGFuZCB0ZWNobm9sb2d5XFxuICAgICAgICAgICAgICBjb21wYW5pZXMuPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvZm91bmRlcnMvZm91bmRlcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbGlnbi1jZW50ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFjdC1oZWFkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxoMT5DT05UQUNUIFVTPC9oMT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb250YWN0LWNvbnRhaW5lclxcXCI+XFxuICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LXN0eWxlXFxcIj5cXG4gICAgICBQbGVhc2UgY29udGFjdCB1cyBpZiB5b3UgaGF2ZSBhbnkgZ2VuZXJhbCBxdWVzdGlvbnMgb3IgaXNzdWVzIGFuZCBvdXIgc3VwcG9ydCB0ZWFtIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgd2UgY2FuLlxcbiAgICA8L3A+XFxuICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LXN0eWxlXFxcIj5cXG4gICAgICBFLW1haWxzIGNhbiBhbHNvIGJlIGFkZHJlc3NlZCB0byBlbnF1aXJpZXNAc3Bhcms2NC5jb21cXG4gICAgPC9wPlxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIG1hcmdpbi1hZGRcXFwiIFtmb3JtR3JvdXBdPVxcXCJteUZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcGFkZGluZy1hZGRcXFwiPlxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS00IGxhYmVsLXN0eWxlXFxcIj5OYW1lICo8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYW1lXFxcIiA+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IG9mZnNldC1zbS00XFxcIj5cXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ25hbWUnKS5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBteUZvcm0uZ2V0KCduYW1lJykudG91Y2hlZFxcXCIgPk5hbWUgaXMgcmVxdWlyZWQ8L3NtYWxsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBwYWRkaW5nLWFkZFxcXCI+XFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTQgbGFiZWwtc3R5bGVcXFwiPkVtYWlsICo8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZW1haWxcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBvZmZzZXQtc20tNFxcXCI+XFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJteUZvcm0uZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIG15Rm9ybS5nZXQoJ2VtYWlsJykudG91Y2hlZFxcXCIgPkVtYWlsIGlzIHJlcXVpcmVkPC9zbWFsbD5cXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3BhdHRlcm4nKSAmJiBteUZvcm0uZ2V0KCdlbWFpbCcpLnRvdWNoZWRcXFwiID5WYWxpZCBFbWFpbCBpcyByZXF1aXJlZCBpcyByZXF1aXJlZDwvc21hbGw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHBhZGRpbmctYWRkXFxcIj5cXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtc20tNCBsYWJlbC1zdHlsZVxcXCI+UGhvbmUgbnVtYmVyPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwicGhvbmVOdW1iZXJcXFwiID5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggb2Zmc2V0LXNtLTRcXFwiPlxcbiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibXlGb3JtLmdldCgncGhvbmVOdW1iZXInKS5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBteUZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLnRvdWNoZWRcXFwiID5QaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWQ8L3NtYWxsPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTEyIGxhYmVsLXN0eWxlXFxcIiA+TWVzc2FnZSAqPC9sYWJlbD5cXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJvd3M9XFxcIjRcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxuICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibXlGb3JtLmdldCgnbWVzc2FnZScpLmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIG15Rm9ybS5nZXQoJ21lc3NhZ2UnKS50b3VjaGVkXFxcIiA+TWVzc2FnZSBpcyByZXF1aXJlZDwvc21hbGw+XFxuXFxuICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgcHVzaC1zbS02IGhlbHAtdGV4dFxcXCI+KiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IHB1bGwtc20tNlxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tY3VzdG9tXFxcIiBbZGlzYWJsZWRdPVxcXCIhbXlGb3JtLnZhbGlkXFxcIj5TVUJNSVQ8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgPC9mb3JtPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiYWNrLWltYWdlXFxcIiBbbmdDbGFzc10gPSBcXFwiaXNWaWRlbyA/ICd2aF9oZWlnaHQxMDAnIDogJ2Zvck1vYmlsZSdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwic2hhZG93LW92ZXJsYXkgdmhfaGVpZ2h0MTAwXFxcIj48L2Rpdj5cXG4gIDx2aWRlbyAqbmdJZj1cXFwiaXNWaWRlb1xcXCIgIHBsYXlzaW5saW5lIGF1dG9wbGF5IG11dGVkIGxvb3AgcG9zdGVyPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9FYXJ0aE1hcC5qcGdcXFwiIGlkPVxcXCJiZ3ZpZFxcXCI+XFxuICAgIDxzb3VyY2Ugc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9FYXJ0aF8xLm1wNFxcXCIgdHlwZT1cXFwidmlkZW8vbXA0XFxcIj5cXG4gIDwvdmlkZW8+XFxuICA8ZGl2IGNsYXNzPVxcXCJwYXJlbnRcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBvZmZzZXQtbWQtMyBjb2wtbGctNCBvZmZzZXQtbGctNCBsb2dvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIHNsb2dhblxcXCI+XFxuICAgICAgICA8aDM+TG9jYWxpc2VkIFVWIHJlcG9ydDwvaDM+XFxuICAgICAgICA8aDM+S2VlcGluZyB5b3Ugc2FmZSBpbiB0aGUgc3VuPC9oMz5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtOCBvZmZzZXQteHMtMiBvZmZzZXQtbWQtMCBjb2wtbWQtMTIgYnV0dG9uLW1hcmdpbi10b3BcXFwiPlxcbiAgICAgICAgPGEgcGFnZVNjcm9sbCBbcGFnZVNjcm9sbER1cmF0aW9uXT1cXFwiNDAwXFxcIiBocmVmPVxcXCIjZm9yZWNhc3RcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25zXFxcIj5Ub2RheSdzIGZvcmVjYXN0PC9idXR0b24+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG5cXG48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB3aGl0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgc2VwYXJhdG9yXFxcIiBpZD1cXFwiZm9yZWNhc3RcXFwiPlxcbiAgICA8ZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRyeS11dlxcXCI+XFxuICAgICAgICA8aDM+RXhwbG9yZSBVViB0aHJvdWdob3V0IHRoZSB3b3JsZDwvaDM+XFxuICAgICAgICA8IS0tPGkgY2xhc3M9XFxcImZhIGZhLWFycm93LWRvd25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+LS0+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGFwcC13aWRnZXQ+PC9hcHAtd2lkZ2V0PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGFib3V0XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtc20tNiBjb2wtc20tcHVzaC02XFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvd2ViLXdoZWVsLnBuZ1xcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltYWdlLXNpemUgd2hlZWwtaW1nXFxcIiBhbHQ9XFxcIlVWTGVucyBVViB3aGVlbCBkaXNwbGF5aW5nIFVWIGluZGV4XFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtc20tNiBjb2wtc20tcHVsbC02IHRleHQtcGFkZGluZ1xcXCI+XFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm9yYW5nZS1oZWFkZXIgbGVmdC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICBQbGFuIG91dCB0aGUgYmVzdCB0aW1lIHRvIGJlIG91dHNpZGVcXG4gICAgICAgIDwvaDM+XFxuICAgICAgICA8cCBjbGFzcz1cXFwibGVmdC10ZXh0IGFib3V0LXRleHRcXFwiPlxcbiAgICAgICAgICBZb3VyIFVWIGZvcmVjYXN0IGZvciB0aGUgZGF5LCBzZWUgd2hlbiBpdOKAmXMgc2FmZSB0byBiZSBvdXRzaWRlIGFuZCB3aGVuIHRvIGF2b2lkIHRoZSBzdW4uXFxuICAgICAgICA8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYWJvdXRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1zbS02IFxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2J1cm50aW1lLnBuZ1xcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltYWdlLXNpemVcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1zbS02IHRleHQtcGFkZGluZ1xcXCI+XFxuICAgICAgICA8aDMgY2xhc3M9XFxcIm9yYW5nZS1oZWFkZXJcXFwiPlxcbiAgICAgICAgICBGaW5kIHlvdXIgYnVybiByaXNrXFxuICAgICAgICA8L2gzPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImFib3V0LXRleHRcXFwiPlxcbiAgICAgICAgICBFdmVyeWJvZHnigJlzIGRpZmZlcmVudC4gRmluZCBvdXQgaG93IGxvbmcgeW91IGNhbiBzcGVuZCBpbiB0aGUgc3VuIGJ5IHRha2luZyBhIHBlcnNvbmFsaXNlZCBza2luIHR5cGUgYXNzZXNzbWVudC5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhYm91dFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLXNtLTYgY29sLXNtLXB1c2gtNiBcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9wcm90ZWN0aW9uLnBuZ1xcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltYWdlLXNpemVcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1zbS02IGNvbC1zbS1wdWxsLTYgdGV4dC1wYWRkaW5nXFxcIj5cXG4gICAgICAgIDxoMyBjbGFzcz1cXFwib3JhbmdlLWhlYWRlciBsZWZ0LWhlYWRlclxcXCI+XFxuICAgICAgICAgIFNoZWRkaW5nIGxpZ2h0IG9uIFVWXFxuICAgICAgICA8L2gzPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImxlZnQtdGV4dCBhYm91dC10ZXh0XFxcIj5cXG4gICAgICAgICAgVVYgaXMgZGVjZXB0aXZlIGFuZCBpbnZpc2libGUgdG8gb3VyIGV5ZXMsIGxlYXJuIHdoYXQgcHJvdGVjdGlvbiBtZWFzdXJlcyB0byB0YWtlIGFuZCB3aGVuIHRvIGFwcGx5IHN1bnNjcmVlbi5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgcGFydG5lcnNcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMyBvZmZzZXQtbWQtMSBtZWRpYVJlc2l6ZSBzcGVjQWxpZ25cXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cDovL3d3dy5iYW5hbmFib2F0LmNvbS9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIGNsYXNzPVxcXCJwYXJ0bmVySW1hZ2VzXFxcIiBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9iYW5hbmFib2F0LnBuZ1xcXCI+PC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtNCBtZWRpYVJlc2l6ZSBtaWRkbGVJbWFnZVxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5jYWxsYWdoYW5pbm5vdmF0aW9uLmdvdnQubnovXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBjbGFzcz1cXFwicGFydG5lckltYWdlc1xcXCIgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvY2FsbGFnaGFuLnBuZ1xcXCI+PC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMyBtZWRpYVJlc2l6ZVxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL29jZWFuc3dpbS5jby5uei9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIGNsYXNzPVxcXCJwYXJ0bmVySW1hZ2VzXFxcIiBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9vY2Vhbi5wbmdcXFwiPjwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTQgbWVkaWFSZXNpemUgc3BlY2lhbFxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5taWNyb3NvZnQuY29tL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgY2xhc3M9XFxcImxvbmdQYXJ0bmVySW1hZ2VzIG1pY3Jvc29mdEltYWdlXFxcIiBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9taWNyb3NvZnQucG5nXFxcIj48L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC00IG1lZGlhUmVzaXplIG1pZGRsZUltYWdlXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LnNvbGJhcmkuY29tL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgY2xhc3M9XFxcImxvbmdQYXJ0bmVySW1hZ2VzXFxcIiBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9zb2xiYXJpLnBuZ1xcXCI+PC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtNCBtZWRpYVJlc2l6ZSBcXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cDovL3d3dy5hYmkuYXVja2xhbmQuYWMubnovZW4uaHRtbFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgY2xhc3M9XFxcImxvbmdQYXJ0bmVySW1hZ2VzXFxcIiBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9hYmkucG5nXFxcIj48L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTIgY29sLXNtLTEyIGNvbC1zbS1vZmZzZXQtMiBjZW50ZXItYWxpZ25cXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9waG9uZTEucG5nXFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmUgaXBob25lLWltZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTUgY29sLXNtLTEyIGRvd25sb2FkLXRleHQgY2VudGVyLWFsaWduXFxcIj5cXG4gICAgICAgIDxoMiBjbGFzcz1cXFwib3JhbmdlLWhlYWRlciB0by1oaWRlXFxcIj5Qcm90ZWN0IHlvdXJzZWxmIHdpdGggdGhlIGZyZWUgVVYgYXBwPC9oMj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbW92ZS1wYWRkaW5nXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTYgY29sLXNtLW9mZnNldC0xIG1hcmdpbi10b3BcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9uei9hcHAvdXZsZW5zL2lkMTA2MDg3ODM1OT9tdD04XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub2ZvbGxvd1xcXCIgdGl0bGU9XFxcIkRvd25sb2FkIHRoZSBVVkxlbnMgYXBwIGZyb20gaVR1bmVzXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuL2Fzc2V0cy9pbWFnZXMvYXBwLXN0b3JlLnBuZ1xcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGJhZGdlLXJlc2l6ZVxcXCI+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTYgbWFyZ2luLXRvcFxcXCI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5zcGFyazY0LnV2bGVucy5tb2JpbGUmYW1wO2hsPWVuXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub2ZvbGxvd1xcXCIgdGl0bGU9XFxcIkRvd25sb2FkIHRoZSBVVkxlbnMgYXBwIGZyb20gR29vZ2xlIFBsYXlTdG9yZVxcXCI+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL2dvb2dsZS1wbGF5LnBuZ1xcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGJhZGdlLXJlc2l6ZVxcXCI+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTEyIG1hcmdpbi10b3BcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vZW4tdXMvc3RvcmUvYXBwcy91dmxlbnMvOW5ibGdnaDVmdDFnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub2ZvbGxvd1xcXCIgdGl0bGU9XFxcIkRvd25sb2FkIHRoZSBVVkxlbnMgYXBwIGZyb20gdGhlIFdpbmRvd3MgU3RvcmVcXFwiPlxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy93aW5kb3dzLXN0b3JlLnBuZ1xcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGJhZGdlLXJlc2l6ZVxcXCI+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcImludHJvXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImJhY2staW1hZ2VcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgYmxvY2stYWxpZ24tY2VudGVyXFxcIj5cXG4gICAgICA8aDEgY2xhc3M9XFxcImhlYWRlclxcXCI+TGl2ZSB3ZWF0aGVyIGRhdGEgZm9yIHlvdXIgc2Nob29sPC9oMT5cXG4gICAgICA8cCBjbGFzcz1cXFwidW5kZXItaGVhZGVyXFxcIj5NZWFzdXJlLCByZWNvcmQsIGFuZCBhbmFseXNlIGxpdmUgZW52aXJvbm1lbnRhbCBkYXRhLCBhbmQgbWFrZSBpdCBhY2Nlc3NpYmxlIHRvIHN0dWRlbnRzLFxcbiAgICAgICAgc3RhZmYgYW5kIHBhcmVudHMuPC9wPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiB3ZWF0aGVyLWtpdC1jb250YWluZXIgY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIiBjb2wtbGctNiBjb2wtbWQtOCBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL3NjaG9vbHMvd2VhdGhlci1raXQuanBnXFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmUgd2VhdGhlci1raXQtaW1nXFxcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTYgY29sLW1kLTQgY29sLXNtLTEyIHRleHQtYWxpZ25cXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaW50cm8tdG9wXFxcIj5JTlRST0RVQ0lORzwvcD5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInVuZGVyLXRvcFxcXCI+VGhlIFVWTGVuc8KuIFdlYXRoZXIgS2l0PC9wPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlRoZSBVVkxlbnPCriBXZWF0aGVyIEtpdCBjb250YWlucyBzZW5zb3JzIGFuZCBzb2Z0d2FyZSB0byBtZWFzdXJlIHRoZSBsb2NhbCBVViwgdGVtcGVyYXR1cmUsIHJhaW5mYWxsLCBhbmQgbW9yZSBhdCB5b3VyIHNjaG9vbC48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImluZm9ybWF0aW9uXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBpbmZvcm1hdGlvbi1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgaW5mb1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC02IGNvbC1zbS1wdXNoLTZcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4vYXNzZXRzL2ltYWdlcy9zY2hvb2xzL3dlYXRoZXJfZGFzaGJvYXJkLnBuZ1xcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltYWdlLXNpemVcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1zbS1wdWxsLTYgdGV4dC1wYWRkaW5nXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJvcmFuZ2UtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgQ29sbGVjdCA8c3Bhbj5kYXRhPC9zcGFuPlxcbiAgICAgICAgPC9wPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJ1bC10ZXh0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJsaS1tYXJnaW5cXFwiPkNvbGxlY3QgVVYsIHJhaW5mYWxsLCB3aW5kc3BlZWQsIHRlbXBlcmF0dXJlIGFuZCBodW1pZGl0eSBkYXRhIGF0IHlvdXIgc2Nob29sLjwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwibGktbWFyZ2luXFxcIj5MaXZlc3RyZWFtIHRvIGRhdGEgZGFzaGJvYXJkcyBhbmQgdXNlIGluIHNjaG9vbCBwcm9qZWN0cy48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBpbmZvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBpbWctbGVmdFxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL3NjaG9vbHMvZWFydGgtdmlzdWFsaXNhdGlvbi5qcGdcXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWFnZS1zaXplXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiB0ZXh0LXBhZGRpbmdcXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcIm9yYW5nZS1oZWFkZXJcXFwiPlxcbiAgICAgICAgICBDcmVhdGUgPHNwYW4+dmlzdWFsaXNhdGlvbnM8L3NwYW4+XFxuICAgICAgICA8L3A+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInVsLXRleHRcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImxpLW1hcmdpblxcXCI+VGhlIHdlYXRoZXIga2l0IGJ1bmRsZXMgc29mdHdhcmUgYW5kIHRvb2xraXRzIHRvIGhlbHAgeW91IGJ1aWxkIHlvdXIgb3duIHZpc3VhbGlzYXRpb25zLjwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwibGktbWFyZ2luXFxcIj5Db21wYXJlIGRhdGEgYWNjcm9zcyB0aW1lIGFuZCBsb2NhdGlvbnMuPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgaW5mb1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLXNtLXB1c2gtNlxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL3NjaG9vbHMvYXBwX2lwYWQuanBnXFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmUgaW1hZ2Utc2l6ZVxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLXNtLXB1bGwtNiB0ZXh0LXBhZGRpbmdcXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcIm9yYW5nZS1oZWFkZXJcXFwiPlxcbiAgICAgICAgICBTdGF5IDxzcGFuPnNhZmU8L3NwYW4+XFxuICAgICAgICA8L3A+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInVsLXRleHRcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImxpLW1hcmdpblxcXCI+TGl2ZSBVViBhbmQgc3VuIHNhZmV0eSBpbmZvcm1hdGlvbiB0aGF0IGlzIGxvY2FsIHRvIHlvdXIgc2Nob29sLjwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwibGktbWFyZ2luXFxcIj5QcmVtaXVtIFVWTGVuc8KuIGlPUyBhbmQgQW5kcm9pZCBhcHAgbGljZW5zZSBmb3Igc3R1ZGVudHMgYW5kIHRlYWNoZXJzLjwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cXG48c2VjdGlvbiBjbGFzcz1cXFwib3JkZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGFsaWduLWNvbnRhaW5lclxcXCI+XFxuICAgIDxoMSBjbGFzcz1cXFwib3JkZXItaGVhZGVyXFxcIj5PcmRlciB5b3VyIFVWTGVuc8KuIFdlYXRoZXIgS2l0IG5vdyBhbmQgZ2V0IHN0YXJ0ZWQuPC9oMT5cXG4gICAgPGRpdiBjbGFzcz1cXFwib3JkZXItY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgaW1nLXBhZGRpbmdcXFwiPlxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL3NjaG9vbHMvd2VhdGhlci1raXQuanBnXFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmUgaW1hZ2Utc2l6ZVxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IHRleHQtcGFkZGluZ1xcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJncmV5LWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgTW9uaXRvcmluZyBLaXRcXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2VcXFwiPlxcbiAgICAgICAgICAgICQ0NzVcXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8cD5cXG4gICAgICAgICAgICBHZXQgc3RhcnRlZCB3aXRoIHRoZSBlcXVpcG1lbnQgdG8gbW9uaXRvciB0aGUgZW52aXJvbm1lbnRhbCBjb25kaXRpb25zIGF0IHlvdXIgc2Nob29sLiBUaGUga2l0IGluY2x1ZGVzOlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwidWwtdGV4dC0yXFxcIj5cXG4gICAgICAgICAgICA8bGk+QSB3ZWF0aGVyIHN0YXRpb248L2xpPlxcbiAgICAgICAgICAgIDxsaT5Nb3VudGluZyBoYXJkd2FyZTwvbGk+XFxuICAgICAgICAgICAgPGxpPkluc3RhbGxhdGlvbiBzdXBwb3J0PC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcInJlbW92ZS11bmRlcmxpbmVcXFwiIGhyZWY9XFxcImh0dHA6Ly9oZWxwLnV2bGVucy5jb20vYXJ0aWNsZS82LXdlYXRoZXItc3RhdGlvbi1pbnN0YWxsYXRpb25cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbi1pbmZvXFxcIj5cXG4gICAgICAgICAgICAgIE1vcmUgaW5mby4uLlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgaW1nLXBhZGRpbmdcXFwiPlxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiLi9hc3NldHMvaW1hZ2VzL3NjaG9vbHMvYXBwX2lwaG9uZS5qcGdcXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWFnZS1zaXplXFxcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgdGV4dC1wYWRkaW5nXFxcIj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImdyZXktaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICBQcmVtaXVtIEFwcCBMaWNlbnNlXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInByaWNlXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGluZS10aHJvdWdoXFxcIj4kNDk8L3NwYW4+ICQzOS9tb250aCA8c3BhbiBjbGFzcz1cXFwiYnJhY2tldHNcXFwiPihpbnRyb2R1Y3Rvcnkgb2ZmZXIpPC9zcGFuPlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgIFNjaG9vbC13aWRlIHByZW1pdW0gbGljZW5zZSB0byB0aGUgVVZMZW5zwq4gYXBwIGZvciB5b3VyIHN0dWRlbnRzIGFuZCBzdGFmZi5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcInVsLXRleHQtMlxcXCI+XFxuICAgICAgICAgICAgPGxpPkxpdmUgVVYgZGF0YSBhdCB5b3VyIHNjaG9vbCwgYW5kIGFueXdoZXJlIGVsc2UgaW4gdGhlIGNvdW50cnk8L2xpPlxcbiAgICAgICAgICAgIDxsaT5SZWFsLXRpbWUgYWxlcnRzIHdoZW4gdGhlIFVWIGNvbmRpdGlvbnMgY2hhbmdlPC9saT5cXG4gICAgICAgICAgICA8bGk+U3Vuc21hcnQgZWR1Y2F0aW9uYWwgbWF0ZXJpYWw8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YSBjbGFzcz1cXFwicmVtb3ZlLXVuZGVybGluZVxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLXRhcmdldD1cXFwiI215TW9kYWxcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbi1vcmRlclxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJjbGlja1xcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiT3JkZXIgQnV0dG9uXFxcIj5cXG4gICAgICAgIE9yZGVyIG5vd1xcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuXFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm15TW9kYWxcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm9yZGVyLWxhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiIHJvbGU9XFxcImRvY3VtZW50XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2UgY2xvc2UtYnV0dG9uXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+XFxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImNvbnRhY3QtaGVhZGVyXFxcIiBpZD1cXFwib3JkZXItbGFiZWxcXFwiPk9yZGVyIE5vdzwvaDI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPCEtLSBlbmQgb2YgaGVhZGVyIC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblxcbiAgICAgICAgPHA+RmlsbCBpbiB5b3VyIGRldGFpbHMgYmVsb3cgYW5kIG91ciBzYWxlcyB0ZWFtIHdpbGwgYmUgaW4gY29udGFjdCB3aXRoaW4gdGhlIG5leHQgd29ya2luZyBkYXkuPC9wPlxcblxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCIgW2Zvcm1Hcm91cF09XFxcIm15Rm9ybVxcXCIgbm92YWxpZGF0ZT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGxhYmVsLXN0eWxlXFxcIiA+TmFtZSAqPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtQ29udHJvbE5hbWU9IFxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmFtZVxcXCIgcmVxdWlyZWQ+XFxuXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ25hbWUnKS5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBteUZvcm0uZ2V0KCduYW1lJykudG91Y2hlZFxcXCIgPk5hbWUgaXMgcmVxdWlyZWQ8L3NtYWxsPlxcblxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiIGNvbnRyb2wtbGFiZWwgbGFiZWwtc3R5bGVcXFwiID5FbWFpbCAqPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybUNvbnRyb2xOYW1lPSBcXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCIgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJteUZvcm0uZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIG15Rm9ybS5nZXQoJ2VtYWlsJykudG91Y2hlZFxcXCI+RW1haWwgaXMgcmVxdWlyZWQgPC9zbWFsbD5cXG4gICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcIiB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3BhdHRlcm4nKSAmJiBteUZvcm0uZ2V0KCdlbWFpbCcpLnRvdWNoZWRcXFwiPlZhbGlkIEVtYWlsIGlzIHJlcXVpcmVkIDwvc21hbGw+XFxuXFxuICAgICAgICAgICAgPCEtLSBlbmQgb2Ygcm93LS0+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcIiBjb250cm9sLWxhYmVsIGxhYmVsLXN0eWxlXFxcIiA+UGhvbmUgbnVtYmVyPC9sYWJlbD5cXG5cXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT0gXFxcInBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGhvbmUgbnVtYmVyXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcIiB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ3Bob25lJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgbXlGb3JtLmdldCgncGhvbmUnKS50b3VjaGVkXFxcIj5QaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWQgPC9zbWFsbD5cXG4gICAgICAgICAgICA8IS0tIGVuZCBvZiByb3ctLT5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgbGFiZWwtc3R5bGVcXFwiID5TY2hvb2wgKjwvbGFiZWw+XFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybUNvbnRyb2xOYW1lPSBcXFwic2Nob29sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2Nob29sXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibXlGb3JtLmdldCgnc2Nob29sJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgbXlGb3JtLmdldCgnc2Nob29sJykudG91Y2hlZFxcXCI+U2Nob29sIGlzIHJlcXVpcmVkIDwvc21hbGw+XFxuXFxuICAgICAgICAgICAgPCEtLSBlbmQgb2Ygcm93LS0+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tIGVuZCBvZiBmb3JtIGdyb3VwIC0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IHB1c2gtbWQtNiByZXF1aXJlZC10ZXh0IFxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVscC1ibG9jayBjdXN0b20taGVscFxcXCI+ICogVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IHB1bGwtbWQtNlxcXCIgPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWN1c3RvbVxcXCIgIFtkaXNhYmxlZF09XFxcIm15Rm9ybS5pbnZhbGlkXFxcIj4gU1VCTUlUIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8IS0tIGVuZCBvZiBib2R5IC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCIgPlxcbiAgICAgICAgPGRpdiBpZD1cXFwic3VjY2Vzc1JlZ2lzdGVyXFxcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSBlbmQgb2YgbW9kYWwgY29udGVudC0tPlxcbiAgPC9kaXY+XFxuICA8IS0tZW5kIG9mIG1vZGFsLWRpYWxvZy0tPlxcbjwvZGl2PlxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL3NjaG9vbHMvYWJvdXQtcGFnZS9hYm91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9XFxcImJhY2staW1hZ2VcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbnRlbnQtY29udGFpbmVyXFxcIj5cXG4gICAgPHAgY2xhc3M9XFxcImhlYWRlci1mb250XFxcIj5cXG4gICAgICBDb25ncmF0dWxhdGlvbnMhXFxuICAgIDwvcD5cXG4gICAgPHAgY2xhc3M9XFxcInN1Yi1oZWFkZXItZm9udFxcXCI+XFxuICAgICAgWW91IGFyZSBhbG1vc3QgdGhlcmUgd2l0aCB0aGUgaW5zdGFsbGF0aW9uISBGaWxsIGluIHlvdXIgZGV0YWlscyBiZWxvdyB0byBhY3RpdmF0ZSBpdCBvbiB0aGUgVVZMZW5zIG5ldHdvcmsuXFxuICAgIDwvcD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBmb3JtLWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lclxcXCI+XFxuXFxuICA8cCBjbGFzcz1cXFwidGV4dC1zdHlsZVxcXCIgPkZpbGwgaW4gdGhlIGRldGFpbHMgb2YgeW91ciB3ZWF0aGVyIHN0YXRpb24gYmVsb3cgdG8gcHJvdmlkZSBsaXZlIFVWIGRhdGEgdG8gdGhlIHN0YWZmIGFuZCBzdHVkZW50cyBvZiB0aGUgc2Nob29sITwvcD5cXG4gIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgY2VudGVyLWZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiIFtmb3JtR3JvdXBdPVxcXCJteUZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0xMCBvZmZzZXQteHMtMSBjb250cm9sLWxhYmVsIGxhYmVsLXN0eWxlXFxcIiA+TmFtZSAqPC9sYWJlbD5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgb2Zmc2V0LXhzLTFcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiICBmb3JtQ29udHJvbE5hbWU9IFxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTmFtZVxcXCIgcmVxdWlyZWQgPlxcblxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxzbWFsbCBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xIHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibXlGb3JtLmdldCgnbmFtZScpLmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIG15Rm9ybS5nZXQoJ25hbWUnKS50b3VjaGVkXFxcIiA+TmFtZSBpcyByZXF1aXJlZDwvc21hbGw+XFxuXFxuICAgICAgPCEtLSBQcm9ibGVtIGVudGVyaW5nIHdyb25nIHRleHQ/IC0tPlxcblxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSBlbmQgb2YgZm9ybSBncm91cCAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xIGNvbnRyb2wtbGFiZWwgbGFiZWwtc3R5bGVcXFwiPkVtYWlsICo8L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBvZmZzZXQteHMtMVxcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT0gXFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIHJlcXVpcmVkPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxzbWFsbCBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xIHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibXlGb3JtLmdldCgnZW1haWwnKS5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBteUZvcm0uZ2V0KCdlbWFpbCcpLnRvdWNoZWRcXFwiID5FbWFpbCBpcyByZXF1aXJlZCA8L3NtYWxsPlxcbiAgICAgIDxzbWFsbCBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xIHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibXlGb3JtLmdldCgnZW1haWwnKS5oYXNFcnJvcigncGF0dGVybicpICYmIG15Rm9ybS5nZXQoJ25hbWUnKS50b3VjaGVkXFxcIiA+VmFsaWQgRW1haWwgaXMgcmVxdWlyZWQ8L3NtYWxsPlxcbiAgICAgIDwhLS0gZW5kIG9mIHJvdy0tPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xIGNvbnRyb2wtbGFiZWwgbGFiZWwtc3R5bGVcXFwiID5QaG9uZSBudW1iZXI8L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMCBvZmZzZXQteHMtMVxcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtQ29udHJvbE5hbWU9IFxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlBob25lIG51bWJlclxcXCIgPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxzbWFsbCBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xIHRleHQtZGFuZ2VyXFxcIiA+IDwvc21hbGw+XFxuXFxuICAgICAgPCEtLSBlbmQgb2Ygcm93LS0+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxuICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wteHMtMTAgb2Zmc2V0LXhzLTEgY29udHJvbC1sYWJlbCBsYWJlbC1zdHlsZVxcXCIgPlNjaG9vbCAqPC9sYWJlbD5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgb2Zmc2V0LXhzLTFcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT0gXFxcInNjaG9vbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNjaG9vbFxcXCIgPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxzbWFsbCBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xICB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm15Rm9ybS5nZXQoJ3NjaG9vbCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIG15Rm9ybS5nZXQoJ3NjaG9vbCcpLnRvdWNoZWQgXFxcIj4gU2Nob29sIGlzIHJlcXVpcmVkPC9zbWFsbD5cXG5cXG4gICAgICA8IS0tIGVuZCBvZiByb3ctLT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC14cy0xMCBvZmZzZXQteHMtMSBjb250cm9sLWxhYmVsIGxhYmVsLXN0eWxlXFxcIiA+U2Vuc29yIElEIChlLmcuIElBVUNLTEFONDE2KSAqPC9sYWJlbD5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgb2Zmc2V0LXhzLTFcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1Db250cm9sTmFtZT0gXFxcInNlbnNvclxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbnNvclxcXCIgcmVxdWlyZWQ+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPHNtYWxsIGNsYXNzPVxcXCJjb2wteHMtMTAgb2Zmc2V0LXhzLTEgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJteUZvcm0uZ2V0KCdzZW5zb3InKS5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBteUZvcm0uZ2V0KCdzZW5zb3InKS50b3VjaGVkXFxcIj5TZW5zb3IgaXMgcmVxdWlyZWQgPC9zbWFsbD5cXG5cXG4gICAgICA8IS0tIGVuZCBvZiByb3ctLT5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gZW5kIG9mIGZvcm0gZ3JvdXAgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwIG9mZnNldC14cy0xIGNvbC1zbS01IHB1c2gtc20tNiBcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlbHAtYmxvY2sgY3VzdG9tLWhlbHBcXFwiPiAqIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuIDwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTAgb2Zmc2V0LXhzLTEgY29sLXNtLTUgcHVsbC1zbS02XFxcIiA+XFxuXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tY3VzdG9tXFxcIiBbZGlzYWJsZWRdPVxcXCJteUZvcm0uaW52YWxpZFxcXCI+IFNVQk1JVCA8L2J1dHRvbj5cXG5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuICA8YnI+XFxuICA8ZGl2IGNsYXNzPVxcXCJcXFwiID5cXG4gICAgPGRpdiBpZD1cXFwic3VjY2Vzc1N0YXRpb25cXFwiID5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9zY2hvb2xzL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBtYXAtc2l6ZVxcXCIgPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgIDxpbnB1dCBbbmdTdHlsZV09XFxcImlzTG9hZGVkID8ge306IHsnZGlzcGxheSc6J25vbmUnfVxcXCIgaWQ9XFxcInBhYy1pbnB1dFxcXCIgY2xhc3M9XFxcImNvbnRyb2xzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgbG9jYXRpb25cXFwiICNzZWFyY2ggW2Zvcm1Db250cm9sXT1cXFwic2VhcmNoQ29udHJvbFxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIm1hcFxcXCIgI21hcD48L2Rpdj5cXG4gIDxkaXYgKm5nSWY9XFxcImRpc3BsYXlcXFwiIFtuZ0NsYXNzXT1cXFwiaW5mb19iaWcgPyAnaW5mby13aW5kb3cnOidpbmZvLXdpbmRvdy1zbWFsbCdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjbG9zZVxcXCIgKm5nSWY9XFxcIiFpbmZvX2JpZ1xcXCI+XFxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImhpZGVJbmZvKClcXFwiPiZ0aW1lczs8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjbG9zZVxcXCIgKm5nSWY9XFxcImluZm9fYmlnXFxcIj5cXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgKGNsaWNrKT1cXFwibWluaW1pemVJbmZvKClcXFwiPiZtaW51czs8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXN0eWxlXFxcIj5cXG4gICAgICA8YXBwLXdoZWVsICpuZ0lmPVxcXCJpbmZvX2JpZ1xcXCIgW2FwaURhdGFdPVxcXCJhcGlEYXRhXFxcIj48L2FwcC13aGVlbD5cXG4gICAgICA8ZGl2ICpuZ0lmPVxcXCIhaW5mb19iaWdcXFwiPlxcblxcbiAgICAgICAgPGg1Pnt7bmFtZX19PC9oNT5cXG4gICAgICAgIDxoNSAqbmdJZj1cXFwiIWZsYW1lc0xvYWRpbmdcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9oNT5cXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImZsYW1lc0xvYWRpbmdcXFwiIGNsYXNzPVxcXCJpbmZvLXBpY3R1cmUgY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZFxcXCI+e3t1dkxldmVsfX0gVVY8L2Rpdj5cXG4gICAgICAgICAgPGltZyAqbmdJZj1cXFwidXZMZXZlbCA9PSdFeHRyZW1lJ1xcXCIgc3JjPVxcXCIuL2Fzc2V0cy93aWRnZXQvd2lkZ2V0LWZsYW1lcy9leHRyZW1lLnN2Z1xcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgICAgICA8aW1nICpuZ0lmPVxcXCJ1dkxldmVsID09J05vbmUnXFxcIiBzcmM9XFxcIi4vYXNzZXRzL3dpZGdldC93aWRnZXQtZmxhbWVzL25vbmUuc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgIDxpbWcgKm5nSWY9XFxcInV2TGV2ZWwgPT0nTG93J1xcXCIgc3JjPVxcXCIuL2Fzc2V0cy93aWRnZXQvd2lkZ2V0LWZsYW1lcy9sb3cuc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgIDxpbWcgKm5nSWY9XFxcInV2TGV2ZWwgPT0nSGlnaCdcXFwiIHNyYz1cXFwiLi9hc3NldHMvd2lkZ2V0L3dpZGdldC1mbGFtZXMvaGlnaC5zdmdcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgPGltZyAqbmdJZj1cXFwidXZMZXZlbCA9PSdNb2RlcmF0ZSdcXFwiIHNyYz1cXFwiLi9hc3NldHMvd2lkZ2V0L3dpZGdldC1mbGFtZXMvbW9kZXJhdGUuc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgIDxpbWcgKm5nSWY9XFxcInV2TGV2ZWwgPT0nVmVyeSBoaWdoJ1xcXCIgc3JjPVxcXCIuL2Fzc2V0cy93aWRnZXQvd2lkZ2V0LWZsYW1lcy92ZXJ5aGlnaC5zdmdcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIHBhZGRpbmctYnV0dG9uXFxcIj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImRyb3BwZXJcXFwiPjwvZGl2Pi0tPlxcbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcIiFmbGFtZXNMb2FkaW5nXFxcIiAoY2xpY2spPVxcXCJvcGVuV2hlZWxDb21wb25lbnQoKVxcXCIgY2xhc3M9XFxcImJ1dHRvbi1zdHlsZVxcXCI+RnVsbCBVViByZXBvcnQ8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dpZGdldC9tYXAvbWFwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwiZ29kXFxcIj5cXG4gIDxzZWN0aW9uIGNsYXNzPVxcXCJsb2FkaW5nXFxcIiAqbmdJZj1cXFwiIWlzTG9hZGVkXFxcIj5cXG5cXG4gICAge3toaW50fX1cXG5cXG4gIDwvc2VjdGlvbj5cXG4gIDxzZWN0aW9uIGlkPVxcXCJtYWluLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsaWduXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCIgY29sLXhzLTEyIGNvbC1tZC02XFxcIiBpZD1cXFwic2xpZGVyXFxcIiBbbmdTdHlsZV09XFxcImlzTG9hZGVkID8ge306IHsnZGlzcGxheSc6J25vbmUnfVxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzID1cXFwiY29sLXhzLTEyIGNvbC1tZC02IG9mZnNldC1tZC02IGluZm9ybWF0aW9uXFxcIj5cXG4gICAgICAgIDxzZWN0aW9uIFtuZ1N0eWxlXT1cXFwiaXNMb2FkZWQgPyB7fTogeydkaXNwbGF5Jzonbm9uZSd9XFxcIiBjbGFzcz1cXFwibWFpbi1pbmZvIGNvbC14cy0xMlxcXCI+XFxuICAgICAgICAgIDxoNiAgY2xhc3M9XFxcImhlYWQtZm9udCBsb2NhdGlvblxcXCIgPnt7Zm9yZWNhc3REYXl9fSBmb3JlY2FzdDwvaDY+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cXFwiaGVhZC1mb250IHV2VGFnXFxcIiBbbmdTdHlsZV09XFxcInsnY29sb3InOnRleHRDb2xvcn1cXFwiPnt7dXZWYWx1ZX19IFVWPC9oMz5cXG4gICAgICAgICAgPGg2IGNsYXNzPVxcXCJoZWFkLWZvbnQgbG9jYXRpb25cXFwiID5pbiB7e3BsYWNlfX08L2g2PlxcbiAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICAgPHNlY3Rpb24gIGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2R5LWZvbnRcXFwiIFtuZ1N0eWxlXT1cXFwiaXNMb2FkZWQgPyB7fTogeydkaXNwbGF5Jzonbm9uZSd9XFxcIiA+e3ttZXNzYWdlfX08L2Rpdj5cXG4gICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ1dHRvbi1zdHlsZVxcXCIgPkV4cGxvcmUgVVY8L2J1dHRvbj4tLT5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuICA8L3NlY3Rpb24+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd2lkZ2V0L3doZWVsL3doZWVsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwid2lkZ2V0XFxcIj5cXG4gIDwhLS08YXBwLXdoZWVsIChvcGVuQ29tcG9uZW50KT1cXFwiY2hhbmdlVmlldygpXFxcIiAqbmdJZj1cXFwib3BlbldoZWVsXFxcIj48L2FwcC13aGVlbD4tLT5cXG4gIDxhcHAtbWFwPjwvYXBwLW1hcD5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIlxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIlxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIlxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L29iamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCJcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWdleHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIlxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIlxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLXBhZ2Utc2Nyb2xsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLXBhZ2Utc2Nyb2xsXCJcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=