(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0_dummy/dummy.module": [
		"./src/app/0_dummy/dummy.module.ts",
		"0_dummy-dummy-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/containers */ "./src/app/core/containers/index.ts");




const routes = [
    { path: '', component: _core_containers__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'dummy', loadChildren: './0_dummy/dummy.module#DummyModule' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
let AppRoutingModule = 
// add routing for the page
class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
    // add routing for the page
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--&lt;!&ndash;The content below is only a placeholder and can be replaced.&ndash;&gt;-->\r\n<!--<div style=\"text-align:center\">-->\r\n<!--  <h1>-->\r\n<!--    Welcome to {{ title }}!-->\r\n<!--  </h1>-->\r\n<!--  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\r\n<!--</div>-->\r\n<!--<h2>Here are some links to help you start: </h2>-->\r\n<!--<ul>-->\r\n<!--  <li>-->\r\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\r\n<!--  </li>-->\r\n<!--  <li>-->\r\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>-->\r\n<!--  </li>-->\r\n<!--  <li>-->\r\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\r\n<!--  </li>-->\r\n<!--</ul>-->\r\n\r\n\r\n<header>\r\n    <img src=\"https://hacktoberfest.digitalocean.com/assets/logo-hf19-full-10f3c000cea930c76acc1dedc516ea7118b95353220869a3051848e45ff1d656.svg\r\n\" alt=\"hacktoberfest\">\r\n    <!--  <h1>Unleash your Angular</h1>-->\r\n</header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer id=\"footer\">\r\n    <div>\r\n        © 2019 Proctors &amp; Stevenson\r\n    </div>\r\n</footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Overrides Browser Defaults */\np, h3, a, ul {\n  font-family: 'Fredoka One', sans-serif;\n  text-decoration: none;\n  color: #524b3f;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\nbody {\n  text-align: center;\n  background-color: #ccd2d6;\n  padding: 0;\n  margin: 0;\n  font-family: 'Fredoka One', sans-serif;\n  font-size: 16px; }\nheader {\n  position: relative;\n  top: -10px;\n  background-color: #3c1c57;\n  padding: 3em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.89); }\nheader img {\n    width: 30%; }\nfooter {\n  padding: 35px 20px;\n  background-color: #343a40b0;\n  justify-content: center;\n  color: #999999;\n  font-size: 1.1rem;\n  font-family: 'Open Sans', sans-serif;\n  border-top: 1px solid rgba(255, 255, 255, 0.89); }\n@media only screen and (min-width: 900px) {\n  .header h1 {\n    font-size: 6vw; }\n  app-card {\n    width: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYXJ0aW5hXFxEb2N1bWVudHNcXFByb2dyYW1taW5nXFxNaXhlZFxcSGFja3RvYmVyRmVzdC1Bbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsK0JBQUE7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDBCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFHekIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtEQUFrRCxFQUFBO0FBTHBEO0lBT0ksVUFBVSxFQUFBO0FBS2Q7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixjQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLCtDQUErQyxFQUFBO0FBR2pEO0VBQ0U7SUFDRSxjQUFjLEVBQUE7RUFFaEI7SUFDRSxVQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBPdmVycmlkZXMgQnJvd3NlciBEZWZhdWx0cyAqL1xyXG5wLCBoMywgYSwgdWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJlZG9rYSBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzUyNGIzZjtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkMmQ2O1xyXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDEyLzAyLzI1LzE5LzA0L2FuaW1hbHMtMTY5MDhfOTYwXzcyMC5qcGcnKTtcclxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nODAnIGhlaWdodD0nODAnIHZpZXdCb3g9JzAgMCA4MCA4MCclM0UlM0NnIGZpbGw9JyUyMzYzY2RkYScgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMSAwbDUgMjBINmw1LTIwem00MiAzMWEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTAgNzJoNDB2NEgwdi00em0wLThoMzF2NEgwdi00em0yMC0xNmgyMHY0SDIwdi00ek0wIDU2aDQwdjRIMHYtNHptNjMtMjVhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xMCAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNTMgNDFhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xMCAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTAgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0zMCAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTI4LThhNSA1IDAgMCAwLTEwIDBoMTB6bTEwIDBhNSA1IDAgMCAxLTEwIDBoMTB6TTU2IDVhNSA1IDAgMCAwLTEwIDBoMTB6bTEwIDBhNSA1IDAgMCAxLTEwIDBoMTB6bS0zIDQ2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTAgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTIxIDBsNSAyMEgxNmw1LTIwem00MyA2NHYtNGgtNHY0aC00djRoNHY0aDR2LTRoNHYtNGgtNHpNMzYgMTNoNHY0aC00di00em00IDRoNHY0aC00di00em0tNCA0aDR2NGgtNHYtNHptOC04aDR2NGgtNHYtNHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjMWM1NztcclxuICBwYWRkaW5nOiAzZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAzNXB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MGIwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gIH1cclxuICBhcHAtY2FyZCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'hacktoberfest-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_components___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/ */ "./src/app/core/components/index.ts");
/* harmony import */ var _core_containers___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/containers/ */ "./src/app/core/containers/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _core_components___WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
            _core_containers___WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/components/card/card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/card/card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"card\">\r\n  <a [routerLink]=\"card.pageLink\">\r\n    <img class=\"card__image\" [src]=\"card.imageLink\" [attr.alt]=\"card.artName\" />\r\n    </a>\r\n  <div class=\"card__content\">\r\n    <a [routerLink]=\"card.pageLink\"><h3 class=\"card__title\" [innerHTML]=\"card.artName\"></h3></a>\r\n    <p class='card__author'><a [href]=\"card.githubLink\" target=\"_blank\"><i class=\"fab fa-github\"></i>{{card.author}}</a> </p>\r\n    </div>\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/core/components/card/card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/card/card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card__image {\n  width: 27vw;\n  height: 27vw;\n  vertical-align: middle;\n  border-radius: 10%;\n  border: 3.5px solid #ffffffa2;\n  padding: 5px;\n  background: #948b7a;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 20px; }\n\n.card__content {\n  display: block;\n  margin-top: 15px; }\n\n.card__title {\n  font-size: 5vw;\n  padding: 10px;\n  line-height: 3vw;\n  color: #323333;\n  margin-top: 0px; }\n\n.card__title:hover {\n  color: #f0f0f0; }\n\n.card__author {\n  font-size: 1.2em;\n  color: #524b3f;\n  text-transform: capitalize;\n  padding: 7px 10px 15px 10px;\n  line-height: 15px; }\n\n.card__author > a:hover {\n  color: white; }\n\n@media only screen and (min-width: 600px) {\n  .card img {\n    top: -45px;\n    width: 10vw;\n    height: 10vw; }\n  .card__title {\n    font-size: 3.0vw;\n    padding-top: 25px; }\n  .card__author a {\n    font-size: 2.1vw; } }\n\n@media only screen and (min-width: 900px) {\n  .card img {\n    top: -65px;\n    width: 10vw;\n    height: 10vw; }\n  .card__title {\n    font-size: 2.3vw;\n    padding-top: 8px; }\n  .card__author a {\n    font-size: 1.6vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhcmQvQzpcXFVzZXJzXFxNYXJ0aW5hXFxEb2N1bWVudHNcXFByb2dyYW1taW5nXFxNaXhlZFxcSGFja3RvYmVyRmVzdC1Bbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUF5QixFQUFBOztBQUczQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixpQkFDRixFQUFBOztBQUVBO0VBQ0UsWUFBeUIsRUFBQTs7QUFHM0I7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFFbkI7SUFDRSxnQkFDRixFQUFBLEVBQUM7O0FBR0g7RUFFRTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFDRixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX2ltYWdlIHtcclxuICB3aWR0aDogMjd2dztcclxuICBoZWlnaHQ6IDI3dnc7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYm9yZGVyOiAzLjVweCBzb2xpZCAjZmZmZmZmYTI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM5NDhiN2E7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAvKkV4dHJhICovXHJcbn1cclxuXHJcbi5jYXJkX19jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDN2dztcclxuICBjb2xvcjogcmdiKDUwLCA1MSwgNTEpO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmNhcmRfX3RpdGxlOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG59XHJcblxyXG4uY2FyZF9fYXV0aG9yIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiAjNTI0YjNmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4IDE1cHggMTBweDtcclxuICBsaW5lLWhlaWdodDogMTVweFxyXG59XHJcblxyXG4uY2FyZF9fYXV0aG9yPmE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSlcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5jYXJkIGltZyB7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAuY2FyZF9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzLjB2dztcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIH1cclxuICAuY2FyZF9fYXV0aG9yIGEge1xyXG4gICAgZm9udC1zaXplOiAyLjF2d1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG5cclxuICAuY2FyZCBpbWcge1xyXG4gICAgdG9wOiAtNjVweDtcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgLmNhcmRfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4zdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxuICAuY2FyZF9fYXV0aG9yIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjZ2d1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/card/card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "card", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(/*! ./card.component.html */ "./src/app/core/components/card/card.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/core/components/card/card.component.scss")]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/core/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.component */ "./src/app/core/components/card/card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return _card_card_component__WEBPACK_IMPORTED_MODULE_0__["CardComponent"]; });




/***/ }),

/***/ "./src/app/core/containers/home-page/home-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/containers/home-page/home-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"container\">\r\n\r\n  <app-card *ngFor=\"let item of cards\"\r\n            [card]=\"item\"\r\n  >\r\n  </app-card>\r\n\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/containers/home-page/home-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/containers/home-page/home-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Flex Card Container */\n.container {\n  display: flex;\n  display: -moz-flex;\n  display: -webkit-flex;\n  -ms-box-orient: horizontal;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  line-height: 0;\n  flex-wrap: wrap; }\napp-card {\n  background: rgba(99, 205, 218, 0.5);\n  border-radius: 10px;\n  border: 1.5px solid #ffffffa2;\n  margin-top: 20px;\n  width: calc(100% * (1/2));\n  margin: 20px 10px;\n  transition-duration: .5s; }\napp-card:hover {\n    box-shadow: 10px 10px 36px 0px rgba(0, 0, 0, 0.75);\n    transform: scale(1.02); }\n@media only screen and (min-width: 600px) {\n  app-card {\n    width: calc(100% * (1 / 3)); } }\n@media only screen and (min-width: 900px) {\n  app-card {\n    width: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb250YWluZXJzL2hvbWUtcGFnZS9DOlxcVXNlcnNcXE1hcnRpbmFcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmdcXE1peGVkXFxIYWNrdG9iZXJGZXN0LUFuZ3VsYXIvc3JjXFxhcHBcXGNvcmVcXGNvbnRhaW5lcnNcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLHdCQUFBO0FBQ0E7RUFDRSxhQUFhO0VBSWIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFFZCxlQUFlLEVBQUE7QUFHakI7RUFDRSxtQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix3QkFBd0IsRUFBQTtBQVAxQjtJQVlJLGtEQUFrRDtJQUNsRCxzQkFBc0IsRUFBQTtBQUsxQjtFQUNFO0lBQ0UsMkJBQTJCLEVBQUEsRUFDNUI7QUFFSDtFQUVFO0lBQ0UsVUFBVSxFQUFBLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbnRhaW5lcnMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogRmxleCBDYXJkIENvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLW1zLWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmFwcC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMDUsIDIxOCwgLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmZmZmYTI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogY2FsYygxMDAlICogKDEvMikpO1xyXG4gIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgYXBwLWNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAqICgxIC8gMykpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcblxyXG4gIGFwcC1jYXJkIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/containers/home-page/home-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/containers/home-page/home-page.component.ts ***!
  \******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./src/app/core/data.ts");



let HomePageComponent = class HomePageComponent {
    constructor() {
        this.cards = _data__WEBPACK_IMPORTED_MODULE_2__["cardsData"];
    }
    ngOnInit() {
    }
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/core/containers/home-page/home-page.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/core/containers/home-page/home-page.component.scss")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/core/containers/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/containers/index.ts ***!
  \******************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/core/containers/home-page/home-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"]; });




/***/ }),

/***/ "./src/app/core/data.ts":
/*!******************************!*\
  !*** ./src/app/core/data.ts ***!
  \******************************/
/*! exports provided: cardsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardsData", function() { return cardsData; });
const cardsData = [
    //  Add your card in this section
    {
        artName: 'dummy',
        pageLink: '/dummy',
        imageLink: './assets/dummy.png',
        author: 'Dummy',
        githubLink: 'https://github.com/'
    },
];


/***/ }),

/***/ "./src/app/shared/back-button/back-button.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/back-button/back-button.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"url\" class=\"button primary\">Home</a>\r\n"

/***/ }),

/***/ "./src/app/shared/back-button/back-button.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/back-button/back-button.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.primary, a.button.primary {\n  font-size: 0.875rem;\n  line-height: 1.143rem;\n  padding: 14px 15px 13px;\n  color: White;\n  background-color: #004e9a;\n  outline: none;\n  border-radius: 3px;\n  border: 0px;\n  cursor: pointer;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JhY2stYnV0dG9uL0M6XFxVc2Vyc1xcTWFydGluYVxcRG9jdW1lbnRzXFxQcm9ncmFtbWluZ1xcTWl4ZWRcXEhhY2t0b2JlckZlc3QtQW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxiYWNrLWJ1dHRvblxcYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBRXJCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLCBhLmJ1dHRvbiB7XHJcbiAgJi5wcmltYXJ5IHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNDNyZW07XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE1cHggMTNweDtcclxuICAgIGNvbG9yOiBXaGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRlOWE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/back-button/back-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/back-button/back-button.component.ts ***!
  \*************************************************************/
/*! exports provided: BackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function() { return BackButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackButtonComponent = class BackButtonComponent {
    constructor() {
        this.url = '/';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BackButtonComponent.prototype, "url", void 0);
BackButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-back-button',
        template: __webpack_require__(/*! ./back-button.component.html */ "./src/app/shared/back-button/back-button.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./back-button.component.scss */ "./src/app/shared/back-button/back-button.component.scss")]
    })
], BackButtonComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back-button/back-button.component */ "./src/app/shared/back-button/back-button.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_3__["BackButtonComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_3__["BackButtonComponent"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Martina\Documents\Programming\Mixed\HacktoberFest-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map