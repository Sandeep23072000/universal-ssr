"use strict";
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 29847:
/*!***********************************************!*\
  !*** ./src/app/services/canonical.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanonicalService": () => (/* binding */ CanonicalService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);


class CanonicalService {
  constructor(dom) {
    this.dom = dom;
  }
  setCanonicalURL(url) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical url for use the different url');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }
}
CanonicalService.ɵfac = function CanonicalService_Factory(t) {
  return new (t || CanonicalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
CanonicalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CanonicalService,
  factory: CanonicalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 55514:
/*!********************************************************!*\
  !*** ./src/app/universal/details/details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);


class DetailsComponent {}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
  return new (t || DetailsComponent)();
};
DetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DetailsComponent,
  selectors: [["app-details"]],
  decls: 2,
  vars: 0,
  consts: [["routerLink", "/home", 1, "fs-6"]],
  template: function DetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "details works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 89143:
/*!**************************************************!*\
  !*** ./src/app/universal/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 55806);
/* harmony import */ var src_app_services_canonical_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/canonical.service */ 29847);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 41444);






const _c0 = function () {
  return ["/details"];
};
function HomeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r1.state_detail.name, " ", item_r1.state_detail.country_detail.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" SGD - ", item_r1.min_salary, "-", item_r1.max_salary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r1.experiance_from, " - ", item_r1.experiance_to, " Years Experience ");
  }
}
class HomeComponent {
  constructor(
  // private route: ActivatedRoute,
  http, title, meta, canservice) {
    this.http = http;
    this.title = title;
    this.meta = meta;
    this.canservice = canservice;
    this.http.get('https://virvit.mydevpartner.website/vvapi/v1/jobs/').subscribe(response => {
      console.log(response.results);
      this.jobsdata = response.results;
    });
  }
  ngOnInit() {
    // this.canservice.setCanonicalURL();
    // SEO metadata
    this.title.setTitle('description about uniiversal server side rendering');
    this.meta.addTag({
      name: 'description',
      content: 'longDescription'
    });
    // Discription metadata
    this.meta.addTag({
      name: 'universal',
      content: 'summary'
    });
    this.meta.addTag({
      name: 'universal:site',
      content: '@AngularUniv'
    });
    this.meta.addTag({
      name: 'universal:title',
      content: 'description'
    });
    this.meta.addTag({
      name: 'universal:description',
      content: 'description'
    });
    this.meta.addTag({
      name: 'universal:text:description',
      content: 'description'
    });
    this.meta.addTag({
      name: 'universal:image',
      content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200'
    });
    const tags = this.meta.getTags('name=universal');
    console.log(tags);
    this.meta.updateTag({
      property: "og:title",
      content: "universal tittle according to update tags"
    });
    this.meta.updateTag({
      property: "og:type",
      content: "website"
    });
    this.meta.updateTag({
      property: "og:image",
      content: "show image here"
    });
    this.meta.updateTag({
      property: "og:url",
      content: "http//:localhost:4200"
    });
    this.meta.updateTag({
      name: "twitter:card",
      content: "summary for twitter card"
    });
    this.meta.updateTag({
      name: "twitter:site",
      content: "@nytimesbits"
    });
    this.meta.updateTag({
      name: "twitter:creator",
      content: "@nickbilton"
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "summary for angular universal twitter card"
    });
    this.meta.updateTag({
      name: "twitter:description",
      content: "Hi there! 👋 Thank you for visiting my website!"
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https:///samvloeberghs.be/assets/share/home.png"
    });
    this.meta.updateTag({
      name: "twitter:image:alt",
      content: "Webdeveloper"
    });
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_canonical_service__WEBPACK_IMPORTED_MODULE_0__.CanonicalService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 14,
  vars: 1,
  consts: [[1, "mb-5"], [1, "picsum-img-wrapper"], [1, "carousel-inner", "mt-5", "mb-5"], ["type", "button", 1, "carousel-control-prev", "text-primary"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], [1, "container-fluid"], [1, "row"], [1, "col-3"], [1, "carousel-item", "active"], ["class", "", 4, "ngFor", "ngForOf"], ["type", "button", 1, "carousel-control-next", "text-primary"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, ""], [1, "card", "rounded-5", "p-3", "mx-5", "mt-3"], [1, "text-primary", "mt-3", "mb-3", "fw-bold", "fs-6", "text-decoration-none", 3, "routerLink"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 10, 9, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 12)(13, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.jobsdata);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23821:
/*!****************************************************!*\
  !*** ./src/app/universal/login/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 55806);
/* harmony import */ var src_app_services_canonical_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/canonical.service */ 29847);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);




class LoginComponent {
  constructor(meta, title, canService) {
    this.meta = meta;
    this.title = title;
    this.canService = canService;
  }
  ngOnInit() {
    this.canService.setCanonicalURL();
    console.log(this.canService.setCanonicalURL);
    // this.title.setTitle('login here for universal access');
    this.meta.addTags([{
      name: 'og:title',
      content: 'My Angular Universal Application'
    }, {
      name: 'og:description',
      content: 'This is my Angular Universal application'
    }, {
      name: 'twitter:card',
      content: 'summary'
    }, {
      name: 'twitter:title',
      content: 'My Angular Universal Application'
    }, {
      name: 'twitter:description',
      content: 'This is my Angular Universal application'
    }]);
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_canonical_service__WEBPACK_IMPORTED_MODULE_0__.CanonicalService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 2,
  vars: 0,
  consts: [["routerLink", "/details", 1, "fs-6"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "login works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 65834:
/*!*******************************************************!*\
  !*** ./src/app/universal/universal-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversalRoutingModule": () => (/* binding */ UniversalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details/details.component */ 55514);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 89143);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 23821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);






const routes = [{
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  data: {
    title: "home page is here",
    discription: "get the home page here  for showing data",
    ogTitle: 'Description of Home Component for social media'
  }
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
  data: {
    title: "login page is here",
    discription: "get the login page here  for showing data",
    ogTitle: 'Description of Login Component for social media'
  }
}, {
  path: 'details',
  component: _details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent
}];
class UniversalRoutingModule {}
UniversalRoutingModule.ɵfac = function UniversalRoutingModule_Factory(t) {
  return new (t || UniversalRoutingModule)();
};
UniversalRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: UniversalRoutingModule
});
UniversalRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UniversalRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 73971:
/*!**************************************************!*\
  !*** ./src/app/universal/universal.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversalComponent": () => (/* binding */ UniversalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);


class UniversalComponent {
  constructor() {}
  ngOnInit() {}
}
UniversalComponent.ɵfac = function UniversalComponent_Factory(t) {
  return new (t || UniversalComponent)();
};
UniversalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UniversalComponent,
  selectors: [["app-universal"]],
  decls: 1,
  vars: 0,
  template: function UniversalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2385:
/*!***********************************************!*\
  !*** ./src/app/universal/universal.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversalModule": () => (/* binding */ UniversalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _universal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universal-routing.module */ 65834);
/* harmony import */ var _universal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universal.component */ 73971);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 89143);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 23821);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ 55514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);







class UniversalModule {}
UniversalModule.ɵfac = function UniversalModule_Factory(t) {
  return new (t || UniversalModule)();
};
UniversalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: UniversalModule
});
UniversalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _universal_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniversalRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UniversalModule, {
    declarations: [_universal_component__WEBPACK_IMPORTED_MODULE_1__.UniversalComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_4__.DetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _universal_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniversalRoutingModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=385.js.map