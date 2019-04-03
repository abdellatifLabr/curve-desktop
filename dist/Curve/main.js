(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<workspace></workspace>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_curve_ui_curve_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/curve-ui/curve-ui.module */ "./src/app/modules/curve-ui/curve-ui.module.ts");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/views.service */ "./src/app/services/views.service.ts");
/* harmony import */ var _services_dataset_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/dataset.service */ "./src/app/services/dataset.service.ts");
/* harmony import */ var _services_dataset_parser_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/dataset-parser.service */ "./src/app/services/dataset-parser.service.ts");
/* harmony import */ var _services_painter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/painter.service */ "./src/app/services/painter.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var _components_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/workspace/workspace.component */ "./src/app/components/workspace/workspace.component.ts");
/* harmony import */ var _components_control_control_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/control/control.component */ "./src/app/components/control/control.component.ts");
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/display/display.component */ "./src/app/components/display/display.component.ts");
/* harmony import */ var _components_dataset_control_dataset_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dataset-control/dataset-control.component */ "./src/app/components/dataset-control/dataset-control.component.ts");
/* harmony import */ var _elements_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./elements/modal/modal.component */ "./src/app/elements/modal/modal.component.ts");
/* harmony import */ var _elements_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./elements/dialog/dialog.component */ "./src/app/elements/dialog/dialog.component.ts");
/* harmony import */ var _components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/documentation/documentation.component */ "./src/app/components/documentation/documentation.component.ts");
/* harmony import */ var _elements_collapsable_collapsable_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./elements/collapsable/collapsable.component */ "./src/app/elements/collapsable/collapsable.component.ts");
/* harmony import */ var _elements_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./elements/inline-edit/inline-edit.component */ "./src/app/elements/inline-edit/inline-edit.component.ts");
/* harmony import */ var _elements_toast_toast_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./elements/toast/toast.component */ "./src/app/elements/toast/toast.component.ts");
/* harmony import */ var _pipes_no_underscore_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/no-underscore.pipe */ "./src/app/pipes/no-underscore.pipe.ts");
/* harmony import */ var _pipes_pluralize_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/pluralize.pipe */ "./src/app/pipes/pluralize.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _elements_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DialogComponent"],
                _elements_toast_toast_component__WEBPACK_IMPORTED_MODULE_23__["ToastComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_13__["SideMenuComponent"],
                _components_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_14__["WorkspaceComponent"],
                _components_control_control_component__WEBPACK_IMPORTED_MODULE_15__["ControlComponent"],
                _components_display_display_component__WEBPACK_IMPORTED_MODULE_16__["DisplayComponent"],
                _components_dataset_control_dataset_control_component__WEBPACK_IMPORTED_MODULE_17__["DatasetControlComponent"],
                _elements_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                _elements_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DialogComponent"],
                _components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_20__["DocumentationComponent"],
                _elements_collapsable_collapsable_component__WEBPACK_IMPORTED_MODULE_21__["CollapsableComponent"],
                _elements_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_22__["InlineEditComponent"],
                _elements_toast_toast_component__WEBPACK_IMPORTED_MODULE_23__["ToastComponent"],
                _pipes_no_underscore_pipe__WEBPACK_IMPORTED_MODULE_24__["NoUnderscore"],
                _pipes_pluralize_pipe__WEBPACK_IMPORTED_MODULE_25__["PluralizePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _modules_curve_ui_curve_ui_module__WEBPACK_IMPORTED_MODULE_3__["CurveUiModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__["DragAndDropModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_6__["NgxElectronModule"]
            ],
            providers: [
                _services_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"],
                _services_views_service__WEBPACK_IMPORTED_MODULE_8__["ViewsService"],
                _services_dataset_service__WEBPACK_IMPORTED_MODULE_9__["DatasetService"],
                _services_dataset_parser_service__WEBPACK_IMPORTED_MODULE_10__["DatasetParserService"],
                _services_painter_service__WEBPACK_IMPORTED_MODULE_11__["PainterService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/control/control.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/control/control.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel{\r\n    background: #fdfdfd;\r\n    width: 300px;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.panel .view-name{\r\n    border-bottom: 1px solid #ddd;\r\n    text-align: center;\r\n    padding: 9px;\r\n    font-size: 15px;\r\n    font-family: 'Roboto Medium';\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n.panel .toolbar{\r\n    background: #fafafa;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n.panel .toolbar .item{\r\n    flex-basis: 12.5%;\r\n    min-width: 12.5%;\r\n    max-width: 12.5%;\r\n    text-align: center;\r\n    padding: 9px;\r\n    color: #555;\r\n    cursor: pointer;\r\n    transition: background linear 0.1s 0s;\r\n}\r\n.panel .toolbar.border-top{\r\n    border-top: 1px solid #ddd;\r\n}\r\n.panel .toolbar.border-bottom{\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n.panel .toolbar .icon{\r\n    font-size: 17px;\r\n}\r\n.panel .toolbar .icon.disabled {\r\n    color: #ccc;\r\n}\r\n.panel .toolbar .icon.disabled:active{\r\n    background: none;\r\n}\r\n.panel .toolbar .icon:active{\r\n    background: #eaeaea;\r\n}\r\n.panel .toolbar .separator{\r\n    background: #ddd;\r\n    width: 1px;\r\n    height: 25px;\r\n    margin: 0px 9px;\r\n}\r\n.panel .toolbar .menu{\r\n    position: relative;\r\n}\r\n.panel .toolbar .menu .menu-list{\r\n    position: absolute;\r\n    background: #fff;\r\n    color: #000;\r\n    top: 100%;\r\n    left: 0px;\r\n    border-radius: 0px 0px 4px 4px;\r\n    border: 1px solid #ddd;\r\n    z-index: 99;\r\n}\r\n.panel .toolbar .menu .menu-list .menu-item{\r\n    text-align: left;\r\n    font-size: 13px;\r\n    padding: 5px 8px;\r\n    white-space: nowrap;\r\n}\r\n.panel .toolbar .menu .menu-list .menu-item:hover{\r\n    background: #ededed;\r\n}\r\n.panel .datasets{\r\n    padding: 15px;\r\n}\r\n.panel .datasets dataset-control /deep/ .dataset{\r\n    margin-bottom: 15px;\r\n}\r\n.panel .datasets dataset-control:last-child /deep/ .dataset{\r\n    margin-bottom: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/control/control.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/control/control.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\r\n  <div class=\"view-name\">{{ view.name }}</div>\r\n  <div class=\"toolbar border-bottom\" *ngIf=\"datasets && options\">\r\n    <div class=\"item icon\" (click)=\"draw()\"><i class=\"fas fa-paint-brush\"></i></div>\r\n    <div class=\"item icon\" [ngClass]=\"{ 'disabled': !isChanges }\" (click)=\"saveChanges()\">\r\n      <i class=\"fas fa-save\"></i>\r\n    </div>\r\n    <div class=\"item icon\" (click)=\"refresh()\"><i class=\"fas fa-redo-alt\"></i></div>\r\n    <div class=\"separator\"></div>\r\n    <div class=\"item icon\" (click)=\"helpModal = !helpModal\"><i class=\"fas fa-question\"></i></div>\r\n  </div>\r\n  <tabset>\r\n    <div class=\"tabs\">\r\n      <div class=\"tab\" tabHeader=\"1\" [isActive]=\"true\">\r\n        <div class=\"icon\"><i class=\"fas fa-chart-line\"></i></div>\r\n        <div class=\"text\">Datasets</div>\r\n      </div>\r\n      <div class=\"tab\" tabHeader=\"2\">\r\n        <div class=\"icon\"><i class=\"fas fa-palette\"></i></div>\r\n        <div class=\"text\">Appearence</div>\r\n      </div>\r\n      <div class=\"tab\" tabHeader=\"3\">\r\n        <div class=\"icon\"><i class=\"fas fa-cog\"></i></div>\r\n        <div class=\"text\">Settings</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"tab-content active\" tabContent=\"1\">\r\n        <div class=\"toolbar border-bottom border-top\">\r\n          <div class=\"item menu\" (click)=\"menu.hidden = !menu.hidden\">\r\n            <i class=\"fas fa-plus\"></i>\r\n            <div class=\"menu-list\" #menu hidden>\r\n              <div class=\"menu-item\" *ngFor=\"let type of types\" (click)=\"createNewDataset(type.id)\">\r\n                {{ type.name | noUnderscore | titlecase }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"separator\"></div>\r\n          <div class=\"item icon\" (click)=\"minimizeDatasetsCtrl = false\" *ngIf=\"minimizeDatasetsCtrl\">\r\n            <i class=\"fas fa-angle-double-down\"></i>\r\n          </div>\r\n          <div class=\"item icon\" (click)=\"minimizeDatasetsCtrl = true\" *ngIf=\"!minimizeDatasetsCtrl\">\r\n            <i class=\"fas fa-angle-double-up\"></i>\r\n          </div>\r\n          <div class=\"item menu\" (click)=\"filterMenu.hidden = !filterMenu.hidden\">\r\n            <i class=\"fas fa-filter\"></i>\r\n            <div class=\"menu-list\" #filterMenu hidden>\r\n              <div class=\"menu-item\" (click)=\"setFilter('*')\">All</div>\r\n              <div class=\"menu-item\" *ngFor=\"let type of types\" (click)=\"setFilter(type.name)\">\r\n                {{ type.name | noUnderscore | titlecase | pluralize }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"datasets\">\r\n          <dataset-control *ngFor=\"let dataset of datasets; let i = index;\" [minimized]=\"minimizeDatasetsCtrl\"\r\n            [(ngModel)]=\"datasets[i]\" (delete)=\"onDatasetDelete($event)\" [hidden]=\"!filterCheck(dataset)\"></dataset-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"tab-content\" tabContent=\"2\" *ngIf=\"options\">\r\n        <collapsable title=\"Scale\">\r\n          <form>\r\n            <div class=\"form\">\r\n              <div class=\"field-group\">\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"label left\">X</div>\r\n                    <input type=\"number\" name=\"scale_x_from\" [(ngModel)]=\"options.scale.x.from\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <div class=\"fas fa-arrow-right\"></div>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input\">\r\n                      <input type=\"number\" name=\"scale_x_to_value\" [(ngModel)]=\"options.scale.x.to.value\">\r\n                    </div>\r\n                    <div class=\"input\">\r\n                      <select [(ngModel)]=\"options.scale.x.to.unit\" name=\"scale_x_to_unit\">\r\n                        <option *ngFor=\"let unit of units\" [value]=\"unit\">{{ unit }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field-group\">\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"label left\">Y</div>\r\n                    <input type=\"number\" name=\"scale_y_from\" [(ngModel)]=\"options.scale.y.from\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <div class=\"fas fa-arrow-right\"></div>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input\">\r\n                      <input type=\"number\" name=\"scale_y_to_value\" [(ngModel)]=\"options.scale.y.to.value\">\r\n                    </div>\r\n                    <div class=\"input\">\r\n                      <select [(ngModel)]=\"options.scale.y.to.unit\" name=\"scale_y_to_unit\">\r\n                        <option *ngFor=\"let unit of units\" [value]=\"unit\">{{ unit }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </collapsable>\r\n        <collapsable title=\"Background\">\r\n          <color-picker label=\"Background\" name=\"BackColorPicker\" [(ngModel)]=\"options.background.color\">\r\n          </color-picker>\r\n        </collapsable>\r\n        <collapsable title=\"Padding\">\r\n          <form>\r\n            <div class=\"form\">\r\n              <div class=\"field-group\">\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"left icon\">\r\n                      <i class=\"fas fa-arrow-right\"></i>\r\n                    </div>\r\n                    <input type=\"number\" name=\"padding_left\" [(ngModel)]=\"options.padding.left\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"left icon\">\r\n                      <i class=\"fas fa-arrow-left\"></i>\r\n                    </div>\r\n                    <input type=\"number\" name=\"padding_right\" [(ngModel)]=\"options.padding.right\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field-group\">\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"left icon\">\r\n                      <i class=\"fas fa-arrow-up\"></i>\r\n                    </div>\r\n                    <input type=\"number\" name=\"padding_bottom\" [(ngModel)]=\"options.padding.bottom\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"left icon\">\r\n                      <i class=\"fas fa-arrow-down\"></i>\r\n                    </div>\r\n                    <input type=\"number\" name=\"padding_top\" [(ngModel)]=\"options.padding.top\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"input\">\r\n                  <div class=\"label left\">Unit</div>\r\n                  <select name=\"padding_unit\" [(ngModel)]=\"options.padding.unit\">\r\n                    <option *ngFor=\"let unit of units\" [value]=\"unit\">{{ unit }}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </collapsable>\r\n      </div>\r\n      <div class=\"tab-content\" tabContent=\"3\" *ngIf=\"options\">\r\n        <collapsable title=\"View\">\r\n          <form>\r\n            <div class=\"form\">\r\n              <div class=\"field\">\r\n                <div class=\"input\">\r\n                  <div class=\"left label\">Title</div>\r\n                  <input type=\"text\" name=\"view_title\" [(ngModel)]=\"options.view.title.text\">\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"checkbox\">\r\n                  <input type=\"checkbox\" id=\"my-checkbox-6\" name=\"show_title\" [(ngModel)]=\"options.view.title.show\">\r\n                  <label for=\"my-checkbox-6\"></label>\r\n                </div>\r\n                &nbsp; <label class=\"right\">Show Title</label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </collapsable>\r\n        <collapsable title=\"Legend\">\r\n          <form>\r\n            <div class=\"form\">\r\n              <div class=\"field\">\r\n                <div class=\"checkbox\">\r\n                  <input type=\"checkbox\" id=\"my-checkbox-5\" name=\"legend_show\" [(ngModel)]=\"options.legend.show\">\r\n                  <label for=\"my-checkbox-5\"></label>\r\n                </div>\r\n                &nbsp;<label class=\"right\">Show Legend</label>\r\n              </div>\r\n              <div class=\"field-group\">\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"label left\">\r\n                      <div class=\"text\">x</div>\r\n                    </div>\r\n                    <input type=\"number\" name=\"legend_pos_x\" [(ngModel)]=\"options.legend.position.x\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"field\">\r\n                  <div class=\"input\">\r\n                    <div class=\"label left\">\r\n                      <div class=\"text\">y</div>\r\n                    </div>\r\n                    <input type=\"number\" name=\"legend_pos_y\" [(ngModel)]=\"options.legend.position.y\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </collapsable>\r\n      </div>\r\n    </div>\r\n  </tabset>\r\n</div>\r\n\r\n<modal title=\"Help\" [show]=\"helpModal\" size=\"large\">\r\n  <app-documentation></app-documentation>\r\n</modal>\r\n"

/***/ }),

/***/ "./src/app/components/control/control.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/control/control.component.ts ***!
  \*********************************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlComponent = /** @class */ (function () {
    function ControlComponent(dsProvider, optionsProvider, unitsProvider, viewsProvider, dialogCtrl) {
        this.dsProvider = dsProvider;
        this.optionsProvider = optionsProvider;
        this.unitsProvider = unitsProvider;
        this.viewsProvider = viewsProvider;
        this.dialogCtrl = dialogCtrl;
        this.datasetsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.types = [];
        this.datasets = [];
        this.filter = '*';
        this.minimizeDatasetsCtrl = false;
        this.isChanges = false;
        this.firstChange = true;
    }
    ControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyBindings = [
            {
                key: 's',
                ctrl: true,
                action: function () { return _this.saveChanges(); }
            }
        ];
        document.addEventListener('keydown', function (event) {
            if (event.key === 's' && event.ctrlKey) {
                event.preventDefault();
            }
            var binding = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](_this.keyBindings, function (kbd) { return kbd.key === event.key && kbd.ctrl === event.ctrlKey; });
            if (binding) {
                binding.action();
            }
        });
        this.loadUnits();
        this.loadTypes();
    };
    ControlComponent.prototype.loadUnits = function () {
        var _this = this;
        this.unitsProvider.getUnits()
            .then(function (units) {
            var predefinedUnits = ['cm', 'mm'];
            var newUnits = units.map(function (unit) { return unit.dataValues; });
            _this.units = predefinedUnits.concat(newUnits);
        })
            .catch(console.log);
    };
    ControlComponent.prototype.ngOnChanges = function (changes) {
        this.firstChange = true;
        if (changes.view.currentValue) {
            this.loadView();
            this.loadTypes();
            this.loadUnits();
        }
    };
    ControlComponent.prototype.loadView = function () {
        var _this = this;
        this.viewsProvider.getViewById(this.view.id)
            .then(function (view) {
            _this.datasets = view.dataValues.datasets.map(function (ds) {
                return {
                    id: ds.dataValues.id,
                    viewId: ds.dataValues.viewId,
                    type: ds.dataValues.type.dataValues.name,
                    data: JSON.parse(ds.dataValues.json)
                };
            });
            _this.options = JSON.parse(view.option.dataValues.json);
            _this._options = view.option.dataValues;
            if (_this.options.view.title.text.length === 0) {
                _this.options.view.title.text = _this.view.name;
            }
            _this.draw();
        })
            .catch(console.log);
    };
    ControlComponent.prototype.refresh = function () {
        this.loadView();
    };
    ControlComponent.prototype.draw = function () {
        if (!this.firstChange) {
            this.isChanges = true;
        }
        this.datasetsEmitter.emit(this.datasets);
        this.optionsEmitter.emit(this.options);
        this.firstChange = false;
    };
    ControlComponent.prototype.loadTypes = function () {
        var _this = this;
        this.dsProvider.getAllTypes()
            .then(function (types) {
            _this.types = types.map(function (type) { return type.dataValues; });
        })
            .catch(console.log);
    };
    ControlComponent.prototype.createNewDataset = function (typeId) {
        var _this = this;
        var type = this.types.find(function (type) { return type.id == typeId; });
        var dataset = {
            viewId: this.view.id,
            typeId: typeId,
            json: type.placeholder
        };
        this.dsProvider.createDataset(dataset)
            .then(function (dataset) {
            _this.datasets.unshift({
                id: dataset.dataValues.id,
                viewId: dataset.dataValues.viewId,
                data: JSON.parse(dataset.dataValues.json),
                type: type.name
            });
        })
            .catch(console.log);
    };
    ControlComponent.prototype.deleteDataset = function (dataset) {
        var _this = this;
        this.dsProvider.deleteDataset(dataset.id)
            .then(function (id) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](_this.datasets, function (ds) { return ds.id === id; });
        })
            .catch(console.log);
    };
    ControlComponent.prototype.saveChanges = function () {
        var _this = this;
        var newDatasets = this.datasets.map(function (dataset) {
            return {
                id: dataset.id,
                viewId: _this.view.id,
                typeId: _this.types.find(function (type) { return type.name == dataset.type; }).id,
                json: JSON.stringify(dataset.data)
            };
        });
        this.dsProvider.updateDatasets(newDatasets)
            .then(function () { return _this.isChanges = false; });
        var newOptions = {
            id: this._options.id,
            viewId: this.view.id,
            json: JSON.stringify(this.options)
        };
        this.optionsProvider.updateOptions(newOptions);
    };
    ControlComponent.prototype.onDatasetDelete = function (dataset) {
        var _this = this;
        this.dialogCtrl.open({
            title: 'Delete Dataset',
            message: "Are you sure you want to delete '" + dataset.data.name + "'?",
            size: 'small',
            onApprove: function () { return _this.deleteDataset(dataset); },
            onDeny: function () { }
        });
    };
    ControlComponent.prototype.setFilter = function (type) {
        this.filter = type;
    };
    ControlComponent.prototype.filterCheck = function (dataset) {
        if (this.filter == '*') {
            return true;
        }
        else {
            return (dataset.type == this.filter) ? true : false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('datasets'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlComponent.prototype, "datasetsEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('options'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlComponent.prototype, "optionsEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ControlComponent.prototype, "view", void 0);
    ControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control',
            template: __webpack_require__(/*! ./control.component.html */ "./src/app/components/control/control.component.html"),
            styles: [__webpack_require__(/*! ./control.component.css */ "./src/app/components/control/control.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DatasetService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["OptionsService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UnitsService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["ViewsService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["DialogsService"]])
    ], ControlComponent);
    return ControlComponent;
}());



/***/ }),

/***/ "./src/app/components/dataset-control/dataset-control.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/dataset-control/dataset-control.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dataset {\r\n  background: #eaeaea;\r\n  border-radius: 4px;\r\n}\r\n\r\n.dataset .dataset-header {\r\n  display: flex;\r\n  border-bottom: 1px solid #fff;\r\n  background: rgb(64, 124, 214);\r\n  color: #fff;\r\n  border-radius: 4px 4px 0px 0px;\r\n  transition: background linear 0.1s 0s;\r\n  cursor: pointer;\r\n}\r\n\r\n.dataset-header div {\r\n  padding: 8px 0px 8px 8px;\r\n}\r\n\r\n.dataset-header div:last-child {\r\n  padding-right: 8px;\r\n}\r\n\r\n.dataset .dataset-header .text {\r\n  flex-grow: 1;\r\n  font-size: 13px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.dataset .dataset-header .icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-grow: 26px;\r\n  min-width: 26px;\r\n  cursor: pointer;\r\n  transition: background linear 0.1s 0s;\r\n  position: relative;\r\n  font-size: 14px;\r\n}\r\n\r\n.dataset .dataset-header .icon:active {\r\n  background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.dataset .dataset-header .icon .menu {\r\n  position: absolute;\r\n  background: #fff;\r\n  color: #000;\r\n  top: 100%;\r\n  left: 0px;\r\n  border-radius: 0px 0px 4px 4px;\r\n  border: 1px solid #ddd;\r\n  display: none;\r\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.dataset .dataset-header .icon.show-menu .menu {\r\n  display: block;\r\n}\r\n\r\n.dataset .dataset-header .icon .menu .menu-item {\r\n  padding: 5px 8px;\r\n  font-size: 13px;\r\n}\r\n\r\n.dataset .dataset-header .icon .menu .menu-item:hover {\r\n  background: #ededed;\r\n}\r\n\r\n.dataset .dataset-body {\r\n  padding: 8px;\r\n}\r\n\r\n.dataset.minimize .dataset-body {\r\n  height: 0px;\r\n  padding: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n.dataset.minimize .dataset-header {\r\n  border-radius: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dataset-control/dataset-control.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/dataset-control/dataset-control.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dataset\" [class.minimize]=\"minimized\" *ngIf=\"value.type == 'CURVE'\">\r\n  <div class=\"dataset-header\" [ngStyle]=\"{ 'background': (value.data.visible) ? value.data.color : '#aaa' }\">\r\n    <div class=\"icon\" (click)=\"minimized = !minimized\" *ngIf=\"!minimized\">\r\n      <i class=\"fas fa-angle-down\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"minimized = !minimized\" *ngIf=\"minimized\">\r\n      <i class=\"fas fa-angle-right\"></i>\r\n    </div>\r\n    <div class=\"text\" (click)=\"minimized = !minimized\">{{ value.data.name }}</div>\r\n    <div class=\"icon\" (click)=\"value.data.visible = !value.data.visible\" *ngIf=\"value.data.visible\">\r\n      <i class=\"fas fa-eye\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"value.data.visible = !value.data.visible\" *ngIf=\"!value.data.visible\">\r\n      <i class=\"fas fa-eye-slash\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"onDelete()\">\r\n      <i class=\"fas fa-eraser\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"dataset-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form\">\r\n        <div class=\"field-group\">\r\n          <div class=\"field wide\">\r\n            <input type=\"text\" name=\"dsName\" [(ngModel)]=\"value.data.name\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <color-picker name=\"lineColor\" [(ngModel)]=\"value.data.color\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\"></color-picker>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"input\">\r\n            <div class=\"label left\">\r\n              <div class=\"text\">X</div>\r\n            </div>\r\n            <input type=\"text\" name=\"dsXInput\" [(ngModel)]=\"value.data.input.x\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"input\">\r\n            <div class=\"label left\">\r\n              <div class=\"text\">Y</div>\r\n            </div>\r\n            <input type=\"text\" name=\"dsYInput\" [(ngModel)]=\"value.data.input.y\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"input\">\r\n            <div class=\"label left\">Line Style</div>\r\n            <select [(ngModel)]=\"value.data.lineStyle\" name=\"lineStyle\">\r\n              <option value=\"default\">Default</option>\r\n              <option value=\"dashed\">Dashed</option>\r\n              <option value=\"dotted\">Dotted</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"dataset\" [class.minimize]=\"minimized\" *ngIf=\"value.type == 'POINT_MARK'\">\r\n  <div class=\"dataset-header\" [ngStyle]=\"{ 'background': (value.data.visible) ? value.data.color : '#aaa' }\">\r\n    <div class=\"icon\" (click)=\"minimized = !minimized\" *ngIf=\"!minimized\">\r\n      <i class=\"fas fa-angle-down\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"minimized = !minimized\" *ngIf=\"minimized\">\r\n      <i class=\"fas fa-angle-right\"></i>\r\n    </div>\r\n    <div class=\"text\" (click)=\"minimized = !minimized\">{{ value.data.name }}</div>\r\n    <div class=\"icon\" (click)=\"value.data.visible = !value.data.visible\" *ngIf=\"value.data.visible\">\r\n      <i class=\"fas fa-eye\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"value.data.visible = !value.data.visible\" *ngIf=\"!value.data.visible\">\r\n      <i class=\"fas fa-eye-slash\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"onDelete()\">\r\n      <i class=\"fas fa-eraser\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"dataset-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form\">\r\n        <div class=\"field-group\">\r\n          <div class=\"field wide\">\r\n            <input type=\"text\" name=\"dsName\" [(ngModel)]=\"value.data.name\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <color-picker name=\"lineColor\" [(ngModel)]=\"value.data.color\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\"></color-picker>\r\n          </div>\r\n        </div>\r\n        <div class=\"field-group\">\r\n          <div class=\"field\">\r\n            <div class=\"input\">\r\n              <div class=\"label left\">\r\n                <div class=\"text\">x</div>\r\n              </div>\r\n              <input type=\"number\" name=\"dsXPoint\" [(ngModel)]=\"value.data.x\" (input)=\"onChange(value)\"\r\n                (blur)=\"onTouched()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"input\">\r\n              <div class=\"label left\">\r\n                <div class=\"text\">y</div>\r\n              </div>\r\n              <input type=\"text\" name=\"dsYPoint\" [(ngModel)]=\"value.data.y\" (input)=\"onChange(value)\"\r\n                (blur)=\"onTouched()\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"dataset\" [class.minimize]=\"minimized\" *ngIf=\"value.type == 'GRID'\">\r\n  <div class=\"dataset-header\" [ngStyle]=\"{ 'background': value.data.color }\">\r\n    <div class=\"icon\" (click)=\"minimized = !minimized\" *ngIf=\"!minimized\">\r\n      <i class=\"fas fa-angle-down\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"minimized = !minimized\" *ngIf=\"minimized\">\r\n      <i class=\"fas fa-angle-right\"></i>\r\n    </div>\r\n    <div class=\"text\" (click)=\"minimized = !minimized\">{{ value.data.name }}</div>\r\n    <div class=\"icon\" (click)=\"onDelete()\">\r\n      <i class=\"fas fa-eraser\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"dataset-body\">\r\n    <form autocomplete=\"off\">\r\n      <div class=\"form\">\r\n        <div class=\"field-group\">\r\n          <div class=\"field wide\">\r\n            <input type=\"text\" name=\"gridName\" [(ngModel)]=\"value.data.name\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <color-picker name=\"gridColor\" [(ngModel)]=\"value.data.color\" (input)=\"onChange(value)\"\r\n              (blur)=\"onTouched()\"></color-picker>\r\n          </div>\r\n        </div>\r\n        <div class=\"field-group\">\r\n          <div class=\"field wide\">\r\n            <div class=\"input\">\r\n              <div class=\"label left\">1/</div>\r\n              <input type=\"text\" name=\"unitMultiply\" [(ngModel)]=\"value.data.unitMultiply\" (input)=\"onChange(value)\"\r\n                (blur)=\"onTouched()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"checkbox\">\r\n              <input type=\"checkbox\" id=\"my-checkbox-{{ value.data.unitMultiply }}\" name=\"grid_x\" [(ngModel)]=\"value.data.x\" (input)=\"onChange(value)\"\r\n                (blur)=\"onTouched()\">\r\n              <label for=\"my-checkbox-{{ value.data.unitMultiply }}\"></label>\r\n            </div>\r\n            &nbsp; <label class=\"right\">X</label>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"checkbox\">\r\n              <input type=\"checkbox\" id=\"my-checkbox-{{ value.data.unitMultiply }}-2\" name=\"grid_y\" [(ngModel)]=\"value.data.y\"\r\n                (input)=\"onChange(value)\" (blur)=\"onTouched()\">\r\n              <label for=\"my-checkbox-{{ value.data.unitMultiply }}-2\"></label>\r\n            </div>\r\n            &nbsp; <label class=\"right\">Y</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dataset-control/dataset-control.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dataset-control/dataset-control.component.ts ***!
  \*************************************************************************/
/*! exports provided: DatasetControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetControlComponent", function() { return DatasetControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetControlComponent = /** @class */ (function () {
    function DatasetControlComponent() {
        this.minimized = false;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DatasetControlComponent_1 = DatasetControlComponent;
    DatasetControlComponent.prototype.ngOnInit = function () {
    };
    DatasetControlComponent.prototype.onDelete = function () {
        this.delete.emit(this.value);
    };
    DatasetControlComponent.prototype.writeValue = function (value) {
        this.value = (value) ? value : { input: {} };
    };
    DatasetControlComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatasetControlComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    var DatasetControlComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DatasetControlComponent.prototype, "minimized", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DatasetControlComponent.prototype, "delete", void 0);
    DatasetControlComponent = DatasetControlComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dataset-control',
            template: __webpack_require__(/*! ./dataset-control.component.html */ "./src/app/components/dataset-control/dataset-control.component.html"),
            styles: [__webpack_require__(/*! ./dataset-control.component.css */ "./src/app/components/dataset-control/dataset-control.component.css")],
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: DatasetControlComponent_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], DatasetControlComponent);
    return DatasetControlComponent;
}());



/***/ }),

/***/ "./src/app/components/display/display.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/display/display.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n.container {\r\n    flex-grow: 1;\r\n    overflow: scroll;\r\n}\r\n.canvas-container {\r\n    width: 10000px;\r\n    height: 10000px;\r\n}\r\ncanvas {\r\n    margin: 30px auto;\r\n    border: 1px solid #aaa;\r\n}\r\n.toolbar-container {\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    position: relative;\r\n}\r\n.toolbar {\r\n    padding: 10px;\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.toolbar .item {\r\n    padding: 8px 16px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    margin-right: 5px;\r\n}\r\n.toolbar .item:hover{\r\n    background: rgba(0, 0, 0, 0.7);\r\n}\r\n.toolbar .item.disabled {\r\n    color: #aaa;\r\n    background: none;\r\n}\r\n.container .toolbar .item:last-child {\r\n    margin-right: 0px;\r\n}\r\n.toolbar .item.disabled:active{\r\n    background: none;\r\n}\r\n.toolbar .item:active{\r\n    background: rgba(0, 0, 0, 0.8);\r\n}\r\n.toolbar .item.active{\r\n    background: rgba(0, 0, 0, 0.8);\r\n}\r\n.toolbar .button{\r\n    font-family: 'Roboto Medium';\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n.toolbar .separator{\r\n    background: #888;\r\n    width: 1px;\r\n    height: 22px;\r\n    padding: 0px;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n}\r\n.point-indicator{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(255, 255, 255, 0.8);\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);\r\n}\r\n.point-indicator .item {\r\n    display: flex;\r\n}\r\n.point-indicator .item .prop{\r\n    text-align: left;\r\n    font-family: 'Roboto Medium';\r\n    color: blue;\r\n}\r\n.point-indicator .item .val{\r\n    text-align: left;\r\n    padding-left: 6px;\r\n    flex-grow: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/display/display.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/display/display.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle]=\"{ 'cursor': states[state].cursor }\">\r\n  <div class=\"canvas-container\">\r\n    <canvas #mainCanvas mwlDraggable \r\n      [dragAxis]=\"{ x: state == 'move', y: state == 'move' }\"\r\n      (dragEnd)=\"onDragEnd($event)\"\r\n      (mousemove)=\"onMouseMovingInsideCanvas($event)\" \r\n      (mouseleave)=\"onMouseLeftCanvas()\"\r\n      [ngStyle]=\"{\r\n        'transform': 'scale('+ zoom.value +', '+ zoom.value +') translate('+position.x+'px, '+position.y+'px)'\r\n      }\">\r\n    </canvas>\r\n  </div>\r\n  <div class=\"point-indicator\" [ngStyle]=\"{ 'transform': 'translate('+indicator.pos.x+'px, '+indicator.pos.y+'px)',\r\n                'display': ((state == 'default') && isMouseInCanvas) ? 'block' : 'none'}\">\r\n    <div class=\"item\" *ngFor=\"let item of indicator.data\">\r\n      <div class=\"prop\">{{ item.prop }}:</div>\r\n      <div class=\"val\">{{ item.val }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"toolbar-container\">\r\n  <div class=\"toolbar\">\r\n    <div class=\"item icon\" (click)=\"setState('move')\" [class.active]=\"state == 'move'\">\r\n      <i class=\"fas fa-arrows-alt\"></i>\r\n    </div>\r\n    <div class=\"item icon\" (click)=\"setState('default')\" [class.active]=\"state == 'default'\">\r\n      <i class=\"fas fa-crosshairs\"></i>\r\n    </div>\r\n    <div class=\"item separator\"></div>\r\n    <div class=\"item icon\" (click)=\"zoomIn()\" [class.disabled]=\"zoom.value >= zoom.max\">\r\n      <i class=\"fas fa-search-plus\"></i>\r\n    </div>\r\n    <div class=\"button item\" (click)=\"resetZoom()\" [class.disabled]=\"zoom.value == 1\">\r\n      100%\r\n    </div>\r\n    <div class=\"item icon\" (click)=\"zoomOut()\" [class.disabled]=\"zoom.value <= zoom.min\">\r\n      <i class=\"fas fa-search-minus\"></i>\r\n    </div>\r\n    <div class=\"separator item\"></div>\r\n    <div class=\"item icon\" *ngIf=\"!expandedView\" (click)=\"toggleExpand()\">\r\n      <i class=\"fas fa-expand\"></i>\r\n    </div>\r\n    <div class=\"item icon\" *ngIf=\"expandedView\" (click)=\"toggleExpand()\">\r\n      <i class=\"fas fa-compress\"></i>\r\n    </div>\r\n    <div class=\"item separator\"></div>\r\n    <div class=\"item icon\" (click)=\"downloadModal = !downloadModal\">\r\n      <i class=\"fas fa-download\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<modal title=\"Download View\" [show]=\"downloadModal\" size=\"small\">\r\n  <button class=\"primary large block\" (click)=\"onDownload()\">PNG</button>\r\n</modal>\r\n"

/***/ }),

/***/ "./src/app/components/display/display.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/display/display.component.ts ***!
  \*********************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(painter, unitsProvider) {
        this.painter = painter;
        this.unitsProvider = unitsProvider;
        this.expand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.units = [];
        this.expandedView = false;
        this.downloadModal = false;
        this.state = 'default';
        this.indicator = { pos: { x: 0, y: 0 }, data: [] };
        this.isMouseInCanvas = false;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.states = {
            'default': {
                cursor: 'crosshair'
            },
            'move': {
                cursor: 'move'
            }
        };
        this.keyBindings = [
            {
                key: '+',
                ctrl: false,
                action: function () { return _this.zoomIn(); }
            },
            {
                key: '-',
                ctrl: false,
                action: function () { return _this.zoomOut(); }
            },
            {
                key: '0',
                ctrl: false,
                action: function () { return _this.resetZoom(); }
            }
        ];
        document.addEventListener('keyup', function (event) {
            event.preventDefault();
            if (!(document.activeElement instanceof HTMLInputElement)) {
                var binding = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](_this.keyBindings, function (kbd) { return kbd.key == event.key && kbd.ctrl == event.ctrlKey; });
                if (binding) {
                    binding.action();
                }
            }
        });
        this.zoom = { value: 1, unit: 0.25, max: 5, min: 0.25 };
        this.position = { x: 0, y: 0 };
        this.loadUnits();
    };
    DisplayComponent.prototype.loadUnits = function () {
        var _this = this;
        this.unitsProvider.getUnits()
            .then(function (units) {
            _this.units = units.map(function (unit) { return unit.dataValues; });
        })
            .catch(console.log);
    };
    DisplayComponent.prototype.ngAfterViewInit = function () {
        this.mainCanvasElement = this.mainCanvas.nativeElement;
        this.mainCanvasElement.scrollIntoView({ block: 'end' });
    };
    DisplayComponent.prototype.ngOnChanges = function (changes) {
        this.Draw();
    };
    DisplayComponent.prototype.Draw = function () {
        if (this.mainCanvasElement) {
            this.painter.prepare(this.mainCanvasElement, this.data, this.options, this.units);
            this.painter.paint();
        }
    };
    DisplayComponent.prototype.zoomIn = function () {
        if (this.zoom.value <= this.zoom.max) {
            this.zoom.value += this.zoom.unit;
        }
    };
    DisplayComponent.prototype.zoomOut = function () {
        if (this.zoom.value >= this.zoom.min) {
            this.zoom.value -= this.zoom.unit;
        }
    };
    DisplayComponent.prototype.resetZoom = function () {
        this.zoom.value = 1;
    };
    DisplayComponent.prototype.onDragEnd = function (event) {
        this.position.x += event.x / this.zoom.value;
        this.position.y += event.y / this.zoom.value;
    };
    DisplayComponent.prototype.toggleExpand = function () {
        this.expandedView = !this.expandedView;
        this.expand.emit(this.expandedView);
    };
    DisplayComponent.prototype.onDownload = function () {
        var lnk = document.createElement('a');
        lnk.download = "view.jpg";
        lnk.href = this.mainCanvasElement.toDataURL('image/png;base64');
        lnk.click();
        this.downloadModal = false;
    };
    DisplayComponent.prototype.setState = function (state) {
        this.state = state;
    };
    DisplayComponent.prototype.onMouseMovingInsideCanvas = function (event) {
        this.isMouseInCanvas = true;
        var px_x = (event.layerX - this.painter.offset.x - this.position.x);
        var px_y = -(event.layerY - this.painter.offset.y - this.position.y);
        var x = (px_x * this.options.scale.x.from / this.painter._scale.x.to).toFixed(1);
        var y = (px_y * this.options.scale.y.from / this.painter._scale.y.to).toFixed(1);
        this.indicator = {
            pos: {
                x: event.clientX + 5,
                y: event.clientY + 5
            },
            data: [
                {
                    prop: 'x',
                    val: x.toString()
                },
                {
                    prop: 'y',
                    val: y.toString()
                }
            ]
        };
    };
    DisplayComponent.prototype.onMouseLeftCanvas = function () {
        this.isMouseInCanvas = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DisplayComponent.prototype, "mainCanvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DisplayComponent.prototype, "expand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayComponent.prototype, "options", void 0);
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/components/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/components/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["PainterService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UnitsService"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/documentation/documentation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/documentation/documentation.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/documentation/documentation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/documentation/documentation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset>\r\n  <div class=\"tabs\">\r\n    <div class=\"tab\" tabHeader=\"funcs\" [isActive]=\"true\">\r\n      <div class=\"text\">Functions</div>\r\n    </div>\r\n    <div class=\"tab\" tabHeader=\"units\">\r\n      <div class=\"text\">Units</div>\r\n    </div>\r\n    <div class=\"tab\" tabHeader=\"prefixes\">\r\n      <div class=\"text\">Prefixes</div>\r\n    </div>\r\n    <div class=\"tab\" tabHeader=\"constants\">\r\n      <div class=\"text\">Universal Constants</div>\r\n    </div>\r\n    <div class=\"tab\" tabHeader=\"adopted_values\">\r\n      <div class=\"text\">Adopted Values</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"tab-content active padding\" tabContent=\"funcs\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Description</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let func of docs.functions\">\r\n            <td>{{ func.name }}</td>\r\n            <td>{{ func.desc }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"tab-content padding\" tabContent=\"units\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Base</th>\r\n            <th>Unit</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let unit of docs.units\">\r\n            <td>{{ unit.base }}</td>\r\n            <td>{{ unit.unit }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"tab-content padding\" tabContent=\"prefixes\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Abbreviation</th>\r\n            <th>Value</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pre of [].concat.apply([], docs.prefixes)\">\r\n            <td>{{ pre.name }}</td>\r\n            <td>{{ pre.abbreviation }}</td>\r\n            <td>{{ pre.value }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"tab-content padding\" tabContent=\"constants\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Symbol</th>\r\n            <th>Value</th>\r\n            <th>Unit</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let uc of [].concat.apply([], docs.universal_constants)\">\r\n            <td>{{ uc.name }}</td>\r\n            <td>{{ uc.symbol }}</td>\r\n            <td>{{ uc.value }}</td>\r\n            <td>{{ uc.unit }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"tab-content padding\" tabContent=\"adopted_values\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Symbol</th>\r\n            <th>Value</th>\r\n            <th>Unit</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let av of docs.adopted_values\">\r\n            <td>{{ av.name }}</td>\r\n            <td>{{ av.symbol }}</td>\r\n            <td>{{ av.value }}</td>\r\n            <td>{{ av.unit }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</tabset>"

/***/ }),

/***/ "./src/app/components/documentation/documentation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/documentation/documentation.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _store_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/docs */ "./src/app/store/docs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent(http) {
        this.http = http;
        this.docs = {};
    }
    DocumentationComponent.prototype.ngOnInit = function () {
        this.docs = _store_docs__WEBPACK_IMPORTED_MODULE_2__["docs"];
    };
    DocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/components/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.css */ "./src/app/components/documentation/documentation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-open {\r\n  background: #303236;\r\n  color: #eee;\r\n  font-size: 17px;\r\n  padding: 5px 8px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: fixed;\r\n  left: 5px;\r\n  top: 5px;\r\n  z-index: 98;\r\n}\r\n\r\n.menu {\r\n  background: #303236;\r\n  width: 275px;\r\n}\r\n\r\n.menu .container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n}\r\n\r\n.menu .container .logo{\r\n  padding: 40px;\r\n  flex-basis: calc(100%/3);\r\n}\r\n\r\n.menu .container .logo img{\r\n  width: 100%;\r\n}\r\n\r\n.menu .container .bar {\r\n  border-bottom: 1px solid #434343;\r\n  display: flex;\r\n  flex-basis: 45px;\r\n  min-height: 45px;\r\n}\r\n\r\n.menu .container .bar .icon {\r\n  padding: 15px;\r\n  flex-basis: 15%;\r\n  color: #888;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu .container .bar .icon:hover {\r\n  color: #dedede;\r\n}\r\n\r\n.menu .container .bar .text {\r\n  color: #888;\r\n  font-family: 'Roboto Medium';\r\n  font-size: 16px;\r\n  text-align: center;\r\n  flex-grow: 1;\r\n  word-wrap: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu .container .bar .offset {\r\n  padding: 10px;\r\n  flex-basis: 20%;\r\n}\r\n\r\n.menu .container .content {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu .container .content .section {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu .container .content .section.viewsSection {\r\n  flex-grow: 1;\r\n}\r\n\r\n.menu .container .content .section .header {\r\n  background: #222;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu .container .content .section .header .text {\r\n  color: #aaa;\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-family: 'Roboto Bold';\r\n  letter-spacing: 1px;\r\n  flex-grow: 1;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.menu .container .content .section .header .icon {\r\n  color: #aaa;\r\n  font-size: 14px;\r\n  padding: 8px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu .container .content .section .body {\r\n  overflow-y: auto;\r\n  flex-grow: 1;\r\n}\r\n\r\n.menu .container .content .section .body .actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: 1px solid #434343;\r\n}\r\n\r\n.menu .container .content .section .body .actions .icon {\r\n  padding: 8px;\r\n  color: #aaa;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu .container .content .section .body .actions .icon:hover {\r\n  color: #555;\r\n}\r\n\r\n.menu .container .list {\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.menu .container .list .list-item {\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu .container .list .list-item:hover {\r\n  background: #232323;\r\n}\r\n\r\n.menu .container .list .list-item.active {\r\n  background: #0e6eb8;\r\n}\r\n\r\n.menu .container .list .list-item:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.menu .container .list .list-item .options {\r\n  display: flex;\r\n}\r\n\r\n.menu .container .list .list-item .options .icon {\r\n  padding: 8px 10px;\r\n  font-size: 13px;\r\n  color: #777;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu .container .list .list-item.active .options .icon {\r\n  color: #fff;\r\n}\r\n\r\n.menu .container .list .list-item .options .icon:hover {\r\n  color: #eaeaea;\r\n}\r\n\r\n.menu .container .list .list-item .name {\r\n  text-align: left;\r\n  padding: 8px 10px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.menu .container .list .list-item .name input[type=\"text\"] {\r\n  font-size: 13px;\r\n  border: none;\r\n  background: none;\r\n  color: #aaa;\r\n  width: inherit;\r\n  transition: background linear 0.1s 0s;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n.menu .container .list .list-item .name input[type=\"text\"]:focus {\r\n  background: #3c3c3c;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.menu .container .list .list-item .name input[type=\"text\"].active {\r\n  cursor: text;\r\n}\r\n\r\n.menu .container .list .list-item.active .name input[type=\"text\"] {\r\n  color: #fff;\r\n}\r\n\r\n.new-view-form {\r\n  background: #303236;\r\n  border-radius: 2px;\r\n  display: flex;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.new-view-form .form {\r\n  padding: 8px 10px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.new-view-form .form input {\r\n  background: #222;\r\n  padding: 8px 10px;\r\n  border: none;\r\n  color: #fff;\r\n  width: 100%;\r\n  transition: background linear 0.1s 0s;\r\n}\r\n\r\n.new-view-form .form input::-webkit-input-placeholder {\r\n  color: #666;\r\n}\r\n\r\n.new-view-form .form input::-ms-input-placeholder {\r\n  color: #666;\r\n}\r\n\r\n.new-view-form .form input::placeholder {\r\n  color: #666;\r\n}\r\n\r\n.new-view-form .form input:focus {\r\n  background: #1c1c1c;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.new-view-form .options {\r\n  display: flex;\r\n}\r\n\r\n.new-view-form .options .icon {\r\n  padding: 8px 10px;\r\n  padding-left: 0px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  color: #888;\r\n}\r\n\r\n.new-view-form .options .icon:hover {\r\n  color: #eaeaea;\r\n}\r\n\r\n.menu .container nav {\r\n  font-family: 'Roboto Bold';\r\n  text-transform: uppercase;\r\n  letter-spacing: 1.5px;\r\n  font-size: 13px;\r\n  text-align: center;\r\n}\r\n\r\n.menu .container nav ul {\r\n  padding: 20px 0px;\r\n  text-align: left;\r\n  display: inline-block;\r\n  list-style: none;\r\n}\r\n\r\n.menu .container nav ul li {\r\n  margin-bottom: 20px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.menu .container nav ul li:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.menu .container nav ul li a:link {\r\n  color: #aaa;\r\n  text-decoration: none;\r\n  transition: color linear 0.05s 0s;\r\n}\r\n\r\n.menu .container nav ul li a:active {\r\n  color: #aaa;\r\n  text-decoration: none;\r\n}\r\n\r\n.menu .container nav ul li a:visited {\r\n  color: #aaa;\r\n  text-decoration: none;\r\n}\r\n\r\n.menu .container nav ul li a:hover {\r\n  color: #eee;\r\n  text-decoration: none;\r\n}\r\n\r\n.menu .container nav ul li.active a {\r\n  color: #eee;\r\n}\r\n\r\n.empty-message {\r\n  color: #aaa;\r\n  padding: 8px;\r\n  font-size: 13px;\r\n}"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-open\" [hidden]=\"!menu.hidden\" (click)=\"menu.hidden = false\">\r\n  <i class=\"fas fa-bars\"></i>\r\n</div>\r\n<div class=\"menu\" #menu>\r\n  <div class=\"container\">\r\n    <div class=\"content\">\r\n      <div class=\"section\">\r\n        <div class=\"header\">\r\n          <div class=\"text\">Projects</div>\r\n          <div class=\"icon\" (click)=\"toggleNewProjectModal()\">\r\n              <i class=\"fas fa-plus\"></i>\r\n            </div>\r\n          <div class=\"icon\" (click)=\"import.click()\">\r\n            <i class=\"fas fa-folder-open\"></i>\r\n            <input type=\"file\" name=\"project_import\" #import hidden (change)=\"onProjectImport($event)\" accept=\".project.crv\">\r\n          </div>\r\n          <div class=\"icon\" (click)=\"projectsSection.hidden = !projectsSection.hidden\" *ngIf=\"!projectsSection.hidden\">\r\n            <i class=\"fas fa-angle-down\"></i>\r\n          </div>\r\n          <div class=\"icon\" (click)=\"projectsSection.hidden = !projectsSection.hidden\" *ngIf=\"projectsSection.hidden\">\r\n            <i class=\"fas fa-angle-left\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"body\" #projectsSection>\r\n            <div class=\"list\">\r\n                <span class=\"empty-message\" *ngIf=\"projects.length == 0\">Click + to create a new project.</span>\r\n                <div class=\"list-item\" [class.active]=\"isActiveProject(project)\" *ngFor=\"let project of projects\"\r\n                  (click)=\"setActiveProject(project)\">\r\n                  <div class=\"name\">\r\n                    <inline-edit \r\n                      [type]=\"text\" \r\n                      [(ngModel)]=\"project.title\" \r\n                      [disabled]=\"!isActiveProject(project)\"\r\n                      (done)=\"editProject(project)\" \r\n                      [style]=\"{\r\n                        'text-align': 'left',\r\n                        'color': (isActiveProject(project)) ? '#fff' : '#aaa'\r\n                      }\" \r\n                      [focusStyle]=\"{\r\n                        'background': '#3c3c3c',\r\n                        'text-align': 'left',\r\n                        'color': '#fff'\r\n                      }\"></inline-edit>\r\n                  </div>\r\n                  <div class=\"options\" *ngIf=\"isActiveProject(project)\">\r\n                    <div class=\"icon\" (click)=\"onProjectDelete(project)\"><i class=\"fas fa-trash\"></i></div>\r\n                    <div class=\"icon\" (click)=\"exportProject(project)\"><i class=\"fas fa-file-download\"></i></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section viewsSection\">\r\n        <div class=\"header\">\r\n          <div class=\"text\">Views</div>\r\n          <div class=\"icon\" (click)=\"viewsSection.hidden = !viewsSection.hidden\" *ngIf=\"!viewsSection.hidden\">\r\n            <i class=\"fas fa-angle-down\"></i>\r\n          </div>\r\n          <div class=\"icon\" (click)=\"viewsSection.hidden = !viewsSection.hidden\" *ngIf=\"viewsSection.hidden\">\r\n            <i class=\"fas fa-angle-left\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"body\" #viewsSection>\r\n          <div class=\"list\">\r\n            <span class=\"empty-message\" *ngIf=\"project && views.length == 0\">No views created for this project.</span>\r\n            <div class=\"list-item\" [class.active]=\"isActiveView(view)\" *ngFor=\"let view of views\"\r\n              (click)=\"setActiveView(view)\">\r\n              <div class=\"name\">\r\n                <inline-edit \r\n                  [type]=\"text\" \r\n                  [(ngModel)]=\"view.name\" \r\n                  [disabled]=\"!isActiveView(view)\"\r\n                  (done)=\"editView(view)\" \r\n                  [style]=\"{\r\n                    'text-align': 'left',\r\n                    'color': (isActiveView(view)) ? '#fff' : '#aaa'\r\n                  }\" \r\n                  [focusStyle]=\"{\r\n                    'background': '#3c3c3c',\r\n                    'text-align': 'left',\r\n                    'color': '#fff'\r\n                  }\"></inline-edit>\r\n              </div>\r\n              <div class=\"options\" *ngIf=\"isActiveView(view)\">\r\n                <div class=\"icon\" (click)=\"onViewDelete(view)\"><i class=\"fas fa-trash\"></i></div>\r\n                <div class=\"icon\" (click)=\"exportView(view)\"><i class=\"fas fa-file-download\"></i></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"new-view-form\">\r\n      <div class=\"form\">\r\n        <form autocomplete=\"off\" (submit)=\"(newView.name.length > 0) ? createView() : null\">\r\n          <div class=\"field\">\r\n            <input type=\"text\" name=\"newViewName\" [disabled]=\"projects.length == 0\" [(ngModel)]=\"newView.name\" placeholder=\"+ New View\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"options\">\r\n        <div class=\"icon\" (click)=\"importViewInput.click()\">\r\n          <i class=\"fas fa-folder-open\"></i>\r\n          <input type=\"file\" [disabled]=\"projects.length == 0\" name=\"export_view\" accept=\".view.crv\" (change)=\"onImportView($event)\" hidden\r\n            #importViewInput>\r\n        </div>\r\n        <div class=\"icon\" (click)=\"menu.hidden = true\"><i class=\"fas fa-times\"></i></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<modal title=\"Create New Project\" [show]=\"newProjectModal\">\r\n    <form (submit)=\"(newProject.title.length > 0) ? createNewProject() : null\" autocomplete=\"off\">\r\n      <div class=\"form\">\r\n        <div class=\"field\">\r\n          <div class=\"input large\">\r\n            <input type=\"text\" name=\"projectTitle\" [(ngModel)]=\"newProject.title\" placeholder=\"Title\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field right\">\r\n          <div class=\"btn-group\">\r\n            <button type=\"submit\" class=\"large success\">Create</button>\r\n            <button type=\"button\" class=\"large default\" (click)=\"toggleNewProjectModal()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </modal>"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(viewsProvider, dialogsctrl, optionsProvider, dsProvider, projectsProvider, dialogsCtrl) {
        this.viewsProvider = viewsProvider;
        this.dialogsctrl = dialogsctrl;
        this.optionsProvider = optionsProvider;
        this.dsProvider = dsProvider;
        this.projectsProvider = projectsProvider;
        this.dialogsCtrl = dialogsCtrl;
        this.projects = [];
        this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.views = [];
        this.newView = { projectId: 0, name: '' };
        this.types = [];
        this.newProjectModal = false;
        this.newProject = { title: '' };
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsProvider.getAllProjects()
            .then(function (projects) {
            if (projects.length > 0) {
                _this.projects = projects.map(function (project) { return project.dataValues; });
                _this.project = _this.projects[0];
                _this.loadViews();
            }
        });
        this.loadTypes();
    };
    SideMenuComponent.prototype.loadViews = function () {
        var _this = this;
        if (this.project) {
            this.viewsProvider.getViews(this.project.id)
                .then(function (views) {
                _this.views = views.map(function (view) { return view.dataValues; });
                if (views.length > 0) {
                    _this.setActiveView(_this.views[0]);
                }
                else {
                    _this.setActiveView(null);
                }
            })
                .catch(console.log);
        }
        else {
            this.views = [];
        }
    };
    SideMenuComponent.prototype.createNewProject = function () {
        var _this = this;
        this.projectsProvider.createProject(this.newProject)
            .then(function (project) {
            _this.projects.unshift(project.dataValues);
            _this.newProject.title = '';
            _this.setActiveProject(_this.projects[0]);
            _this.toggleNewProjectModal();
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.loadTypes = function () {
        var _this = this;
        this.dsProvider.getAllTypes()
            .then(function (types) {
            _this.types = types.map(function (type) { return type.dataValues; });
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.toggleNewProjectModal = function () {
        this.newProjectModal = !this.newProjectModal;
    };
    SideMenuComponent.prototype.createView = function () {
        var _this = this;
        this.newView.projectId = this.project.id;
        this.viewsProvider.createView(this.newView)
            .then(function (newView) {
            var view = newView.dataValues;
            _this.views.push(view);
            _this.setActiveView(view);
            _this.newView = { projectId: 0, name: '' };
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.setActiveView = function (view) {
        this.activeView = view;
        this.view.emit(view);
    };
    SideMenuComponent.prototype.setActiveProject = function (project) {
        this.project = project;
        this.loadViews();
    };
    SideMenuComponent.prototype.editView = function (view) {
        var _this = this;
        this.viewsProvider.EditView(view)
            .then(function (newView) {
            var i = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](_this.views, { id: newView.id });
            _this.views.splice(i, 1, newView);
            _this.setActiveView(newView);
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.deleteView = function (id) {
        var _this = this;
        this.viewsProvider.deleteView(id)
            .then(function () {
            lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](_this.views, function (view) { return view.id === id; });
            if (_this.views[0]) {
                _this.setActiveView(_this.views[0]);
            }
            else {
                _this.setActiveView(null);
            }
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.onViewDelete = function (view) {
        var _this = this;
        this.dialogsctrl.open({
            title: 'Delete View',
            message: "Are you sure you want to delete '" + view.name + "'?",
            size: 'small',
            onApprove: function () { return _this.deleteView(view.id); },
            onDeny: function () { }
        });
    };
    SideMenuComponent.prototype.isActiveView = function (view) {
        return this.activeView == view;
    };
    SideMenuComponent.prototype.isActiveProject = function (project) {
        return this.project == project;
    };
    SideMenuComponent.prototype.onProjectDelete = function (project) {
        var _this = this;
        this.dialogsCtrl.open({
            title: 'Delete Project',
            message: "Are you sure you want to delete '" + project.title + "'?",
            size: 'small',
            onApprove: function () { return _this.deleteProject(project.id); },
            onDeny: function () { }
        });
    };
    SideMenuComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.projectsProvider.deleteProject(id)
            .then(function () {
            lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](_this.projects, function (project) { return project.id === id; });
            if (_this.projects[0]) {
                _this.setActiveProject(_this.projects[0]);
            }
            else {
                _this.setActiveProject(null);
            }
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.editProject = function (project) {
        var _this = this;
        this.projectsProvider.EditProject(project)
            .then(function (newProject) {
            var i = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](_this.projects, { id: project.id });
            _this.projects.splice(i, 1, newProject);
            _this.setActiveProject(newProject);
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.exportProject = function (project) {
        this.buildProjectJSON(project)
            .then(function (json) {
            var lnk = document.createElement('a');
            lnk.download = project.title + ".project.crv";
            lnk.href = "data:text/json;charset=utf-8," + json;
            lnk.click();
        });
    };
    SideMenuComponent.prototype.buildProjectJSON = function (project) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.projectsProvider.getProjectById(project.id, true)
                .then(function (project) {
                var views = project.views.map(function (view) {
                    var datasets = view.datasets.map(function (ds) {
                        return {
                            type: ds.type.dataValues.name,
                            data: JSON.parse(ds.dataValues.json)
                        };
                    });
                    var options = JSON.parse(view.option.dataValues.json);
                    return {
                        name: view.dataValues.name,
                        datasets: datasets,
                        options: options
                    };
                });
                var json = JSON.stringify({ title: project.dataValues.title, views: views });
                res(json);
            })
                .catch(rej);
        });
    };
    SideMenuComponent.prototype.onProjectImport = function (event) {
        var _this = this;
        this.readImportdProject(event.target.files[0])
            .then(function (i_project) {
            return _this.createProjectFromFileData(i_project);
        })
            .then(function (project) {
            _this.projects.unshift(project);
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.createProjectFromFileData = function (i_project) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.projectsProvider.createProject(i_project)
                .then(function (newProject) {
                _this.setActiveProject(newProject.dataValues);
                // create observable from views
                var views$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(i_project.views);
                views$.subscribe(function (view) { return _this.createViewFromFileData(view); }, function (err) { }, function () { return res(newProject.dataValues); } // complete
                );
            })
                .catch(rej);
        });
    };
    SideMenuComponent.prototype.exportView = function (view) {
        this.viewsProvider.getViewById(view.id)
            .then(function (view) {
            var datasets = view.datasets.map(function (ds) {
                return {
                    type: ds.type.dataValues.name,
                    data: JSON.parse(ds.dataValues.json)
                };
            });
            var options = JSON.parse(view.option.dataValues.json);
            var e_view = {
                name: view.dataValues.name,
                datasets: datasets,
                options: options
            };
            var json = JSON.stringify(e_view);
            var lnk = document.createElement('a');
            lnk.download = e_view.name + ".view.crv";
            lnk.href = "data:text/json;charset=utf-8," + json;
            lnk.click();
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.onImportView = function (event) {
        var _this = this;
        this.readImportdView(event.target.files[0])
            .then(function (i_view) {
            return _this.createViewFromFileData(i_view);
        })
            .then(function (view) {
            _this.views.push(view);
            _this.setActiveView(view);
        })
            .catch(console.log);
    };
    SideMenuComponent.prototype.createViewFromFileData = function (i_view) {
        var _this = this;
        return new Promise(function (res, rej) {
            var view;
            _this.viewsProvider.createView({ projectId: _this.project.id, name: i_view.name }, false)
                .then(function (newView) {
                view = newView;
                var options = { viewId: newView.dataValues.id, json: JSON.stringify(i_view.options) };
                return _this.optionsProvider.createOptions(options);
            })
                .then(function (newOptions) {
                var datasets = i_view.datasets.map(function (ds) {
                    return {
                        viewId: newOptions.viewId,
                        typeId: _this.types.find(function (type) { return type.name == ds.type; }).id,
                        json: JSON.stringify(ds.data)
                    };
                });
                return _this.dsProvider.createDatasets(datasets);
            })
                .then(function () {
                res(view.dataValues);
            })
                .catch(rej);
        });
    };
    SideMenuComponent.prototype.readImportdView = function (file) {
        return new Promise(function (res, rej) {
            var fileReader = new FileReader();
            fileReader.onloadend = function (e) {
                res(JSON.parse(fileReader.result.toString()));
            };
            fileReader.onerror = function (e) { return rej(e); };
            fileReader.readAsText(file);
        });
    };
    SideMenuComponent.prototype.readImportdProject = function (file) {
        return new Promise(function (res, rej) {
            var fileReader = new FileReader();
            fileReader.onloadend = function (e) {
                res(JSON.parse(fileReader.result.toString()));
            };
            fileReader.onerror = function (e) { return rej(e); };
            fileReader.readAsText(file);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SideMenuComponent.prototype, "view", void 0);
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/components/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/components/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ViewsService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["DialogsService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["OptionsService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["DatasetService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["DialogsService"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/workspace/workspace.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/workspace/workspace.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".workspace{\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.workspace .control-panel-container{\r\n    order: 2;\r\n}\r\n.workspace .display{\r\n    order: 1;\r\n    flex-grow: 1;\r\n    overflow: auto;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/workspace/workspace.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/workspace/workspace.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"workspace\">\r\n  <div class=\"side-menu\">\r\n    <app-side-menu (view)=\"onViewSet($event)\"></app-side-menu>\r\n  </div>\r\n  <div class=\"display\">\r\n    <app-display *ngIf=\"view\" [data]=\"data\" [options]=\"options\" \r\n                (expand)=\"expandedView = !expandedView\"></app-display>\r\n  </div>\r\n  <div class=\"control-panel-container\">\r\n    <app-control *ngIf=\"view\" [view]=\"view\" [hidden]=\"expandedView\"\r\n      (datasets)=\"onDatasets($event)\" (options)=\"onOptions($event)\"></app-control>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/workspace/workspace.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/workspace/workspace.component.ts ***!
  \*************************************************************/
/*! exports provided: WorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function() { return WorkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(dsParser, unitsProvider) {
        this.dsParser = dsParser;
        this.unitsProvider = unitsProvider;
        this.data = { curves: [], pointMarks: [], grids: [] };
        this.expandedView = false;
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        this.unitsProvider.createUnit({
            name: 'px',
            equiv: '0.02636 cm'
        });
    };
    WorkspaceComponent.prototype.onDatasets = function (datasets) {
        var _this = this;
        var curves = datasets.filter(function (ds) { return ds.type == 'CURVE'; }).map(function (ds) { return ds.data; });
        var pointMarks = datasets.filter(function (ds) { return ds.type == 'POINT_MARK'; }).map(function (ds) { return ds.data; });
        var grids = datasets.filter(function (ds) { return ds.type == 'GRID'; }).map(function (ds) { return ds.data; });
        this.data = {
            curves: curves.map(function (curve) { return _this.dsParser.parseCurve(curve); }),
            pointMarks: pointMarks.map(function (pm) { return _this.dsParser.parsePointMark(pm); }),
            grids: grids
        };
    };
    WorkspaceComponent.prototype.onOptions = function (options) {
        this.options = options;
    };
    WorkspaceComponent.prototype.onViewSet = function (view) {
        this.view = view;
    };
    WorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/components/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.css */ "./src/app/components/workspace/workspace.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DatasetParserService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UnitsService"]])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/directives/tab-content.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/tab-content.directive.ts ***!
  \*****************************************************/
/*! exports provided: TabContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContentDirective", function() { return TabContentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabContentDirective = /** @class */ (function () {
    function TabContentDirective() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabContent'),
        __metadata("design:type", String)
    ], TabContentDirective.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Boolean)
    ], TabContentDirective.prototype, "isActive", void 0);
    TabContentDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tabContent]'
        }),
        __metadata("design:paramtypes", [])
    ], TabContentDirective);
    return TabContentDirective;
}());



/***/ }),

/***/ "./src/app/directives/tab-header.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/tab-header.directive.ts ***!
  \****************************************************/
/*! exports provided: TabHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderDirective", function() { return TabHeaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tabs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tabs.service */ "./src/app/services/tabs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabHeaderDirective = /** @class */ (function () {
    function TabHeaderDirective(tabsCtrl) {
        this.tabsCtrl = tabsCtrl;
    }
    TabHeaderDirective.prototype.onClick = function () {
        this.isActive = true;
        this.tabsCtrl.setActive(this.id, this.target);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabHeader'),
        __metadata("design:type", String)
    ], TabHeaderDirective.prototype, "target", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Boolean)
    ], TabHeaderDirective.prototype, "isActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabHeaderDirective.prototype, "onClick", null);
    TabHeaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tabHeader]'
        }),
        __metadata("design:paramtypes", [_services_tabs_service__WEBPACK_IMPORTED_MODULE_1__["TabsService"]])
    ], TabHeaderDirective);
    return TabHeaderDirective;
}());



/***/ }),

/***/ "./src/app/elements/collapsable/collapsable.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/elements/collapsable/collapsable.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collapsable\">\r\n  <div class=\"header\">\r\n    <div class=\"text\">{{ title }}</div>\r\n    <div class=\"icon\" (click)=\"toggleCollapse()\" *ngIf=\"collapsed\">\r\n      <i class=\"fas fa-angle-left\"></i>\r\n    </div>\r\n    <div class=\"icon\" (click)=\"toggleCollapse()\" *ngIf=\"!collapsed\">\r\n      <i class=\"fas fa-angle-down\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"body\" [class.hide]=\"collapsed\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/elements/collapsable/collapsable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/elements/collapsable/collapsable.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".collapsable {\n  border-bottom: 1px solid #ddd; }\n  .collapsable .header {\n    display: flex;\n    align-items: center; }\n  .collapsable .header .text {\n      padding: 15px;\n      flex-grow: 1;\n      color: #bbb;\n      font-size: 11px;\n      font-family: 'Roboto Bold';\n      text-transform: uppercase;\n      letter-spacing: 1px; }\n  .collapsable .header .icon {\n      padding: 15px;\n      font-size: 14px;\n      color: #bbb;\n      cursor: pointer; }\n  .collapsable .body {\n    padding: 0px 15px 15px 15px; }\n  .collapsable .body.hide {\n      height: 0;\n      padding: 0;\n      overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/elements/collapsable/collapsable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/collapsable/collapsable.component.ts ***!
  \***************************************************************/
/*! exports provided: CollapsableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsableComponent", function() { return CollapsableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapsableComponent = /** @class */ (function () {
    function CollapsableComponent() {
        this.collapsed = false;
    }
    CollapsableComponent.prototype.ngOnInit = function () {
    };
    CollapsableComponent.prototype.toggleCollapse = function () {
        this.collapsed = !this.collapsed;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CollapsableComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CollapsableComponent.prototype, "collapsed", void 0);
    CollapsableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collapsable',
            template: __webpack_require__(/*! ./collapsable.component.html */ "./src/app/elements/collapsable/collapsable.component.html"),
            styles: [__webpack_require__(/*! ./collapsable.component.scss */ "./src/app/elements/collapsable/collapsable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CollapsableComponent);
    return CollapsableComponent;
}());



/***/ }),

/***/ "./src/app/elements/color-picker/color-picker.component.css":
/*!******************************************************************!*\
  !*** ./src/app/elements/color-picker/color-picker.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    font-size: 13px;\r\n}\r\nlabel.right {\r\n    margin-left: 5px;\r\n}"

/***/ }),

/***/ "./src/app/elements/color-picker/color-picker.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/elements/color-picker/color-picker.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"color-picker\" [ngStyle]=\"{ 'background': value }\">\r\n  <input type=\"color\" name=\"color-picker\" [(ngModel)]=\"value\" (input)=\"onChange(value)\" (blur)=\"onTouched()\" [disabled]=\"disabled\">\r\n</div>\r\n<label class=\"right\" *ngIf=\"!noLabel\">{{ label }}</label>\r\n"

/***/ }),

/***/ "./src/app/elements/color-picker/color-picker.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/elements/color-picker/color-picker.component.ts ***!
  \*****************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/colors */ "./src/app/store/colors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.value = "#000000";
        this.showColors = false;
    }
    ColorPickerComponent_1 = ColorPickerComponent;
    ColorPickerComponent.prototype.ngOnInit = function () {
        this.colors = _store_colors__WEBPACK_IMPORTED_MODULE_2__["colors"];
    };
    ColorPickerComponent.prototype.writeValue = function (value) {
        this.value = (this.disabled) ? '#ffffff' : value;
    };
    ColorPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ColorPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ColorPickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var ColorPickerComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('label'),
        __metadata("design:type", String)
    ], ColorPickerComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('no-label'),
        __metadata("design:type", Boolean)
    ], ColorPickerComponent.prototype, "noLabel", void 0);
    ColorPickerComponent = ColorPickerComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'color-picker',
            template: __webpack_require__(/*! ./color-picker.component.html */ "./src/app/elements/color-picker/color-picker.component.html"),
            styles: [__webpack_require__(/*! ./color-picker.component.css */ "./src/app/elements/color-picker/color-picker.component.css")],
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: ColorPickerComponent_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/elements/dialog/dialog.component.css":
/*!******************************************************!*\
  !*** ./src/app/elements/dialog/dialog.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: flex;\r\n    background: none;\r\n    border: none;\r\n}\r\n.overlay {\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    left: 0px;\r\n    z-index: 99;\r\n    overflow: hidden;\r\n}\r\n.overlay .modal {\r\n    margin: 10% auto;\r\n    width: 400px;\r\n    background: #eaeaea;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n}\r\n.overlay .modal .header {\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    font-family: 'Roboto Medium';\r\n    color: #888;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.overlay .modal .body {\r\n    padding: 10px;\r\n}\r\n.overlay .modal .footer {\r\n    padding: 10px;\r\n    text-align: right;\r\n    border-top: 1px solid #ccc;\r\n}\r\n.overlay .modal.large {\r\n    width: 700px;\r\n}\r\n.overlay .modal.small {\r\n    width: 350px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/elements/dialog/dialog.component.html":
/*!*******************************************************!*\
  !*** ./src/app/elements/dialog/dialog.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\">\r\n  <div class=\"modal\" [ngClass]=\"size\">\r\n    <div class=\"header\">\r\n      {{ title }}\r\n    </div>\r\n    <div class=\"body\">\r\n      {{ message }}\r\n    </div>\r\n    <div class=\"footer\">\r\n      <div class=\"btn-group\">\r\n        <button class=\"large success\" (click)=\"approve()\">Yes</button>\r\n        <button class=\"large default\" (click)=\"deny()\">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/elements/dialog/dialog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/dialog/dialog.component.ts ***!
  \*****************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.show = false;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.close = function () {
        this.show = false;
    };
    DialogComponent.prototype.approve = function () {
        this.onApproveFn();
        this.close();
    };
    DialogComponent.prototype.deny = function () {
        this.onDenyFn();
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "show", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogComponent.prototype, "message", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/elements/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/elements/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/elements/inline-edit/inline-edit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/elements/inline-edit/inline-edit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\r\n    [type]=\"type\" \r\n    [disabled]=\"disabled\"\r\n    name=\"inline-edit\" \r\n    [(ngModel)]=\"value\" \r\n    (input)=\"onChange(value)\"\r\n    (blur)=\"onBlur()\"\r\n    (click)=\"onClick($event)\"\r\n    (mousedown)=\"onMouseDown($event)\"\r\n    (dblclick)=\"onDblClick($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    [ngStyle]=\"(editMode) ? focusStyle : style\"\r\n    autocomplete=\"off\"\r\n>"

/***/ }),

/***/ "./src/app/elements/inline-edit/inline-edit.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/elements/inline-edit/inline-edit.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n  cursor: inherit;\n  border: none;\n  background: none;\n  transition: background linear 0.1s 0s;\n  padding: 4px 6px;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: inherit;\n  text-align: center;\n  color: inherit; }\n  input:focus {\n    cursor: text;\n    font-family: inherit;\n    font-size: inherit;\n    color: inherit; }\n"

/***/ }),

/***/ "./src/app/elements/inline-edit/inline-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/inline-edit/inline-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: InlineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditComponent", function() { return InlineEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InlineEditComponent = /** @class */ (function () {
    function InlineEditComponent() {
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editMode = false;
        this.style = {};
        this.focusStyle = {};
    }
    InlineEditComponent_1 = InlineEditComponent;
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    InlineEditComponent.prototype.writeValue = function (value) {
        this.value = (value) ? value : '';
    };
    InlineEditComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InlineEditComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    InlineEditComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    InlineEditComponent.prototype.onClick = function (event) {
        event.preventDefault();
    };
    InlineEditComponent.prototype.onMouseDown = function (event) {
        event.preventDefault();
    };
    InlineEditComponent.prototype.onDblClick = function (event) {
        this.editMode = true;
        event.target.focus();
    };
    InlineEditComponent.prototype.onKeyDown = function (event) {
        if (event.key === "Enter" && this.value.length > 0) {
            this.editMode = false;
            event.target.blur();
            this.done.emit();
        }
    };
    InlineEditComponent.prototype.onBlur = function () {
        this.onTouched();
        this.editMode = false;
    };
    var InlineEditComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InlineEditComponent.prototype, "done", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InlineEditComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "focusStyle", void 0);
    InlineEditComponent = InlineEditComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inline-edit',
            template: __webpack_require__(/*! ./inline-edit.component.html */ "./src/app/elements/inline-edit/inline-edit.component.html"),
            styles: [__webpack_require__(/*! ./inline-edit.component.scss */ "./src/app/elements/inline-edit/inline-edit.component.scss")],
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: InlineEditComponent_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], InlineEditComponent);
    return InlineEditComponent;
}());



/***/ }),

/***/ "./src/app/elements/modal/modal.component.css":
/*!****************************************************!*\
  !*** ./src/app/elements/modal/modal.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n    margin-left: 50%;\r\n    left: -200px;\r\n    width: 400px;\r\n    top: 0px;\r\n    -webkit-transform: translateY(-110%);\r\n            transform: translateY(-110%);\r\n    background: #eaeaea;\r\n    border-radius: 0px 0px 4px 4px;\r\n    overflow: hidden;\r\n    border: 0px 1px 1px 1px solid #ccc;\r\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n    position: absolute;\r\n    transition: -webkit-transform linear 0.17s 0s;\r\n    transition: transform linear 0.17s 0s;\r\n    transition: transform linear 0.17s 0s, -webkit-transform linear 0.17s 0s;\r\n    z-index: 99;\r\n}\r\n\r\n.modal.show {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    max-height: 100vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.modal .header {\r\n    display: flex;\r\n    padding: 10px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.modal .header .text {\r\n    font-size: 15px;\r\n    font-family: 'Roboto Medium';\r\n    color: #888;\r\n    flex-grow: 1\r\n}\r\n\r\n.modal .header .icon {\r\n    color: #888;\r\n    font-size: 16px;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal .body {\r\n    padding: 10px;\r\n}\r\n\r\n.modal .footer {\r\n    padding: 10px;\r\n    text-align: right;\r\n    border-top: 1px solid #ccc;\r\n}\r\n\r\n.modal.large {\r\n    width: 700px;\r\n    left: calc(-700px/2);\r\n}\r\n\r\n.modal.small {\r\n    width: 350px;\r\n    left: calc(-350px/2);\r\n}\r\n"

/***/ }),

/***/ "./src/app/elements/modal/modal.component.html":
/*!*****************************************************!*\
  !*** ./src/app/elements/modal/modal.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" [ngClass]=\"size\" [class.show]=\"show\">\r\n  <div class=\"header\">\r\n    <div class=\"text\">{{ title }}</div>\r\n    <div class=\"icon\" (click)=\"close()\">\r\n      <i class=\"fas fa-times\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/elements/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/elements/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.show = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.close = function () {
        this.show = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "show", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/elements/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/elements/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/elements/tabset/tabset.component.css":
/*!******************************************************!*\
  !*** ./src/app/elements/tabset/tabset.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    display: flex;\r\n    height: inherit;\r\n}\r\n.tabset{\r\n    display: flex;\r\n    flex-flow: column;\r\n    flex-grow: 1;\r\n}\r\n.tabset /deep/ .tabs{\r\n    background: #fafafa;\r\n    display: flex;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n}\r\n.tabset /deep/ .tabs .tab{\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    padding: 6px;\r\n    padding-top: 9px;\r\n    color: #ccc;\r\n    border-bottom: 3px solid #fafafa;\r\n    cursor: pointer;\r\n}\r\n.tabset /deep/ .tabs .tab.active{\r\n    color: #555;\r\n    border-bottom: 3px solid #555;\r\n}\r\n.tabset /deep/ .tabs .tab .icon{\r\n    font-size: 18px;\r\n}\r\n.tabset /deep/ .tabs .tab .text{\r\n    font-family: 'Roboto Bold';\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    margin-top: 3px;\r\n}\r\n.tabset /deep/ .content {\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n.tabset /deep/ .content .tab-content{\r\n    display: none;\r\n    width: 100%;\r\n}\r\n.tabset /deep/ .content .tab-content.padding{\r\n    padding: 10px;\r\n}\r\n.tabset /deep/ .content .tab-content.active{\r\n    display: block;\r\n    overflow: auto;\r\n}\r\n.tabset /deep/ .content .tab-content .section{\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 15px;\r\n}\r\n.tabset /deep/ .content .tab-content .section .section-header{\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n}\r\n.tabset /deep/ .content .tab-content .section .section-header .name{\r\n    font-family: 'Roboto Bold';\r\n    font-size: 11px;\r\n    color: #bbb;\r\n    flex-grow: 1;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.tabset /deep/ .content .tab-content .section .section-header .icon{\r\n    color: #bbb;\r\n    font-size: 14px;\r\n}\r\n.tabset /deep/ .content .tab-content .section .section-body{\r\n}"

/***/ }),

/***/ "./src/app/elements/tabset/tabset.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/tabset/tabset.component.ts ***!
  \*****************************************************/
/*! exports provided: TabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_directives_tab_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/directives/tab-header.directive */ "./src/app/directives/tab-header.directive.ts");
/* harmony import */ var src_app_directives_tab_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/tab-content.directive */ "./src/app/directives/tab-content.directive.ts");
/* harmony import */ var _services_tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tabs.service */ "./src/app/services/tabs.service.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(tabsCtrl) {
        this.tabsCtrl = tabsCtrl;
    }
    TabsetComponent.prototype.ngOnInit = function () {
    };
    TabsetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.id = this.randomID();
        this.tabHeaders.forEach(function (tabHeader) { return tabHeader.id = _this.id; });
        this.tabsCtrl.registerTabset({
            id: this.id,
            headers: this.tabHeaders,
            contents: this.tabContents
        });
        this.tabHeaders.forEach(function (tabHeader) {
            if (tabHeader.isActive) {
                _this.tabsCtrl.setActive(_this.id, tabHeader.target);
            }
        });
    };
    TabsetComponent.prototype.randomID = function () {
        return crypto_js__WEBPACK_IMPORTED_MODULE_4__["lib"].WordArray.random(10).toString();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(src_app_directives_tab_header_directive__WEBPACK_IMPORTED_MODULE_1__["TabHeaderDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsetComponent.prototype, "tabHeaders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(src_app_directives_tab_content_directive__WEBPACK_IMPORTED_MODULE_2__["TabContentDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsetComponent.prototype, "tabContents", void 0);
    TabsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabset',
            template: "\n    <div class=\"tabset\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./tabset.component.css */ "./src/app/elements/tabset/tabset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tabs_service__WEBPACK_IMPORTED_MODULE_3__["TabsService"]])
    ], TabsetComponent);
    return TabsetComponent;
}());



/***/ }),

/***/ "./src/app/elements/toast/toast.component.html":
/*!*****************************************************!*\
  !*** ./src/app/elements/toast/toast.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \r\n  class=\"alert {{ type }}\"\r\n  [class.hide]=\"hide\" \r\n  [ngStyle]=\"{\r\n    'top': (position[0] == 'top') ? '10px' : 'auto',\r\n    'bottom': (position[0] == 'bottom') ? '10px' : 'auto',\r\n    'right': (position[1] == 'right') ? '10px' : 'auto',\r\n    'left': (position[1] == 'left') ? '10px' : 'auto',\r\n    'opacity': (hide) ? '0' : '1',\r\n    'transition': 'opacity linear 0.4s 0s'\r\n  }\">\r\n  {{ message }}\r\n</div>"

/***/ }),

/***/ "./src/app/elements/toast/toast.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/elements/toast/toast.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  position: fixed; }\n"

/***/ }),

/***/ "./src/app/elements/toast/toast.component.ts":
/*!***************************************************!*\
  !*** ./src/app/elements/toast/toast.component.ts ***!
  \***************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.hide = false;
    }
    ToastComponent.prototype.ngOnInit = function () {
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hide = true;
        }, this.delay);
    };
    ToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toast',
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/elements/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.scss */ "./src/app/elements/toast/toast.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/modules/curve-ui/curve-ui.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/curve-ui/curve-ui.module.ts ***!
  \*****************************************************/
/*! exports provided: CurveUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurveUiModule", function() { return CurveUiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _elements_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/color-picker/color-picker.component */ "./src/app/elements/color-picker/color-picker.component.ts");
/* harmony import */ var _elements_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/tabset/tabset.component */ "./src/app/elements/tabset/tabset.component.ts");
/* harmony import */ var _directives_tab_header_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/tab-header.directive */ "./src/app/directives/tab-header.directive.ts");
/* harmony import */ var _directives_tab_content_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/tab-content.directive */ "./src/app/directives/tab-content.directive.ts");
/* harmony import */ var _services_tabs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tabs.service */ "./src/app/services/tabs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CurveUiModule = /** @class */ (function () {
    function CurveUiModule() {
    }
    CurveUiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _elements_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_3__["ColorPickerComponent"],
                _elements_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"],
                _directives_tab_header_directive__WEBPACK_IMPORTED_MODULE_5__["TabHeaderDirective"],
                _directives_tab_content_directive__WEBPACK_IMPORTED_MODULE_6__["TabContentDirective"]
            ],
            exports: [
                _elements_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_3__["ColorPickerComponent"],
                _elements_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"],
                _directives_tab_header_directive__WEBPACK_IMPORTED_MODULE_5__["TabHeaderDirective"],
                _directives_tab_content_directive__WEBPACK_IMPORTED_MODULE_6__["TabContentDirective"]
            ],
            providers: [
                _services_tabs_service__WEBPACK_IMPORTED_MODULE_7__["TabsService"]
            ]
        })
    ], CurveUiModule);
    return CurveUiModule;
}());



/***/ }),

/***/ "./src/app/pipes/no-underscore.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/no-underscore.pipe.ts ***!
  \*********************************************/
/*! exports provided: NoUnderscore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnderscore", function() { return NoUnderscore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoUnderscore = /** @class */ (function () {
    function NoUnderscore() {
    }
    NoUnderscore.prototype.transform = function (value, args) {
        return value.replace(/_/g, " ");
    };
    NoUnderscore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'noUnderscore'
        })
    ], NoUnderscore);
    return NoUnderscore;
}());



/***/ }),

/***/ "./src/app/pipes/pluralize.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/pluralize.pipe.ts ***!
  \*****************************************/
/*! exports provided: PluralizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralizePipe", function() { return PluralizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PluralizePipe = /** @class */ (function () {
    function PluralizePipe() {
    }
    PluralizePipe.prototype.transform = function (value, args) {
        return pluralize__WEBPACK_IMPORTED_MODULE_1__(value);
    };
    PluralizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pluralize'
        })
    ], PluralizePipe);
    return PluralizePipe;
}());



/***/ }),

/***/ "./src/app/services/dataset-parser.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/dataset-parser.service.ts ***!
  \****************************************************/
/*! exports provided: DatasetParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetParserService", function() { return DatasetParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mathjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetParserService = /** @class */ (function () {
    function DatasetParserService() {
    }
    DatasetParserService.prototype.parseCurve = function (dataset) {
        this.x_values = this.parseInput(dataset.input.x);
        this.y_values = this.parseInput(dataset.input.y);
        return {
            x: this.x_values,
            y: this.y_values,
            label: dataset.name,
            visible: dataset.visible,
            color: dataset.color,
            lineStyle: dataset.lineStyle
        };
    };
    DatasetParserService.prototype.parsePointMark = function (pointMark) {
        pointMark.y = mathjs__WEBPACK_IMPORTED_MODULE_1__["eval"](pointMark.y, { x: pointMark.x });
        return pointMark;
    };
    DatasetParserService.prototype.parseInput = function (input) {
        var values = [];
        var range_in = input.split(':');
        var values_in = input.split(',');
        if (range_in.length > 1) {
            var range = range_in.map(function (val) { return mathjs__WEBPACK_IMPORTED_MODULE_1__["eval"](val); });
            values = this.getValuesFromRange(range);
        }
        else if (values_in.length > 1) {
            values_in.forEach(function (val) { return values.push(mathjs__WEBPACK_IMPORTED_MODULE_1__["eval"](val)); });
        }
        else if (input.length > 0) {
            values = this.applyFunction(input);
        }
        return values;
    };
    DatasetParserService.prototype.getValuesFromRange = function (range) {
        var values = [];
        var start = range[0];
        var end = range[range.length - 1];
        var step = (range.length == 2) ? 0.1 : range[1];
        for (var i = start; i <= end; i = i + step) {
            values.push(i);
        }
        return values;
    };
    DatasetParserService.prototype.applyFunction = function (expression) {
        var values = this.x_values.map(function (x) { return mathjs__WEBPACK_IMPORTED_MODULE_1__["eval"](expression, { x: x }); });
        return values;
    };
    DatasetParserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DatasetParserService);
    return DatasetParserService;
}());



/***/ }),

/***/ "./src/app/services/dataset.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/dataset.service.ts ***!
  \*********************************************/
/*! exports provided: DatasetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetService", function() { return DatasetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _placeholders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholders */ "./src/app/services/placeholders.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var DatasetService = /** @class */ (function () {
    function DatasetService(electron) {
        this.electron = electron;
        this.createTypes();
    }
    DatasetService.prototype.createTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createType({
                            name: 'CURVE',
                            placeholder: JSON.stringify(_placeholders__WEBPACK_IMPORTED_MODULE_1__["placeholders"].curve)
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.createType({
                                name: 'POINT_MARK',
                                placeholder: JSON.stringify(_placeholders__WEBPACK_IMPORTED_MODULE_1__["placeholders"].pointMark)
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.createType({
                                name: 'GRID',
                                placeholder: JSON.stringify(_placeholders__WEBPACK_IMPORTED_MODULE_1__["placeholders"].grid)
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatasetService.prototype.getAllTypes = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('fetch-types');
            _this.electron.ipcRenderer.on('types-fetched', function (event, types) {
                res(types);
            });
        });
    };
    DatasetService.prototype.createType = function (type) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('create-type', type);
            _this.electron.ipcRenderer.on('type-created', function (event, type) {
                res(type);
            });
        });
    };
    DatasetService.prototype.getType = function (name) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('fetch-type', name);
            _this.electron.ipcRenderer.on('type-fetched', function (event, type) {
                res(type);
            });
        });
    };
    DatasetService.prototype.createDataset = function (dataset) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('create-dataset', dataset);
            _this.electron.ipcRenderer.on('dataset-created', function (event, dataset) {
                res(dataset);
            });
        });
    };
    DatasetService.prototype.createDatasets = function (datasets) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('create-datasets', datasets);
            _this.electron.ipcRenderer.on('datasets-created', function (event) {
                res();
            });
        });
    };
    DatasetService.prototype.deleteDataset = function (id) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('delete-dataset', id);
            _this.electron.ipcRenderer.on('dataset-deleted', function (event) {
                res(id);
            });
        });
    };
    DatasetService.prototype.updateDatasets = function (datasets) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('update-datasets', datasets);
            _this.electron.ipcRenderer.on('datasets-updated', function (event) {
                res();
            });
        });
    };
    DatasetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])
    ], DatasetService);
    return DatasetService;
}());



/***/ }),

/***/ "./src/app/services/dialogs.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/dialogs.service.ts ***!
  \*********************************************/
/*! exports provided: DialogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsService", function() { return DialogsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/dialog/dialog.component */ "./src/app/elements/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogsService = /** @class */ (function () {
    function DialogsService(componenFactoryResolver, appRef, injector) {
        this.componenFactoryResolver = componenFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DialogsService.prototype.appendDialogCompToBody = function () {
        document.body.appendChild(this.dialogDomElement);
    };
    DialogsService.prototype.removeDialogCompFromBody = function () {
        this.appRef.detachView(this.dialogCompRef.hostView);
        this.dialogCompRef.destroy();
    };
    DialogsService.prototype.create = function (options) {
        var _this = this;
        var compFactory = this.componenFactoryResolver.resolveComponentFactory(_elements_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]);
        this.dialogCompRef = compFactory.create(this.injector);
        this.dialogCompRef.instance.title = options.title;
        this.dialogCompRef.instance.message = options.message;
        this.dialogCompRef.instance.size = options.size;
        this.dialogCompRef.instance.onApproveFn = function () {
            options.onApprove();
            _this.removeDialogCompFromBody();
        };
        this.dialogCompRef.instance.onDenyFn = function () {
            options.onDeny();
            _this.removeDialogCompFromBody();
        };
        this.appRef.attachView(this.dialogCompRef.hostView);
        this.dialogDomElement = this.dialogCompRef.hostView.rootNodes[0];
    };
    DialogsService.prototype.open = function (options) {
        this.create(options);
        this.appendDialogCompToBody();
    };
    DialogsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DialogsService);
    return DialogsService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: DatasetParserService, DatasetService, PainterService, ProjectsService, TabsService, ViewsService, DialogsService, OptionsService, ToastService, UnitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataset_parser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataset-parser.service */ "./src/app/services/dataset-parser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatasetParserService", function() { return _dataset_parser_service__WEBPACK_IMPORTED_MODULE_0__["DatasetParserService"]; });

/* harmony import */ var _dataset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset.service */ "./src/app/services/dataset.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatasetService", function() { return _dataset_service__WEBPACK_IMPORTED_MODULE_1__["DatasetService"]; });

/* harmony import */ var _dialogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs.service */ "./src/app/services/dialogs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogsService", function() { return _dialogs_service__WEBPACK_IMPORTED_MODULE_2__["DialogsService"]; });

/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options.service */ "./src/app/services/options.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return _options_service__WEBPACK_IMPORTED_MODULE_3__["OptionsService"]; });

/* harmony import */ var _painter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./painter.service */ "./src/app/services/painter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PainterService", function() { return _painter_service__WEBPACK_IMPORTED_MODULE_4__["PainterService"]; });

/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.service */ "./src/app/services/projects.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return _projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"]; });

/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.service */ "./src/app/services/tabs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsService", function() { return _tabs_service__WEBPACK_IMPORTED_MODULE_6__["TabsService"]; });

/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toast.service */ "./src/app/services/toast.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]; });

/* harmony import */ var _units_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./units.service */ "./src/app/services/units.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnitsService", function() { return _units_service__WEBPACK_IMPORTED_MODULE_8__["UnitsService"]; });

/* harmony import */ var _views_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views.service */ "./src/app/services/views.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewsService", function() { return _views_service__WEBPACK_IMPORTED_MODULE_9__["ViewsService"]; });













/***/ }),

/***/ "./src/app/services/options.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/options.service.ts ***!
  \*********************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsService = /** @class */ (function () {
    function OptionsService(electron) {
        this.electron = electron;
    }
    OptionsService.prototype.updateOptions = function (options) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('update-options', options);
            _this.electron.ipcRenderer.on('options-updated', function (event) {
                res();
            });
        });
    };
    OptionsService.prototype.createOptions = function (options) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('create-options', options);
            _this.electron.ipcRenderer.on('options-created', function (event, newOptions) {
                res(newOptions);
            });
        });
    };
    OptionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], OptionsService);
    return OptionsService;
}());



/***/ }),

/***/ "./src/app/services/painter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/painter.service.ts ***!
  \*********************************************/
/*! exports provided: PainterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainterService", function() { return PainterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mathjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainterService = /** @class */ (function () {
    function PainterService() {
    }
    PainterService.prototype.prepare = function (canvasElement, data, options, units) {
        units.forEach(function (unit) { return mathjs__WEBPACK_IMPORTED_MODULE_1__["createUnit"](unit.name, unit.equiv, { override: true }); });
        this.curves = data.curves;
        this.pointMarks = data.pointMarks;
        this.grids = data.grids;
        this.options = options;
        this.canvasElement = canvasElement;
        this.context = this.canvasElement.getContext('2d');
    };
    PainterService.prototype.paint = function () {
        var _this = this;
        this._scale = this.getPixelizedScale();
        this._padding = this.getPixelizedPadding();
        this._boundaries = this.calculateBoundaries();
        this.setCanvasDimensions();
        this.offset = this.getOffset();
        this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.setCanvasBackgroundColor();
        this.grids.forEach(function (grid) { return _this.drawGrid(grid); });
        this.drawAxis();
        this.curves.forEach(function (curve) { return _this.drawCurve(curve); });
        this.pointMarks.forEach(function (mark) { return _this.drawPointMark(mark); });
        this.printTitle();
        this.attachLegend();
    };
    PainterService.prototype.attachLegend = function () {
        if (this.options.legend.show) {
            var x = this.xScale(this.options.legend.position.x);
            var y = this.yScale(this.options.legend.position.y);
            for (var i = 0; i < this.curves.length; i++) {
                var _a = this.curves[i], label = _a.label, visible = _a.visible, color = _a.color, lineStyle = _a.lineStyle;
                if (visible) {
                    this.context.beginPath();
                    switch (lineStyle) {
                        case 'dashed':
                            this.context.setLineDash([5, 2]);
                            break;
                        case 'dotted':
                            this.context.setLineDash([2, 2]);
                            break;
                        case 'default':
                            this.context.setLineDash([]);
                            break;
                    }
                    var padding = 15;
                    var fontSize = 11;
                    this.context.lineWidth = 0.8;
                    this.context.strokeStyle = color;
                    this.context.moveTo(x, y + i * padding);
                    this.context.lineTo(x + 20, y + i * padding);
                    this.context.stroke();
                    this.context.beginPath();
                    this.context.setLineDash([]);
                    this.context.font = fontSize + "px Helvetica";
                    this.context.fillText(label, x + 25, y + i * padding + fontSize / 4);
                    this.context.stroke();
                }
            }
        }
    };
    PainterService.prototype.printTitle = function () {
        if (this.options.view.title.show) {
            this.context.beginPath();
            this.context.setLineDash([0, 0]);
            this.context.lineWidth = 0.6;
            this.context.fillStyle = 'black';
            var title = this.options.view.title.text;
            var fontSize = 14;
            this.context.font = "bold " + fontSize + "px Helvetica";
            var textSize = this.context.measureText(title);
            var x = this.canvasElement.width / 2 - textSize.width / 2;
            var y = this.drawingDimensions.height + 25 + fontSize / 2;
            this.context.fillText(title, x, y);
            this.context.stroke();
        }
    };
    PainterService.prototype.drawGrid = function (grid) {
        this.context.beginPath();
        this.context.lineWidth = 0.5;
        this.context.strokeStyle = grid.color;
        if (grid.x) {
            var i = void 0;
            // right side
            i = 0;
            while (this.xScale(i) + this.offset.x < this.drawingDimensions.width) {
                this.context.moveTo(this.offset.x + this.xScale(i), 0);
                this.context.lineTo(this.offset.x + this.xScale(i), this.drawingDimensions.height);
                i += 1 / grid.unitMultiply;
            }
            // left side
            i = 0;
            while (-this.xScale(i) + this.offset.x > -this.offset.x) {
                this.context.moveTo(this.offset.x - this.xScale(i), 0);
                this.context.lineTo(this.offset.x - this.xScale(i), this.drawingDimensions.height);
                i += 1 / grid.unitMultiply;
            }
        }
        if (grid.y) {
            var i = void 0;
            // bottom side
            i = 0;
            while (this.yScale(i) + this.offset.y < this.drawingDimensions.height) {
                this.context.moveTo(0, this.offset.y + this.yScale(i));
                this.context.lineTo(this.drawingDimensions.width, this.offset.y + this.yScale(i));
                i += 1 / grid.unitMultiply;
            }
            // top side
            i = 0;
            while (this.offset.y - this.yScale(i) > 0) {
                this.context.moveTo(0, this.offset.y - this.yScale(i));
                this.context.lineTo(this.drawingDimensions.width, this.offset.y - this.yScale(i));
                i += 1 / grid.unitMultiply;
            }
        }
        this.context.stroke();
    };
    PainterService.prototype.drawAxis = function () {
        this.context.beginPath();
        this.context.lineWidth = 1.5;
        this.context.strokeStyle = 'black';
        this.context.moveTo(this.offset.x, 0);
        this.context.lineTo(this.offset.x, this.drawingDimensions.height);
        this.context.moveTo(0, this.offset.y);
        this.context.lineTo(this.drawingDimensions.width, this.offset.y);
        this.context.stroke();
    };
    PainterService.prototype.drawCurve = function (_a) {
        var x = _a.x, y = _a.y, visible = _a.visible, label = _a.label, color = _a.color, lineStyle = _a.lineStyle;
        this.context.beginPath();
        switch (lineStyle) {
            case 'dashed':
                this.context.setLineDash([5, 2]);
                break;
            case 'dotted':
                this.context.setLineDash([2, 2]);
                break;
            case 'default':
                this.context.setLineDash([]);
                break;
        }
        if (visible) {
            this.context.strokeStyle = color;
            this.context.lineWidth = 0.8;
            var start = {
                x: this.xScale(x[0]) + this.offset.x,
                y: this.yScale(-y[0]) + this.offset.y
            };
            this.context.moveTo(start.x, start.y);
            for (var i = 1; i <= x.length - 1; i++) {
                var _x = this.xScale(x[i]) + this.offset.x;
                var _y = this.yScale(-y[i]) + this.offset.y;
                this.context.lineTo(_x, _y);
            }
            this.context.stroke();
        }
    };
    PainterService.prototype.drawPointMark = function (_a) {
        var name = _a.name, visible = _a.visible, x = _a.x, y = _a.y, color = _a.color;
        if (visible) {
            var _d = 2.5;
            var _x = this.xScale(x) + this.offset.x;
            var _y = this.yScale(-y) + this.offset.y;
            this.context.beginPath();
            this.context.strokeStyle = color;
            this.context.lineWidth = 0.7;
            this.context.setLineDash([5, 3]);
            // x drop
            this.context.moveTo(_x, this.offset.y);
            this.context.lineTo(_x, _y);
            // y drop
            this.context.moveTo(this.offset.x, _y);
            this.context.lineTo(_x, _y);
            this.context.stroke();
            // point
            this.context.beginPath();
            this.context.strokeStyle = color;
            this.context.fillStyle = color;
            this.context.lineWidth = 0.5;
            this.context.setLineDash([]);
            var fontSize = 11;
            this.context.font = fontSize + "px HelveticafontSize}";
            var nameWidth = this.context.measureText(name).width;
            var nameX = void 0, nameY = void 0;
            if (x > 0) {
                nameX = _x - nameWidth - 5;
            }
            else if (x < 0) {
                nameX = _x + 5;
            }
            if (y > 0) {
                nameY = _y - 5;
            }
            else if (y < 0) {
                nameY = _y + fontSize + 5;
            }
            this.context.fillText(name, nameX, nameY);
            this.context.arc(_x, _y, _d, 0, 2 * Math.PI);
            this.context.fill();
            this.context.stroke();
            // point name
            this.context.beginPath();
            this.context.setLineDash([0, 0]);
            this.context.lineWidth = 0.6;
            this.context.fillStyle = 'black';
            var numberWidth = this.context.measureText(x.toString()).width;
            var xNumberX = void 0, xNumberY = void 0, yNumberX = void 0, yNumberY = void 0;
            xNumberX = _x + 5;
            xNumberY = this.offset.y + fontSize + 5;
            this.context.fillText(x.toString(), xNumberX, xNumberY);
            numberWidth = this.context.measureText(y.toString()).width;
            yNumberX = (x > 0) ? this.offset.x + 5 : this.offset.x - numberWidth - 5;
            yNumberY = _y + 5 + fontSize;
            this.context.fillText(y.toString(), yNumberX, yNumberY);
            this.context.stroke();
        }
    };
    PainterService.prototype.getOffset = function () {
        var ys = [];
        this.curves.forEach(function (curve) { return ys.push.apply(ys, curve.y); });
        this.pointMarks.forEach(function (mark) { return ys.push(mark.y); });
        var x = -this._boundaries.x.min + this._padding.left;
        var y = -this.yScale(Math.min.apply(Math, ys.map(function (y) { return -y; }))) + this._padding.top;
        return { x: x, y: y };
    };
    PainterService.prototype.getPixelizedScale = function () {
        var scale = this.options.scale;
        return {
            x: {
                from: this.options.scale.x.from,
                to: this.pixelize(scale.x.to.value, scale.x.to.unit)
            },
            y: {
                from: this.options.scale.y.from,
                to: this.pixelize(scale.y.to.value, scale.y.to.unit)
            }
        };
    };
    PainterService.prototype.getPixelizedPadding = function () {
        var padding = this.options.padding;
        return {
            top: this.pixelize(padding.top, padding.unit),
            bottom: this.pixelize(padding.bottom, padding.unit),
            left: this.pixelize(padding.left, padding.unit),
            right: this.pixelize(padding.right, padding.unit)
        };
    };
    PainterService.prototype.setCanvasDimensions = function () {
        var width = this._boundaries.x.max - this._boundaries.x.min + this._padding.right + this._padding.left;
        var height = this._boundaries.y.max - this._boundaries.y.min + this._padding.bottom + this._padding.top;
        this.drawingDimensions = { width: width, height: height };
        this.canvasElement.width = width;
        var titleGap = (this.options.view.title.show) ? 50 : 0;
        this.canvasElement.height = height + titleGap;
    };
    PainterService.prototype.setCanvasBackgroundColor = function () {
        this.context.beginPath();
        this.context.rect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.context.fillStyle = this.options.background.color;
        this.context.fill();
    };
    PainterService.prototype.xScale = function (value) {
        return value * this._scale.x.to / this._scale.x.from;
    };
    PainterService.prototype.yScale = function (value) {
        return value * this._scale.y.to / this._scale.y.from;
    };
    PainterService.prototype.calculateBoundaries = function () {
        var xs = [0];
        var ys = [0];
        this.curves.forEach(function (curve) { return xs.push.apply(xs, curve.x); });
        this.curves.forEach(function (curve) { return ys.push.apply(ys, curve.y); });
        this.pointMarks.forEach(function (mark) { return xs.push(mark.x); });
        this.pointMarks.forEach(function (mark) { return ys.push(mark.y); });
        return {
            x: { max: this.xScale(Math.max.apply(Math, xs)), min: this.xScale(Math.min.apply(Math, xs)) },
            y: { max: this.yScale(Math.max.apply(Math, ys)), min: this.yScale(Math.min.apply(Math, ys)) }
        };
    };
    PainterService.prototype.pixelize = function (value, unit) {
        return mathjs__WEBPACK_IMPORTED_MODULE_1__["unit"](value, unit).toNumber('px');
    };
    PainterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PainterService);
    return PainterService;
}());



/***/ }),

/***/ "./src/app/services/placeholders.ts":
/*!******************************************!*\
  !*** ./src/app/services/placeholders.ts ***!
  \******************************************/
/*! exports provided: placeholders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeholders", function() { return placeholders; });
var placeholders = {
    curve: {
        name: 'Square',
        visible: true,
        input: {
            x: '-5:5',
            y: 'x^2'
        },
        color: '#f0000f',
        lineStyle: 'default'
    },
    pointMark: {
        name: 'My Point',
        x: 10,
        y: 10,
        visible: true,
        color: '#ff0000'
    },
    grid: {
        name: 'Main Grid',
        x: true,
        y: true,
        color: '#cccccc',
        unitMultiply: 1
    }
};


/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = /** @class */ (function () {
    function ProjectsService(electron) {
        this.electron = electron;
    }
    ProjectsService.prototype.getAllProjects = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('fetch-projects');
            _this.electron.ipcRenderer.on('projects-fetched', function (event, args) {
                res(args);
            });
        });
    };
    ProjectsService.prototype.createProject = function (project) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('create-project', project);
            _this.electron.ipcRenderer.on('project-created', function (event, project) {
                res(project);
            });
        });
    };
    ProjectsService.prototype.deleteProject = function (projectId) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('delete-project', projectId);
            _this.electron.ipcRenderer.on('project-deleted', function (event) {
                res();
            });
        });
    };
    ProjectsService.prototype.EditProject = function (project) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('update-project', project);
            _this.electron.ipcRenderer.on('project-updated', function (event, newProject) {
                res(newProject);
            });
        });
    };
    ProjectsService.prototype.getProjectById = function (id, includes) {
        var _this = this;
        if (includes === void 0) { includes = false; }
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('fetch-project', id, includes);
            _this.electron.ipcRenderer.on('project-fetched', function (event, project) {
                res(project);
            });
        });
    };
    ProjectsService.prototype.searchProjects = function (term) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('search-projects', term);
            _this.electron.ipcRenderer.on('projects-searched', function (event, projects) {
                res(projects);
            });
        });
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/services/tabs.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tabs.service.ts ***!
  \******************************************/
/*! exports provided: TabsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsService", function() { return TabsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsService = /** @class */ (function () {
    function TabsService() {
        this.tabsets = [];
    }
    TabsService.prototype.registerTabset = function (tabset) {
        this.tabsets.push(tabset);
    };
    TabsService.prototype.setActive = function (id, target) {
        var tabset = this.tabsets.find(function (tabset) { return tabset.id == id; });
        tabset.contents.forEach(function (content) {
            if (content.id == target) {
                content.isActive = true;
            }
            else {
                content.isActive = false;
            }
        });
        tabset.headers.filter(function (header) { return header.target != target; })
            .forEach(function (header) { return header.isActive = false; });
    };
    TabsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TabsService);
    return TabsService;
}());



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements_toast_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/toast/toast.component */ "./src/app/elements/toast/toast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(componenFactoryResolver, appRef, injector) {
        this.componenFactoryResolver = componenFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    ToastService.prototype.appendToastCompToBody = function () {
        document.body.appendChild(this.toastDomElement);
    };
    ToastService.prototype.removeToastCompFromBody = function () {
        this.appRef.detachView(this.toastCompRef.hostView);
        this.toastCompRef.destroy();
    };
    ToastService.prototype.create = function (options) {
        var compFactory = this.componenFactoryResolver.resolveComponentFactory(_elements_toast_toast_component__WEBPACK_IMPORTED_MODULE_1__["ToastComponent"]);
        this.toastCompRef = compFactory.create(this.injector);
        this.toastCompRef.instance.message = options.message;
        this.toastCompRef.instance.delay = options.delay;
        this.toastCompRef.instance.type = options.type;
        this.toastCompRef.instance.position = options.position;
        this.appRef.attachView(this.toastCompRef.hostView);
        this.toastDomElement = this.toastCompRef.hostView.rootNodes[0];
    };
    ToastService.prototype.show = function (options) {
        var _this = this;
        this.create(options);
        this.appendToastCompToBody();
        setTimeout(function () {
            _this.removeToastCompFromBody();
        }, options.delay + 1000);
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/services/units.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/units.service.ts ***!
  \*******************************************/
/*! exports provided: UnitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsService", function() { return UnitsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitsService = /** @class */ (function () {
    function UnitsService(electron) {
        this.electron = electron;
    }
    UnitsService.prototype.getUnits = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('fetch-units');
            _this.electron.ipcRenderer.on('units-fetched', function (event, units) {
                res(units);
            });
        });
    };
    UnitsService.prototype.createUnit = function (unit) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('create-unit', unit);
            _this.electron.ipcRenderer.on('unit-created', function (event, unit) {
                res(unit);
            });
        });
    };
    UnitsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], UnitsService);
    return UnitsService;
}());



/***/ }),

/***/ "./src/app/services/views.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/views.service.ts ***!
  \*******************************************/
/*! exports provided: ViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsService", function() { return ViewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewsService = /** @class */ (function () {
    function ViewsService(electron) {
        this.electron = electron;
    }
    ViewsService.prototype.getViews = function (projectId) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('fetch-views', projectId);
            _this.electron.ipcRenderer.on('views-fetched', function (event, views) {
                res(views);
            });
        });
    };
    ViewsService.prototype.getViewById = function (id) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('fetch-view', id);
            _this.electron.ipcRenderer.on('view-fetched', function (event, view) {
                res(view);
            });
        });
    };
    ViewsService.prototype.createView = function (view, createOptions) {
        var _this = this;
        if (createOptions === void 0) { createOptions = true; }
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('create-view', view, createOptions);
            _this.electron.ipcRenderer.on('view-created', function (event, view) {
                res(view);
            });
        });
    };
    ViewsService.prototype.deleteView = function (viewId) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('delete-view', viewId);
            _this.electron.ipcRenderer.on('view-deleted', function () {
                res();
            });
        });
    };
    ViewsService.prototype.EditView = function (view) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.electron.ipcRenderer.send('update-view', view);
            _this.electron.ipcRenderer.on('view-updated', function (event, view) {
                res(view);
            });
        });
    };
    ViewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], ViewsService);
    return ViewsService;
}());



/***/ }),

/***/ "./src/app/store/colors.ts":
/*!*********************************!*\
  !*** ./src/app/store/colors.ts ***!
  \*********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colors = [
    '#f44336',
    '#ffebee',
    '#ffcdd2',
    '#ef9a9a',
    '#e57373',
    '#ef5350',
    '#f44336',
    '#e53935',
    '#d32f2f',
    '#c62828',
    '#b71c1c',
    '#ff8a80',
    '#ff5252',
    '#ff1744',
    '#d50000',
    '#e91e63',
    '#fce4ec',
    '#f8bbd0',
    '#f48fb1',
    '#f06292',
    '#ec407a',
    '#e91e63',
    '#d81b60',
    '#c2185b',
    '#ad1457',
    '#880e4f',
    '#ff80ab',
    '#ff4081',
    '#f50057',
    '#c51162',
    '#9c27b0',
    '#f3e5f5',
    '#e1bee7',
    '#ce93d8',
    '#ba68c8',
    '#ab47bc',
    '#9c27b0',
    '#8e24aa',
    '#7b1fa2',
    '#6a1b9a',
    '#4a148c',
    '#ea80fc',
    '#e040fb',
    '#d500f9',
    '#aa00ff',
    '#673ab7',
    '#ede7f6',
    '#d1c4e9',
    '#b39ddb',
    '#9575cd',
    '#7e57c2',
    '#673ab7',
    '#5e35b1',
    '#512da8',
    '#4527a0',
    '#311b92',
    '#b388ff',
    '#7c4dff',
    '#651fff',
    '#6200ea',
    '#3f51b5',
    '#e8eaf6',
    '#c5cae9',
    '#9fa8da',
    '#7986cb',
    '#5c6bc0',
    '#3f51b5',
    '#3949ab',
    '#303f9f',
    '#283593',
    '#1a237e',
    '#8c9eff',
    '#536dfe',
    '#3d5afe',
    '#304ffe',
    '#2196f3',
    '#e3f2fd',
    '#bbdefb',
    '#90caf9',
    '#64b5f6',
    '#42a5f5',
    '#2196f3',
    '#1e88e5',
    '#1976d2',
    '#1565c0',
    '#0d47a1',
    '#82b1ff',
    '#448aff',
    '#2979ff',
    '#2962ff',
    '#03a9f4',
    '#e1f5fe',
    '#b3e5fc',
    '#81d4fa',
    '#4fc3f7',
    '#29b6f6',
    '#03a9f4',
    '#039be5',
    '#0288d1',
    '#0277bd',
    '#01579b',
    '#80d8ff',
    '#40c4ff',
    '#00b0ff',
    '#0091ea',
    '#00bcd4',
    '#e0f7fa',
    '#b2ebf2',
    '#80deea',
    '#4dd0e1',
    '#26c6da',
    '#00bcd4',
    '#00acc1',
    '#0097a7',
    '#00838f',
    '#006064',
    '#84ffff',
    '#18ffff',
    '#00e5ff',
    '#00b8d4',
    '#009688',
    '#e0f2f1',
    '#b2dfdb',
    '#80cbc4',
    '#4db6ac',
    '#26a69a',
    '#009688',
    '#00897b',
    '#00796b',
    '#00695c',
    '#004d40',
    '#a7ffeb',
    '#64ffda',
    '#1de9b6',
    '#00bfa5',
    '#4caf50',
    '#e8f5e9',
    '#c8e6c9',
    '#a5d6a7',
    '#81c784',
    '#66bb6a',
    '#4caf50',
    '#43a047',
    '#388e3c',
    '#2e7d32',
    '#1b5e20',
    '#b9f6ca',
    '#69f0ae',
    '#00e676',
    '#00c853',
    '#8bc34a',
    '#f1f8e9',
    '#dcedc8',
    '#c5e1a5',
    '#aed581',
    '#9ccc65',
    '#8bc34a',
    '#7cb342',
    '#689f38',
    '#558b2f',
    '#33691e',
    '#ccff90',
    '#b2ff59',
    '#76ff03',
    '#64dd17',
    '#cddc39',
    '#f9fbe7',
    '#f0f4c3',
    '#e6ee9c',
    '#dce775',
    '#d4e157',
    '#cddc39',
    '#c0ca33',
    '#afb42b',
    '#9e9d24',
    '#827717',
    '#f4ff81',
    '#eeff41',
    '#c6ff00',
    '#aeea00',
    '#ffeb3b',
    '#fffde7',
    '#fff9c4',
    '#fff59d',
    '#fff176',
    '#ffee58',
    '#ffeb3b',
    '#fdd835',
    '#fbc02d',
    '#f9a825',
    '#f57f17',
    '#ffff8d',
    '#ffff00',
    '#ffea00',
    '#ffd600',
    '#ffc107',
    '#fff8e1',
    '#ffecb3',
    '#ffe082',
    '#ffd54f',
    '#ffca28',
    '#ffc107',
    '#ffb300',
    '#ffa000',
    '#ff8f00',
    '#ff6f00',
    '#ffe57f',
    '#ffd740',
    '#ffc400',
    '#ffab00',
    '#ff9800',
    '#fff3e0',
    '#ffe0b2',
    '#ffcc80',
    '#ffb74d',
    '#ffa726',
    '#ff9800',
    '#fb8c00',
    '#f57c00',
    '#ef6c00',
    '#e65100',
    '#ffd180',
    '#ffab40',
    '#ff9100',
    '#ff6d00',
    '#ff5722',
    '#fbe9e7',
    '#ffccbc',
    '#ffab91',
    '#ff8a65',
    '#ff7043',
    '#ff5722',
    '#f4511e',
    '#e64a19',
    '#d84315',
    '#bf360c',
    '#ff9e80',
    '#ff6e40',
    '#ff3d00',
    '#dd2c00',
    '#795548',
    '#efebe9',
    '#d7ccc8',
    '#bcaaa4',
    '#a1887f',
    '#8d6e63',
    '#795548',
    '#6d4c41',
    '#5d4037',
    '#4e342e',
    '#3e2723',
    '#9e9e9e',
    '#fafafa',
    '#f5f5f5',
    '#eeeeee',
    '#e0e0e0',
    '#bdbdbd',
    '#9e9e9e',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
    '#607d8b',
    '#eceff1',
    '#cfd8dc',
    '#b0bec5',
    '#90a4ae',
    '#78909c',
    '#607d8b',
    '#546e7a',
    '#455a64',
    '#37474f',
    '#263238'
];


/***/ }),

/***/ "./src/app/store/docs.ts":
/*!*******************************!*\
  !*** ./src/app/store/docs.ts ***!
  \*******************************/
/*! exports provided: docs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docs", function() { return docs; });
var docs = {
    functions: [{
            name: 'abs(x)',
            desc: 'Calculate the absolute value of a number.'
        },
        {
            name: 'add(x, y)',
            desc: 'Add two or more values, x + y.'
        },
        {
            name: 'cbrt(x [, allRoots])',
            desc: 'Calculate the cubic root of a value.'
        },
        {
            name: 'ceil(x)',
            desc: 'Round a value towards plus infinity If x is complex, both real and imaginary part are rounded towards plus infinity.'
        },
        {
            name: 'cube(x)',
            desc: 'Compute the cube of a value, x * x * x.'
        },
        {
            name: 'divide(x, y)',
            desc: 'Divide two values, x / y.'
        },
        {
            name: 'dotDivide(x, y)',
            desc: 'Divide two matrices element wise.'
        },
        {
            name: 'dotMultiply(x, y)',
            desc: 'Multiply two matrices element wise.'
        },
        {
            name: 'dotPow(x, y)',
            desc: 'Calculates the power of x to y element wise.'
        },
        {
            name: 'exp(x)',
            desc: 'Calculate the exponent of a value.'
        },
        {
            name: 'expm1(x)',
            desc: 'Calculate the value of subtracting 1 from the exponential value.'
        },
        {
            name: 'fix(x)',
            desc: 'Round a value towards zero.'
        },
        {
            name: 'floor(x)',
            desc: 'Round a value towards minus infinity.'
        },
        {
            name: 'gcd(a, b)',
            desc: 'Calculate the greatest common divisor for two or more values or arrays.'
        },
        {
            name: 'hypot(a, b, …)',
            desc: 'Calculate the hypotenusa of a list with values.'
        },
        {
            name: 'lcm(a, b)',
            desc: 'Calculate the least common multiple for two or more values or arrays.'
        },
        {
            name: 'log(x [, base])',
            desc: 'Calculate the logarithm of a value.'
        },
        {
            name: 'log10(x)',
            desc: 'Calculate the 10-base logarithm of a value.'
        },
        {
            name: 'log1p(x)',
            desc: 'Calculate the logarithm of a value+1.'
        },
        {
            name: 'log2(x)',
            desc: 'Calculate the 2-base of a value.'
        },
        {
            name: 'mod(x, y)',
            desc: 'Calculates the modulus, the remainder of an integer division.'
        },
        {
            name: 'multiply(x, y)',
            desc: 'Multiply two or more values, x * y.'
        },
        {
            name: 'norm(x [, p])',
            desc: 'Calculate the norm of a number, vector or matrix.'
        },
        {
            name: 'nthRoot(a)',
            desc: 'Calculate the nth root of a value.'
        },
        {
            name: 'nthRoots(x)',
            desc: 'Calculate the nth roots of a value.'
        },
        {
            name: 'pow(x, y)',
            desc: 'Calculates the power of x to y, x ^ y.'
        },
        {
            name: 'round(x [, n])',
            desc: 'Round a value towards the nearest integer.'
        },
        {
            name: 'sign(x)',
            desc: 'Compute the sign of a value.'
        },
        {
            name: 'sqrt(x)',
            desc: 'Calculate the square root of a value.'
        },
        {
            name: 'square(x)',
            desc: 'Compute the square of a value, x * x.'
        },
        {
            name: 'subtract(x, y)',
            desc: 'Subtract two values, x - y.'
        },
        {
            name: 'unaryMinus(x)',
            desc: 'Inverse the sign of a value, apply a unary minus operation.'
        },
        {
            name: 'unaryPlus(x)',
            desc: 'Unary plus operation.'
        },
        {
            name: 'xgcd(a, b)',
            desc: 'Calculate the extended greatest common divisor for two values.'
        }
    ],
    units: [{
            base: 'Length',
            unit: 'meter (m), inch (in), foot (ft), yard (yd), mile (mi), link (li), rod (rd), chain (ch), angstrom, mil'
        },
        {
            base: 'Surface area',
            unit: 'm2, sqin, sqft, sqyd, sqmi, sqrd, sqch, sqmil, acre, hectare'
        },
        {
            base: 'Volume',
            unit: 'm3, litre (l, L, lt, liter), cc, cuin, cuft, cuyd, teaspoon, tablespoon'
        },
        {
            base: 'Liquid volume',
            unit: 'minim (min), fluiddram (fldr), fluidounce (floz), gill (gi), cup (cp), pint (pt), quart (qt), gallon (gal), beerbarrel (bbl), oilbarrel (obl), hogshead, drop (gtt)'
        },
        {
            base: 'Angles',
            unit: 'rad (radian), deg (degree), grad (gradian), cycle, arcsec (arcsecond), arcmin (arcminute)'
        },
        {
            base: 'Time',
            unit: 'second (s, secs, seconds), minute (mins, minutes), hour (h, hr, hrs, hours), day (days), week (weeks), month (months), year (years), decade (decades), century (centuries), millennium (millennia)'
        },
        {
            base: 'Frequency',
            unit: 'hertz (Hz)'
        },
        {
            base: 'Mass',
            unit: 'gram(g), tonne, ton, grain (gr), dram (dr), ounce (oz), poundmass (lbm, lb, lbs), hundredweight (cwt), stick, stone'
        },
        {
            base: 'Electric current',
            unit: 'ampere (A)'
        },
        {
            base: 'Temperature',
            unit: 'kelvin (K), celsius (degC), fahrenheit (degF), rankine (degR)'
        },
        {
            base: 'Amount of substance',
            unit: 'mole (mol)'
        },
        {
            base: 'Luminous intensity',
            unit: 'candela (cd)'
        },
        {
            base: 'Force',
            unit: 'newton (N), dyne (dyn), poundforce (lbf), kip'
        },
        {
            base: 'Energy',
            unit: 'joule (J), erg, Wh, BTU, electronvolt (eV)'
        },
        {
            base: 'Power',
            unit: 'watt (W), hp'
        },
        {
            base: 'Pressure',
            unit: 'Pa, psi, atm, torr, bar, mmHg, mmH2O, cmH2O'
        },
        {
            base: 'Electricity and magnetism',
            unit: 'ampere (A), coulomb (C), watt (W), volt (V), ohm, farad (F), weber (Wb), tesla (T), henry (H), siemens (S), electronvolt (eV)'
        },
        {
            base: 'Binary',
            unit: 'bit (b), byte (B)'
        }
    ],
    prefixes: [
        [{
                name: 'deca',
                abbreviation: 'da',
                value: '1e1'
            },
            {
                name: 'hecto',
                abbreviation: 'h',
                value: '1e2'
            },
            {
                name: 'kilo',
                abbreviation: 'k',
                value: '1e3'
            },
            {
                name: 'mega',
                abbreviation: 'M',
                value: '1e6'
            },
            {
                name: 'giga',
                abbreviation: 'G',
                value: '1e9'
            },
            {
                name: 'tera',
                abbreviation: 'T',
                value: '1e12'
            },
            {
                name: 'peta',
                abbreviation: 'P',
                value: '1e15'
            },
            {
                name: 'exa',
                abbreviation: 'E',
                value: '1e18'
            },
            {
                name: 'zetta',
                abbreviation: 'Z',
                value: '1e21'
            },
            {
                name: 'yotta',
                abbreviation: 'Y',
                value: '1e24'
            }
        ],
        [{
                name: 'deci',
                abbreviation: 'd',
                value: '1e-1'
            },
            {
                name: 'centi',
                abbreviation: 'c',
                value: '1e-2'
            },
            {
                name: 'milli',
                abbreviation: 'm',
                value: '1e-3'
            },
            {
                name: 'micro',
                abbreviation: 'u',
                value: '1e-6'
            },
            {
                name: 'nano',
                abbreviation: 'n',
                value: '1e-9'
            },
            {
                name: 'pico',
                abbreviation: 'p',
                value: '1e-12'
            },
            {
                name: 'femto',
                abbreviation: 'f',
                value: '1e-15'
            },
            {
                name: 'atto',
                abbreviation: 'a',
                value: '1e-18'
            },
            {
                name: 'zepto',
                abbreviation: 'z',
                value: '1e-21'
            },
            {
                name: 'yocto',
                abbreviation: 'y',
                value: '1e-24'
            }
        ],
        [{
                name: 'kibi',
                abbreviation: 'Ki',
                value: '1024'
            },
            {
                name: 'mebi',
                abbreviation: 'Mi',
                value: '1024^2'
            },
            {
                name: 'gibi',
                abbreviation: 'Gi',
                value: '1024^3'
            },
            {
                name: 'tebi',
                abbreviation: 'Ti',
                value: '1024^4'
            },
            {
                name: 'pebi',
                abbreviation: 'Pi',
                value: '1024^5'
            },
            {
                name: 'exi',
                abbreviation: 'Ei',
                value: '1024^6'
            },
            {
                name: 'zebi',
                abbreviation: 'Zi',
                value: '1024^7'
            },
            {
                name: 'yobi',
                abbreviation: 'Yi',
                value: '1024^8'
            }
        ],
        [{
                name: 'kilo',
                abbreviation: 'k',
                value: '1e3'
            },
            {
                name: 'mega',
                abbreviation: 'M',
                value: '1e6'
            },
            {
                name: 'giga',
                abbreviation: 'G',
                value: '1e9'
            },
            {
                name: 'tera',
                abbreviation: 'T',
                value: '1e12'
            },
            {
                name: 'peta',
                abbreviation: 'P',
                value: '1e15'
            },
            {
                name: 'exa',
                abbreviation: 'E',
                value: '1e18'
            },
            {
                name: 'zetta',
                abbreviation: 'Z',
                value: '1e21'
            },
            {
                name: 'yotta',
                abbreviation: 'Y',
                value: '1e24'
            }
        ]
    ],
    universal_constants: [
        [{
                name: 'speedOfLight',
                symbol: 'c',
                value: '299792458',
                unit: 'm · s-1'
            },
            {
                name: 'gravitationConstant',
                symbol: 'G',
                value: '6.6738480e-11',
                unit: 'm3 · kg-1 · s-2'
            },
            {
                name: 'planckConstant',
                symbol: 'h',
                value: '6.626069311e-34',
                unit: 'J · s'
            },
            {
                name: 'reducedPlanckConstant',
                symbol: 'h',
                value: '1.05457172647e-34',
                unit: 'J · s'
            }
        ],
        [{
                name: 'magneticConstant',
                symbol: 'μ0',
                value: '1.2566370614e-6',
                unit: 'N · A-2'
            },
            {
                name: 'electricConstant',
                symbol: 'ε0',
                value: '8.854187817e-12',
                unit: 'F · m-1'
            },
            {
                name: 'vacuumImpedance',
                symbol: 'Z0',
                value: '376.730313461',
                unit: '&ohm;'
            },
            {
                name: 'coulomb',
                symbol: 'κ',
                value: '8.9875517873681764e9',
                unit: 'N · m2 · C-2'
            },
            {
                name: 'elementaryCharge',
                symbol: 'e',
                value: '1.60217656535e-19',
                unit: 'C'
            },
            {
                name: 'bohrMagneton',
                symbol: 'μB',
                value: '9.2740096820e-24',
                unit: 'J · T-1'
            },
            {
                name: 'conductanceQuantum',
                symbol: 'G0',
                value: '7.748091734625e-5',
                unit: 'S'
            },
            {
                name: 'inverseConductanceQuantum',
                symbol: 'G0-1',
                value: '12906.403721742',
                unit: '&ohm;'
            },
            {
                name: 'magneticFluxQuantum',
                symbol: 'f0',
                value: '2.06783375846e-15',
                unit: 'Wb'
            },
            {
                name: 'nuclearMagneton',
                symbol: 'μN',
                value: '5.0507835311e-27',
                unit: 'J · T-1'
            },
            {
                name: 'klitzing',
                symbol: 'RK',
                value: '25812.807443484',
                unit: '&ohm;'
            }
        ],
        [{
                name: 'bohrRadius',
                symbol: 'a0',
                value: '5.291772109217e-11',
                unit: 'm'
            },
            {
                name: 'classicalElectronRadius',
                symbol: 're',
                value: '2.817940326727e-15',
                unit: 'm'
            },
            {
                name: 'electronMass',
                symbol: 'me',
                value: '9.1093829140e-31',
                unit: 'kg'
            },
            {
                name: 'fermiCoupling',
                symbol: 'GF',
                value: '1.1663645e-5',
                unit: 'GeV-2'
            },
            {
                name: 'fineStructure',
                symbol: 'α',
                value: '7.297352569824e-3',
                unit: '-'
            },
            {
                name: 'hartreeEnergy',
                symbol: 'Eh',
                value: '4.3597443419e-18',
                unit: 'J'
            },
            {
                name: 'protonMass',
                symbol: 'mp',
                value: '1.67262177774e-27',
                unit: 'kg'
            },
            {
                name: 'deuteronMass',
                symbol: 'md',
                value: '3.3435830926e-27',
                unit: 'kg'
            },
            {
                name: 'neutronMass',
                symbol: 'mn',
                value: '1.6749271613e-27',
                unit: 'kg'
            },
            {
                name: 'quantumOfCirculation',
                symbol: 'h / (2me)',
                value: '3.636947552024e-4',
                unit: 'm2 · s-1'
            },
            {
                name: 'rydberg',
                symbol: 'R∞',
                value: '10973731.56853955',
                unit: 'm-1'
            },
            {
                name: 'thomsonCrossSection',
                symbol: ' ',
                value: '6.65245873413e-29',
                unit: 'm2'
            },
            {
                name: 'weakMixingAngle',
                symbol: ' ',
                value: '0.222321',
                unit: '-'
            },
            {
                name: 'efimovFactor',
                symbol: ' ',
                value: '22.7',
                unit: '-'
            }
        ],
        [{
                name: 'atomicMass',
                symbol: 'mu',
                value: '1.66053892173e-27',
                unit: 'kg'
            },
            {
                name: 'avogadro',
                symbol: 'NA',
                value: '6.0221412927e23',
                unit: 'mol-1'
            },
            {
                name: 'boltzmann',
                symbol: 'k',
                value: '1.380648813e-23',
                unit: 'J · K-1'
            },
            {
                name: 'faraday',
                symbol: 'F',
                value: '96485.336521',
                unit: 'C · mol-1'
            },
            {
                name: 'firstRadiation',
                symbol: 'c1',
                value: '3.7417715317e-16',
                unit: 'W · m2'
            },
            {
                name: 'loschmidt',
                symbol: 'n0',
                value: '2.686780524e25',
                unit: 'm-3'
            },
            {
                name: 'gasConstant',
                symbol: 'R',
                value: '8.314462175',
                unit: 'J · K-1 · mol-1'
            },
            {
                name: 'molarPlanckConstant',
                symbol: 'NA · h',
                value: '3.990312717628e-10',
                unit: 'J · s · mol-1'
            },
            {
                name: 'molarVolume',
                symbol: 'Vm',
                value: '2.241396820e-10',
                unit: 'm3 · mol-1'
            },
            {
                name: 'sackurTetrode',
                symbol: ' ',
                value: '-1.164870823',
                unit: '-'
            },
            {
                name: 'secondRadiation',
                symbol: 'c2',
                value: '1.438777013e-2',
                unit: 'm · K'
            },
            {
                name: 'stefanBoltzmann',
                symbol: 'σ',
                value: '5.67037321e-8',
                unit: 'W · m-2 · K-4'
            },
            {
                name: 'wienDisplacement',
                symbol: 'b',
                value: '2.897772126e-3',
                unit: 'm · K'
            }
        ],
        [{
                name: 'molarMass',
                symbol: 'Mu',
                value: '1e-3',
                unit: 'kg · mol-1'
            },
            {
                name: 'molarMassC12',
                symbol: 'M(12C)',
                value: '1.2e-2',
                unit: 'kg · mol-1'
            },
            {
                name: 'gravity',
                symbol: 'gn',
                value: '9.80665',
                unit: 'm · s-2'
            },
            {
                name: 'atm',
                symbol: 'atm',
                value: '101325',
                unit: 'Pa'
            }
        ],
        [{
                name: 'planckLength',
                symbol: 'lP',
                value: '1.61619997e-35',
                unit: 'm'
            },
            {
                name: 'planckMass',
                symbol: 'mP',
                value: '2.1765113e-8',
                unit: 'kg'
            },
            {
                name: 'planckTime',
                symbol: 'tP',
                value: '5.3910632e-44',
                unit: 's'
            },
            {
                name: 'planckCharge',
                symbol: 'qP',
                value: '1.87554595641e-18',
                unit: 'C'
            },
            {
                name: 'planckTemperature',
                symbol: 'TP',
                value: '1.41683385e+32',
                unit: 'K'
            }
        ]
    ],
    adopted_values: [{
            name: 'molarMass',
            symbol: 'Mu',
            value: '1e-3',
            unit: 'kg · mol-1'
        },
        {
            name: 'molarMassC12',
            symbol: 'M(12C)',
            value: '1.2e-2',
            unit: 'kg · mol-1'
        },
        {
            name: 'gravity',
            symbol: 'gn',
            value: '9.80665',
            unit: 'm · s-2'
        },
        {
            name: 'atm',
            symbol: 'atm',
            value: '101325',
            unit: 'Pa'
        }
    ]
};


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pc\Projects\JS\Curve\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map