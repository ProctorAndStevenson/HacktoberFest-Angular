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
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!--&lt;!&ndash;The content below is only a placeholder and can be replaced.&ndash;&gt;-->\r\n<!--<div style=\"text-align:center\">-->\r\n<!--  <h1>-->\r\n<!--    Welcome to {{ title }}!-->\r\n<!--  </h1>-->\r\n<!--  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\r\n<!--</div>-->\r\n<!--<h2>Here are some links to help you start: </h2>-->\r\n<!--<ul>-->\r\n<!--  <li>-->\r\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\r\n<!--  </li>-->\r\n<!--  <li>-->\r\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>-->\r\n<!--  </li>-->\r\n<!--  <li>-->\r\n<!--    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\r\n<!--  </li>-->\r\n<!--</ul>-->\r\n\r\n\r\n<header>\r\n    <img src=\"https://hacktoberfest.digitalocean.com/assets/logo-hf19-full-10f3c000cea930c76acc1dedc516ea7118b95353220869a3051848e45ff1d656.svg\r\n\" alt=\"hacktoberfest\">\r\n    <!--  <h1>Unleash your Angular</h1>-->\r\n</header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer id=\"footer\">\r\n    <div>\r\n        © 2019 Proctors &amp; Stevenson\r\n    </div>\r\n</footer>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/card/card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/card/card.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li class=\"card\">\r\n  <a [routerLink]=\"card.pageLink\">\r\n    <img class=\"card__image\" [src]=\"card.imageLink\" [attr.alt]=\"card.artName\" />\r\n    </a>\r\n  <div class=\"card__content\">\r\n    <a [routerLink]=\"card.pageLink\"><h3 class=\"card__title\" [innerHTML]=\"card.artName\"></h3></a>\r\n    <p class='card__author'><a [href]=\"card.githubLink\" target=\"_blank\"><i class=\"fab fa-github\"></i>{{card.author}}</a> </p>\r\n    </div>\r\n</li>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/containers/home-page/home-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/containers/home-page/home-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"container\">\r\n\r\n  <app-card *ngFor=\"let item of cards\"\r\n            [card]=\"item\"\r\n  >\r\n  </app-card>\r\n\r\n</ul>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/back-button/back-button.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/back-button/back-button.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"url\" class=\"button primary\">Home</a>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Overrides Browser Defaults */\np, h3, a, ul {\n  font-family: \"Fredoka One\", sans-serif;\n  text-decoration: none;\n  color: #524b3f;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\nbody {\n  text-align: center;\n  background-color: #ccd2d6;\n  padding: 0;\n  margin: 0;\n  font-family: \"Fredoka One\", sans-serif;\n  font-size: 16px;\n}\nheader {\n  position: relative;\n  top: -10px;\n  background-color: #3c1c57;\n  padding: 3em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.89);\n}\nheader img {\n  width: 30%;\n}\nfooter {\n  padding: 35px 20px;\n  background-color: #343a40b0;\n  justify-content: center;\n  color: #999999;\n  font-size: 1.1rem;\n  font-family: \"Open Sans\", sans-serif;\n  border-top: 1px solid rgba(255, 255, 255, 0.89);\n}\n@media only screen and (min-width: 900px) {\n  .header h1 {\n    font-size: 6vw;\n  }\n\n  app-card {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYXJ0aW5hXFxEb2N1bWVudHNcXFByb2dyYW1taW5nXFxNaXhlZFxcSGFja3RvYmVyRmVzdC1Bbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwrQkFBQTtBQUNBO0VBQ0Usc0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFHQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtBQ0ZGO0FER0U7RUFDRSxVQUFBO0FDREo7QURNQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0NBQUE7QUNIRjtBRE1BO0VBQ0U7SUFDRSxjQUFBO0VDSEY7O0VES0E7SUFDRSxVQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBPdmVycmlkZXMgQnJvd3NlciBEZWZhdWx0cyAqL1xyXG5wLCBoMywgYSwgdWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJlZG9rYSBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzUyNGIzZjtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkMmQ2O1xyXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDEyLzAyLzI1LzE5LzA0L2FuaW1hbHMtMTY5MDhfOTYwXzcyMC5qcGcnKTtcclxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nODAnIGhlaWdodD0nODAnIHZpZXdCb3g9JzAgMCA4MCA4MCclM0UlM0NnIGZpbGw9JyUyMzYzY2RkYScgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMSAwbDUgMjBINmw1LTIwem00MiAzMWEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTAgNzJoNDB2NEgwdi00em0wLThoMzF2NEgwdi00em0yMC0xNmgyMHY0SDIwdi00ek0wIDU2aDQwdjRIMHYtNHptNjMtMjVhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xMCAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNTMgNDFhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xMCAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTAgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0zMCAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTI4LThhNSA1IDAgMCAwLTEwIDBoMTB6bTEwIDBhNSA1IDAgMCAxLTEwIDBoMTB6TTU2IDVhNSA1IDAgMCAwLTEwIDBoMTB6bTEwIDBhNSA1IDAgMCAxLTEwIDBoMTB6bS0zIDQ2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTAgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTIxIDBsNSAyMEgxNmw1LTIwem00MyA2NHYtNGgtNHY0aC00djRoNHY0aDR2LTRoNHYtNGgtNHpNMzYgMTNoNHY0aC00di00em00IDRoNHY0aC00di00em0tNCA0aDR2NGgtNHYtNHptOC04aDR2NGgtNHYtNHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjMWM1NztcclxuICBwYWRkaW5nOiAzZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAzNXB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MGIwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gIH1cclxuICBhcHAtY2FyZCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG4iLCIvKiBPdmVycmlkZXMgQnJvd3NlciBEZWZhdWx0cyAqL1xucCwgaDMsIGEsIHVsIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlZG9rYSBPbmVcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzUyNGIzZjtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkMmQ2O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2EgT25lXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MxYzU3O1xuICBwYWRkaW5nOiAzZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpO1xufVxuaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDM1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MGIwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gIH1cblxuICBhcHAtY2FyZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufSJdfQ== */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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

/***/ "./src/app/core/components/card/card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/card/card.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card__image {\n  width: 27vw;\n  height: 27vw;\n  vertical-align: middle;\n  border-radius: 10%;\n  border: 3.5px solid #ffffffa2;\n  padding: 5px;\n  background: #948b7a;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 20px;\n}\n\n.card__content {\n  display: block;\n  margin-top: 15px;\n}\n\n.card__title {\n  font-size: 5vw;\n  padding: 10px;\n  line-height: 3vw;\n  color: #323333;\n  margin-top: 0px;\n}\n\n.card__title:hover {\n  color: #f0f0f0;\n}\n\n.card__author {\n  font-size: 1.2em;\n  color: #524b3f;\n  text-transform: capitalize;\n  padding: 7px 10px 15px 10px;\n  line-height: 15px;\n}\n\n.card__author > a:hover {\n  color: white;\n}\n\n@media only screen and (min-width: 600px) {\n  .card img {\n    top: -45px;\n    width: 10vw;\n    height: 10vw;\n  }\n\n  .card__title {\n    font-size: 3vw;\n    padding-top: 25px;\n  }\n\n  .card__author a {\n    font-size: 2.1vw;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .card img {\n    top: -65px;\n    width: 10vw;\n    height: 10vw;\n  }\n\n  .card__title {\n    font-size: 2.3vw;\n    padding-top: 8px;\n  }\n\n  .card__author a {\n    font-size: 1.6vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhcmQvQzpcXFVzZXJzXFxNYXJ0aW5hXFxEb2N1bWVudHNcXFByb2dyYW1taW5nXFxNaXhlZFxcSGFja3RvYmVyRmVzdC1Bbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDQ0Y7O0VERUE7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUNDRjs7RURDQTtJQUNFLGdCQUFBO0VDRUY7QUFDRjs7QURDQTtFQUVFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDQUY7O0VER0E7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDQUY7O0VERUE7SUFDRSxnQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfX2ltYWdlIHtcclxuICB3aWR0aDogMjd2dztcclxuICBoZWlnaHQ6IDI3dnc7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYm9yZGVyOiAzLjVweCBzb2xpZCAjZmZmZmZmYTI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM5NDhiN2E7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAvKkV4dHJhICovXHJcbn1cclxuXHJcbi5jYXJkX19jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDN2dztcclxuICBjb2xvcjogcmdiKDUwLCA1MSwgNTEpO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmNhcmRfX3RpdGxlOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG59XHJcblxyXG4uY2FyZF9fYXV0aG9yIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiAjNTI0YjNmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4IDE1cHggMTBweDtcclxuICBsaW5lLWhlaWdodDogMTVweFxyXG59XHJcblxyXG4uY2FyZF9fYXV0aG9yPmE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSlcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5jYXJkIGltZyB7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAuY2FyZF9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzLjB2dztcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIH1cclxuICAuY2FyZF9fYXV0aG9yIGEge1xyXG4gICAgZm9udC1zaXplOiAyLjF2d1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG5cclxuICAuY2FyZCBpbWcge1xyXG4gICAgdG9wOiAtNjVweDtcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgLmNhcmRfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4zdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxuICAuY2FyZF9fYXV0aG9yIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjZ2d1xyXG4gIH1cclxufVxyXG4iLCIuY2FyZF9faW1hZ2Uge1xuICB3aWR0aDogMjd2dztcbiAgaGVpZ2h0OiAyN3Z3O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJvcmRlcjogMy41cHggc29saWQgI2ZmZmZmZmEyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM5NDhiN2E7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZF9fY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZF9fdGl0bGUge1xuICBmb250LXNpemU6IDV2dztcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDN2dztcbiAgY29sb3I6ICMzMjMzMzM7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNhcmRfX3RpdGxlOmhvdmVyIHtcbiAgY29sb3I6ICNmMGYwZjA7XG59XG5cbi5jYXJkX19hdXRob3Ige1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzUyNGIzZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDdweCAxMHB4IDE1cHggMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5jYXJkX19hdXRob3IgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkIGltZyB7XG4gICAgdG9wOiAtNDVweDtcbiAgICB3aWR0aDogMTB2dztcbiAgICBoZWlnaHQ6IDEwdnc7XG4gIH1cblxuICAuY2FyZF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICB9XG5cbiAgLmNhcmRfX2F1dGhvciBhIHtcbiAgICBmb250LXNpemU6IDIuMXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5jYXJkIGltZyB7XG4gICAgdG9wOiAtNjVweDtcbiAgICB3aWR0aDogMTB2dztcbiAgICBoZWlnaHQ6IDEwdnc7XG4gIH1cblxuICAuY2FyZF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4zdnc7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgfVxuXG4gIC5jYXJkX19hdXRob3IgYSB7XG4gICAgZm9udC1zaXplOiAxLjZ2dztcbiAgfVxufSJdfQ== */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/card/card.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/core/components/card/card.component.scss")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.component */ "./src/app/core/components/card/card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]; });





/***/ }),

/***/ "./src/app/core/containers/home-page/home-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/containers/home-page/home-page.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Flex Card Container */\n.container {\n  display: flex;\n  display: -moz-flex;\n  display: -webkit-flex;\n  -ms-box-orient: horizontal;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  line-height: 0;\n  flex-wrap: wrap;\n}\napp-card {\n  background: rgba(99, 205, 218, 0.5);\n  border-radius: 10px;\n  border: 1.5px solid #ffffffa2;\n  margin-top: 20px;\n  width: calc(100% * (1/2));\n  margin: 20px 10px;\n  transition-duration: 0.5s;\n}\napp-card:hover {\n  box-shadow: 10px 10px 36px 0px rgba(0, 0, 0, 0.75);\n  transform: scale(1.02);\n}\n@media only screen and (min-width: 600px) {\n  app-card {\n    width: calc(100% * (1 / 3));\n  }\n}\n@media only screen and (min-width: 900px) {\n  app-card {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb250YWluZXJzL2hvbWUtcGFnZS9DOlxcVXNlcnNcXE1hcnRpbmFcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmdcXE1peGVkXFxIYWNrdG9iZXJGZXN0LUFuZ3VsYXIvc3JjXFxhcHBcXGNvcmVcXGNvbnRhaW5lcnNcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbnRhaW5lcnMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx3QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUlBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0FDREY7QURJQTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDREY7QURHRTtFQUdFLGtEQUFBO0VBQ0Esc0JBQUE7QUNESjtBRE1BO0VBQ0U7SUFDRSwyQkFBQTtFQ0hGO0FBQ0Y7QURLQTtFQUVFO0lBQ0UsVUFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbnRhaW5lcnMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogRmxleCBDYXJkIENvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLW1zLWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmFwcC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMDUsIDIxOCwgLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmZmZmYTI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogY2FsYygxMDAlICogKDEvMikpO1xyXG4gIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgYXBwLWNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAqICgxIC8gMykpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcblxyXG4gIGFwcC1jYXJkIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG59XHJcbiIsIi8qIEZsZXggQ2FyZCBDb250YWluZXIgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgLW1zLWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5hcHAtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDIwNSwgMjE4LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmZmZmZmZhMjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAqICgxLzIpKTtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5hcHAtY2FyZDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGFwcC1jYXJkIHtcbiAgICB3aWR0aDogY2FsYygxMDAlICogKDEgLyAzKSk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgYXBwLWNhcmQge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn0iXX0= */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/containers/home-page/home-page.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/core/containers/home-page/home-page.component.scss")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/core/containers/home-page/home-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]; });





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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./src/app/shared/back-button/back-button.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/back-button/back-button.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.primary, a.button.primary {\n  font-size: 0.875rem;\n  line-height: 1.143rem;\n  padding: 14px 15px 13px;\n  color: White;\n  background-color: #004e9a;\n  outline: none;\n  border-radius: 3px;\n  border: 0px;\n  cursor: pointer;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JhY2stYnV0dG9uL0M6XFxVc2Vyc1xcTWFydGluYVxcRG9jdW1lbnRzXFxQcm9ncmFtbWluZ1xcTWl4ZWRcXEhhY2t0b2JlckZlc3QtQW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxiYWNrLWJ1dHRvblxcYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUVBLGtCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24sIGEuYnV0dG9uIHtcclxuICAmLnByaW1hcnkge1xyXG4gICAgLy8gZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE0M3JlbTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTVweCAxM3B4O1xyXG4gICAgY29sb3I6IFdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGU5YTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiYnV0dG9uLnByaW1hcnksIGEuYnV0dG9uLnByaW1hcnkge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4xNDNyZW07XG4gIHBhZGRpbmc6IDE0cHggMTVweCAxM3B4O1xuICBjb2xvcjogV2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRlOWE7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./back-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/back-button/back-button.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-button.component.scss */ "./src/app/shared/back-button/back-button.component.scss")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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
//# sourceMappingURL=main-es2015.js.map