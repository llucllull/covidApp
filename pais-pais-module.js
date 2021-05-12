(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pais-pais-module"],{

/***/ "/JBF":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pais/pais.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"#000000\" defaultHref=\"back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"pais\">{{pais[0].Country}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let p of pais\">\n    <ion-card-header>\n      <ion-card-title>{{p.Date}}</ion-card-title>\n    </ion-card-header>\n   \n    <ion-card-content>\n      <ion-label><b>Casos confirmats:</b> {{p.Confirmed}}</ion-label><br>\n      <ion-label><b>Morts confirmades:</b> {{p.Deaths}}</ion-label><br>\n      <ion-label><b>Recuperats confirmats:</b> {{p.Recovered}}</ion-label><br>\n      <ion-label><b>Actius confirmades:</b> {{p.Active}}</ion-label>\n    </ion-card-content>\n    \n  </ion-card>\n  <br>\n</ion-content>\n");

/***/ }),

/***/ "BVka":
/*!*********************************************!*\
  !*** ./src/app/pais/pais-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PaisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageRoutingModule", function() { return PaisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pais.page */ "eyOs");




const routes = [
    {
        path: '',
        component: _pais_page__WEBPACK_IMPORTED_MODULE_3__["PaisPage"]
    }
];
let PaisPageRoutingModule = class PaisPageRoutingModule {
};
PaisPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaisPageRoutingModule);



/***/ }),

/***/ "eyOs":
/*!***********************************!*\
  !*** ./src/app/pais/pais.page.ts ***!
  \***********************************/
/*! exports provided: PaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPage", function() { return PaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pais_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pais.page.html */ "/JBF");
/* harmony import */ var _pais_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pais.page.scss */ "y50+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dades.service */ "l0mX");






let PaisPage = class PaisPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
    }
    ngOnInit() {
        const title = this.activatedRoute.snapshot.paramMap.get('id');
        const decodedTitle = decodeURIComponent(title);
        this.api.getDadesPaisosCompletes(decodedTitle).subscribe((data) => {
            this.pais = data;
            this.pais = this.pais.reverse();
        });
    }
};
PaisPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] }
];
PaisPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pais',
        template: _raw_loader_pais_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pais_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaisPage);



/***/ }),

/***/ "y50+":
/*!*************************************!*\
  !*** ./src/app/pais/pais.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWlzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ySGY":
/*!*************************************!*\
  !*** ./src/app/pais/pais.module.ts ***!
  \*************************************/
/*! exports provided: PaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageModule", function() { return PaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pais_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pais-routing.module */ "BVka");
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pais.page */ "eyOs");







let PaisPageModule = class PaisPageModule {
};
PaisPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pais_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaisPageRoutingModule"]
        ],
        declarations: [_pais_page__WEBPACK_IMPORTED_MODULE_6__["PaisPage"]]
    })
], PaisPageModule);



/***/ })

}]);
//# sourceMappingURL=pais-pais-module.js.map