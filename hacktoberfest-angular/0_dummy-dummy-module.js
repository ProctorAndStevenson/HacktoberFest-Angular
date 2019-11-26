(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["0_dummy-dummy-module"],{

/***/ "./src/app/0_dummy/components/basic-component/basic-component.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/0_dummy/components/basic-component/basic-component.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  basic-component works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/0_dummy/components/basic-component/basic-component.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/0_dummy/components/basic-component/basic-component.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLzBfZHVtbXkvY29tcG9uZW50cy9iYXNpYy1jb21wb25lbnQvYmFzaWMtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/0_dummy/components/basic-component/basic-component.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/0_dummy/components/basic-component/basic-component.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponentComponent", function() { return BasicComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicComponentComponent = class BasicComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
BasicComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-component',
        template: __webpack_require__(/*! ./basic-component.component.html */ "./src/app/0_dummy/components/basic-component/basic-component.component.html"),
        styles: [__webpack_require__(/*! ./basic-component.component.scss */ "./src/app/0_dummy/components/basic-component/basic-component.component.scss")]
    })
], BasicComponentComponent);



/***/ }),

/***/ "./src/app/0_dummy/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/0_dummy/components/index.ts ***!
  \*********************************************/
/*! exports provided: BasicComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-component/basic-component.component */ "./src/app/0_dummy/components/basic-component/basic-component.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicComponentComponent", function() { return _basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_0__["BasicComponentComponent"]; });




/***/ }),

/***/ "./src/app/0_dummy/containers/home-page/home-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/0_dummy/containers/home-page/home-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-back-button></app-back-button>\r\n  home-page works!\r\n  <app-basic-component></app-basic-component>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/0_dummy/containers/home-page/home-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/0_dummy/containers/home-page/home-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLzBfZHVtbXkvY29udGFpbmVycy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/0_dummy/containers/home-page/home-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/0_dummy/containers/home-page/home-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageComponent = class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/0_dummy/containers/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/0_dummy/containers/home-page/home-page.component.scss")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/0_dummy/containers/index.ts":
/*!*********************************************!*\
  !*** ./src/app/0_dummy/containers/index.ts ***!
  \*********************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/0_dummy/containers/home-page/home-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"]; });




/***/ }),

/***/ "./src/app/0_dummy/dummy.module.ts":
/*!*****************************************!*\
  !*** ./src/app/0_dummy/dummy.module.ts ***!
  \*****************************************/
/*! exports provided: DummyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyModule", function() { return DummyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/0_dummy/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/app/0_dummy/containers/index.ts");
/* harmony import */ var _routing_dummy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/dummy-routing.module */ "./src/app/0_dummy/routing/dummy-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







let DummyModule = class DummyModule {
};
DummyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components__WEBPACK_IMPORTED_MODULE_3__["BasicComponentComponent"],
            _containers__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _routing_dummy_routing_module__WEBPACK_IMPORTED_MODULE_5__["DummyRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ],
        exports: [
            _containers__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
        ],
    })
], DummyModule);



/***/ }),

/***/ "./src/app/0_dummy/routing/dummy-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/0_dummy/routing/dummy-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DummyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyRoutingModule", function() { return DummyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers */ "./src/app/0_dummy/containers/index.ts");




const routes = [
    // path: 'dummy',
    { path: '', component: _containers__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
];
let DummyRoutingModule = 
// add routing for the page
class DummyRoutingModule {
};
DummyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
    // add routing for the page
], DummyRoutingModule);



/***/ })

}]);
//# sourceMappingURL=0_dummy-dummy-module.js.map