(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/components/manage-note/manage-note.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/components/manage-note/manage-note.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons>\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{mode === manageModes.ADD ? 'Add' : 'Edit'}} Note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home\" padding>\n  <form [formGroup]=\"noteForm\" (submit)=\"submitForm()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Title</ion-label>\n        <ion-input formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Description</ion-label>\n        <ion-textarea formControlName=\"description\" rows=\"5\"></ion-textarea>\n      </ion-item>\n      <ion-button type=\"submit\" expand=\"block\" fill=\"outline\">\n        Save\n      </ion-button>\n    </ion-list>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/components/manage-note/manage-note.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/components/manage-note/manage-note.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9tYW5hZ2Utbm90ZS9tYW5hZ2Utbm90ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/components/manage-note/manage-note.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/components/manage-note/manage-note.component.ts ***!
  \**********************************************************************/
/*! exports provided: NoteManageModes, ManageNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteManageModes", function() { return NoteManageModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageNoteComponent", function() { return ManageNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var NoteManageModes;
(function (NoteManageModes) {
    NoteManageModes["ADD"] = "add";
    NoteManageModes["EDIT"] = "edit";
})(NoteManageModes || (NoteManageModes = {}));
var ManageNoteComponent = /** @class */ (function () {
    function ManageNoteComponent(modalController, fb) {
        this.modalController = modalController;
        this.fb = fb;
        this.mode = NoteManageModes.ADD;
        this.manageModes = NoteManageModes;
    }
    ManageNoteComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ManageNoteComponent.prototype.initForm = function () {
        this.noteForm = this.fb.group({
            title: ['', []],
            description: ['', []]
        });
        if (this.note) {
            this.noteForm.patchValue(this.note);
        }
    };
    ManageNoteComponent.prototype.submitForm = function () {
        var params = this.noteForm.value;
        if (this.mode === this.manageModes.EDIT) {
            params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.note, params);
        }
        this.modalController.dismiss(params);
    };
    ManageNoteComponent.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    ManageNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-note',
            template: __webpack_require__(/*! ./manage-note.component.html */ "./src/app/home/components/manage-note/manage-note.component.html"),
            styles: [__webpack_require__(/*! ./manage-note.component.scss */ "./src/app/home/components/manage-note/manage-note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ManageNoteComponent);
    return ManageNoteComponent;
}());



/***/ }),

/***/ "./src/app/home/components/notes-filters-popover/notes-filters-popover.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/home/components/notes-filters-popover/notes-filters-popover.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list class=\"notes-filter\">\n  <ion-radio-group>\n    <ion-item (click)=\"selectFilter(filters.Active)\">\n      <ion-label>Active</ion-label>\n      <ion-radio [checked]=\"selectedFilter == filters.Active\" slot=\"start\"></ion-radio>\n    </ion-item>\n    <ion-item (click)=\"selectFilter(filters.Archived)\">\n      <ion-label>Archived</ion-label>\n      <ion-radio [checked]=\"selectedFilter == filters.Archived\" slot=\"start\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>"

/***/ }),

/***/ "./src/app/home/components/notes-filters-popover/notes-filters-popover.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/components/notes-filters-popover/notes-filters-popover.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notes-filter {\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haHNhbmF5YXovRGVza3RvcC9QZXJzb25hbC92aWRlb3MtYmxvZ3MtdGFsa3MvcGFja3QvaW9ub3Rlcy9zcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ub3Rlcy1maWx0ZXJzLXBvcG92ZXIvbm90ZXMtZmlsdGVycy1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvbm90ZXMtZmlsdGVycy1wb3BvdmVyL25vdGVzLWZpbHRlcnMtcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rlcy1maWx0ZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/components/notes-filters-popover/notes-filters-popover.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/components/notes-filters-popover/notes-filters-popover.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NotesFiltersPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesFiltersPopoverComponent", function() { return NotesFiltersPopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_constants_notes_filters_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/constants/notes-filters.enum */ "./src/app/core/constants/notes-filters.enum.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var NotesFiltersPopoverComponent = /** @class */ (function () {
    function NotesFiltersPopoverComponent(popoverController) {
        this.popoverController = popoverController;
        this.selectedFilter = src_app_core_constants_notes_filters_enum__WEBPACK_IMPORTED_MODULE_2__["NotesFilters"].Active;
        this.filters = src_app_core_constants_notes_filters_enum__WEBPACK_IMPORTED_MODULE_2__["NotesFilters"];
    }
    NotesFiltersPopoverComponent.prototype.ngOnInit = function () { };
    NotesFiltersPopoverComponent.prototype.selectFilter = function (filter) {
        this.selectedFilter = filter;
        this.popoverController.dismiss(filter);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NotesFiltersPopoverComponent.prototype, "selectedFilter", void 0);
    NotesFiltersPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes-filters-popover',
            template: __webpack_require__(/*! ./notes-filters-popover.component.html */ "./src/app/home/components/notes-filters-popover/notes-filters-popover.component.html"),
            styles: [__webpack_require__(/*! ./notes-filters-popover.component.scss */ "./src/app/home/components/notes-filters-popover/notes-filters-popover.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], NotesFiltersPopoverComponent);
    return NotesFiltersPopoverComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-angular */ "./node_modules/mobx-angular/dist/mobx-angular.js");
/* harmony import */ var _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manage-note/manage-note.component */ "./src/app/home/components/manage-note/manage-note.component.ts");
/* harmony import */ var _components_notes_filters_popover_notes_filters_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/notes-filters-popover/notes-filters-popover.component */ "./src/app/home/components/notes-filters-popover/notes-filters-popover.component.ts");










var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                mobx_angular__WEBPACK_IMPORTED_MODULE_7__["MobxAngularModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_8__["ManageNoteComponent"],
                _components_notes_filters_popover_notes_filters_popover_component__WEBPACK_IMPORTED_MODULE_9__["NotesFiltersPopoverComponent"]
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_8__["ManageNoteComponent"],
                _components_notes_filters_popover_notes_filters_popover_component__WEBPACK_IMPORTED_MODULE_9__["NotesFiltersPopoverComponent"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Notes</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showFilters($event)\">\n        <ion-icon name=\"funnel\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home\">\n  <ion-list *mobxAutorun class=\"home__notes\">\n    <ion-card [ngClass]=\"note.archived ? 'home__notes__item--archived' : ''\" class=\"home__notes__item\" *ngFor=\"let note of store.filteredNotes\">\n      <ion-item>\n        <ion-label>{{note.title}}</ion-label>\n      </ion-item>\n    \n      <ion-card-content>\n        {{note.description}}\n        <div class=\"home__notes__item__actions\">\n          <ion-button (click)=\"editNote(note)\" color=\"dark\" fill=\"outline\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-button>\n          <ion-button color=\"danger\" fill=\"outline\" (click)=\"archiveNote(note)\">\n            <ion-icon name=\"trash\">\n            </ion-icon>\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"warning\" (click)=\"addNewNote()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home__notes__item {\n  border-left: 4px solid var(--ion-color-primary); }\n  .home__notes__item--archived {\n    border-left-color: var(--ion-color-danger); }\n  .home__notes__item__actions {\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haHNhbmF5YXovRGVza3RvcC9QZXJzb25hbC92aWRlb3MtYmxvZ3MtdGFsa3MvcGFja3QvaW9ub3Rlcy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSwrQ0FBK0MsRUFBQTtFQUMvQztJQUNFLDBDQUEwQyxFQUFBO0VBRTVDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAmX19ub3RlcyB7XG4gICAgJl9faXRlbSB7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICYtLWFyY2hpdmVkIHtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgfVxuICAgICAgJl9fYWN0aW9ucyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/notes.service */ "./src/app/core/services/notes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manage-note/manage-note.component */ "./src/app/home/components/manage-note/manage-note.component.ts");
/* harmony import */ var _components_notes_filters_popover_notes_filters_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notes-filters-popover/notes-filters-popover.component */ "./src/app/home/components/notes-filters-popover/notes-filters-popover.component.ts");






var HomePage = /** @class */ (function () {
    function HomePage(store, modalController, popoverController) {
        this.store = store;
        this.modalController = modalController;
        this.popoverController = popoverController;
    }
    HomePage.prototype.ngOnInit = function () {
        this.store.addNewNote({
            title: 'title 1',
            description: 'description 1'
        });
        this.store.addNewNote({
            title: 'title 2',
            description: 'description 2'
        });
        this.store.addNewNote({
            title: 'title 3',
            description: 'description 3'
        });
    };
    HomePage.prototype.showFilters = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_notes_filters_popover_notes_filters_popover_component__WEBPACK_IMPORTED_MODULE_5__["NotesFiltersPopoverComponent"],
                            componentProps: {
                                selectedFilter: this.store.notesFilter
                            },
                            event: ev
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onDidDismiss()];
                    case 3:
                        response = _a.sent();
                        if (response.data !== undefined) {
                            this.store.setFilter(response.data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.addNewNote = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, response, note;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_4__["ManageNoteComponent"],
                            componentProps: {
                                mode: _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteManageModes"].ADD,
                                note: null
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        response = _a.sent();
                        note = response.data;
                        if (note) {
                            this.store.addNewNote(note);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.editNote = function (note) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, response, updatedNote;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_4__["ManageNoteComponent"],
                            componentProps: {
                                mode: _components_manage_note_manage_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteManageModes"].EDIT,
                                note: note
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        response = _a.sent();
                        updatedNote = response.data;
                        if (updatedNote) {
                            this.store.updateNote(updatedNote);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.archiveNote = function (note) {
        this.store.archiveNote(note);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map