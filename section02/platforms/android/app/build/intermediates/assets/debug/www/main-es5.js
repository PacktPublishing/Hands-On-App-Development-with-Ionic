function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var mobx_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! mobx-angular */
    "./node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
    /* harmony import */


    var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! mobx */
    "./node_modules/mobx/lib/mobx.module.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/services/app-startup.service */
    "./src/app/core/services/app-startup.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _core_constants_store_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./core/constants/store-config */
    "./src/app/core/constants/store-config.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__["configure"])({
      enforceActions: 'always'
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__["SQLite"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_15__["PhotoViewer"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__["LocalNotifications"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        multi: true,
        deps: [_core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__["AppStartupService"]],
        useFactory: _core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__["startupServiceFactory"]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], mobx_angular__WEBPACK_IMPORTED_MODULE_8__["MobxAngularModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot({
        name: _core_constants_store_config__WEBPACK_IMPORTED_MODULE_13__["STORE_CONFIG"].DATABASE_NAME,
        driverOrder: ['indexeddb', 'websql']
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], mobx_angular__WEBPACK_IMPORTED_MODULE_8__["MobxAngularModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          entryComponents: [],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], mobx_angular__WEBPACK_IMPORTED_MODULE_8__["MobxAngularModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot({
            name: _core_constants_store_config__WEBPACK_IMPORTED_MODULE_13__["STORE_CONFIG"].DATABASE_NAME,
            driverOrder: ['indexeddb', 'websql']
          })],
          providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__["SQLite"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_15__["PhotoViewer"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__["LocalNotifications"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            multi: true,
            deps: [_core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__["AppStartupService"]],
            useFactory: _core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__["startupServiceFactory"]
          }, {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/constants/notes-filters.enum.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/constants/notes-filters.enum.ts ***!
    \******************************************************/

  /*! exports provided: NotesFilters */

  /***/
  function srcAppCoreConstantsNotesFiltersEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesFilters", function () {
      return NotesFilters;
    });

    var NotesFilters;

    (function (NotesFilters) {
      NotesFilters["ACTIVE"] = "active";
      NotesFilters["ARCHIVED"] = "archived";
    })(NotesFilters || (NotesFilters = {}));
    /***/

  },

  /***/
  "./src/app/core/constants/store-config.ts":
  /*!************************************************!*\
    !*** ./src/app/core/constants/store-config.ts ***!
    \************************************************/

  /*! exports provided: STORE_CONFIG */

  /***/
  function srcAppCoreConstantsStoreConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STORE_CONFIG", function () {
      return STORE_CONFIG;
    });

    var STORE_CONFIG = {
      DATABASE_NAME: 'ionotes-db',
      DATABASE_LOCATION: 'default'
    };
    /***/
  },

  /***/
  "./src/app/core/models/note.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/models/note.model.ts ***!
    \*******************************************/

  /*! exports provided: Note */

  /***/
  function srcAppCoreModelsNoteModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Note", function () {
      return Note;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! mobx-angular */
    "./node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");

    var Note = /*#__PURE__*/function () {
      function Note(note) {
        _classCallCheck(this, Note);

        this.Id = note.Id ? note.Id : new Date().getTime();
        this.title = note.title ? note.title : '';
        this.description = note.description ? note.description : '';
        this.setArchived(note.archived !== undefined ? note.archived : false);
        this.setImagePath(note.imagePath ? note.imagePath : '');
        this.setReminderTime(note.reminderTime ? note.reminderTime : '');
      }

      _createClass(Note, [{
        key: "setArchived",
        value: function setArchived(value) {
          this.archived = value;
        }
      }, {
        key: "setImagePath",
        value: function setImagePath(imagePath) {
          this.imagePath = imagePath;
        }
      }, {
        key: "setReminderTime",
        value: function setReminderTime(reminderTime) {
          this.reminderTime = reminderTime;
        }
      }]);

      return Note;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_1__["observable"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Note.prototype, "archived", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_1__["observable"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Note.prototype, "imagePath", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_1__["observable"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Note.prototype, "reminderTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_1__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], Note.prototype, "setArchived", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_1__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], Note.prototype, "setImagePath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_1__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], Note.prototype, "setReminderTime", null);
    /***/
  },

  /***/
  "./src/app/core/services/app-startup.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/services/app-startup.service.ts ***!
    \******************************************************/

  /*! exports provided: AppStartupService, startupServiceFactory */

  /***/
  function srcAppCoreServicesAppStartupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppStartupService", function () {
      return AppStartupService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startupServiceFactory", function () {
      return startupServiceFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notes.service */
    "./src/app/core/services/notes.service.ts");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/core/services/storage.service.ts");

    var AppStartupService = /*#__PURE__*/function () {
      function AppStartupService(storageService, notesService) {
        _classCallCheck(this, AppStartupService);

        this.storageService = storageService;
        this.notesService = notesService;
      }

      _createClass(AppStartupService, [{
        key: "doStartupTasks",
        value: function doStartupTasks() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storageService.init();

                  case 2:
                    this.notesService.initNotes();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppStartupService;
    }();

    AppStartupService.ɵfac = function AppStartupService_Factory(t) {
      return new (t || AppStartupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]));
    };

    AppStartupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppStartupService,
      factory: AppStartupService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppStartupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }, {
          type: _notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]
        }];
      }, null);
    })();

    function startupServiceFactory(startupService) {
      return function () {
        return startupService.doStartupTasks();
      };
    }
    /***/

  },

  /***/
  "./src/app/core/services/local-storage.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/services/local-storage.service.ts ***!
    \********************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppCoreServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService(storage) {
        _classCallCheck(this, LocalStorageService);

        this.storage = storage;
      }

      _createClass(LocalStorageService, [{
        key: "getAll",
        value: function getAll(itemType) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var data, items;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.storage.get(itemType);

                  case 2:
                    data = _context2.sent;
                    items = JSON.parse(data || '[]');
                    return _context2.abrupt("return", items);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "create",
        value: function create(itemType, keys, values) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var data, items, obj;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storage.get(itemType);

                  case 2:
                    data = _context3.sent;
                    items = JSON.parse(data || '[]');
                    obj = {};
                    obj.Id = new Date().getTime();
                    keys.map(function (key, index) {
                      obj[key] = values[index];
                    });
                    items.push(obj);
                    _context3.next = 10;
                    return this.storage.set(itemType, JSON.stringify(items));

                  case 10:
                    return _context3.abrupt("return", Object.assign(Object.assign({}, obj), {
                      insertId: obj.Id
                    }));

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getById",
        value: function getById(itemType, id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var data, items, item;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.storage.get(itemType);

                  case 2:
                    data = _context4.sent;
                    items = JSON.parse(data || '[]');
                    item = items.find(function (it) {
                      return it.Id === id;
                    });
                    return _context4.abrupt("return", item);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "update",
        value: function update(itemType, id, keys, values) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var data, items, itemIndex;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.storage.get(itemType);

                  case 2:
                    data = _context5.sent;
                    items = JSON.parse(data || '[]');
                    itemIndex = items.findIndex(function (item) {
                      return item.Id === id;
                    });
                    keys.map(function (key, ind) {
                      items[itemIndex][key] = values[ind];
                    });
                    this.storage.set(itemType, JSON.stringify(items));
                    return _context5.abrupt("return", items[itemIndex]);

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
      return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]));
    };

    LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LocalStorageService,
      factory: LocalStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/notes.service.ts":
  /*!************************************************!*\
    !*** ./src/app/core/services/notes.service.ts ***!
    \************************************************/

  /*! exports provided: NotesService */

  /***/
  function srcAppCoreServicesNotesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesService", function () {
      return NotesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mobx-angular */
    "./node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
    /* harmony import */


    var _models_note_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/note.model */
    "./src/app/core/models/note.model.ts");
    /* harmony import */


    var _constants_notes_filters_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../constants/notes-filters.enum */
    "./src/app/core/constants/notes-filters.enum.ts");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/core/services/storage.service.ts");

    var NotesService = /*#__PURE__*/function (_storage_service__WEB) {
      _inherits(NotesService, _storage_service__WEB);

      var _super2 = _createSuper(NotesService);

      function NotesService() {
        var _this2;

        _classCallCheck(this, NotesService);

        _this2 = _super2.apply(this, arguments);
        _this2.tableName = 'notes';
        return _this2;
      }

      _createClass(NotesService, [{
        key: "initNotes",
        value: function initNotes() {
          this.notes = [];
          this.filter = _constants_notes_filters_enum__WEBPACK_IMPORTED_MODULE_4__["NotesFilters"].ACTIVE;
          this.getAllNotes();
        }
      }, {
        key: "getAllNotes",
        value: function getAllNotes() {
          var _this3 = this;

          var _super = Object.create(null, {
            getAll: {
              get: function get() {
                return _get(_getPrototypeOf(NotesService.prototype), "getAll", _this3);
              }
            }
          });

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var notes;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _super.getAll.call(this, this.tableName);

                  case 2:
                    notes = _context6.sent;
                    this.setNotes(notes.map(function (note) {
                      return new _models_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"](note);
                    }));

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "setNotes",
        value: function setNotes(notes) {
          this.notes = notes;
          console.log('notes set', this.notes);
        }
      }, {
        key: "setFilter",
        value: function setFilter(filter) {
          this.filter = filter;
        }
      }, {
        key: "archiveNote",
        value: function archiveNote(note) {
          var _this4 = this;

          var _super = Object.create(null, {
            update: {
              get: function get() {
                return _get(_getPrototypeOf(NotesService.prototype), "update", _this4);
              }
            }
          });

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    note.setArchived(true);
                    _context7.next = 3;
                    return _super.update.call(this, this.tableName, note.Id, ['archived'], [note.archived ? 1 : 0]);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "createNote",
        value: function createNote(note) {
          var _this5 = this;

          var _super = Object.create(null, {
            create: {
              get: function get() {
                return _get(_getPrototypeOf(NotesService.prototype), "create", _this5);
              }
            },
            getById: {
              get: function get() {
                return _get(_getPrototypeOf(NotesService.prototype), "getById", _this5);
              }
            }
          });

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var response, savedNote;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return _super.create.call(this, this.tableName, ['title', 'description', 'archived', 'imagePath', 'reminderTime'], [note.title, note.description, note.archived ? 1 : 0, note.imagePath ? note.imagePath : '', note.reminderTime ? note.reminderTime : '']);

                  case 2:
                    response = _context8.sent;
                    _context8.next = 5;
                    return _super.getById.call(this, this.tableName, response.insertId);

                  case 5:
                    savedNote = _context8.sent;
                    this.setNotes([].concat(_toConsumableArray(this.notes), [new _models_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"](savedNote)]));
                    return _context8.abrupt("return", savedNote);

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "updateNote",
        value: function updateNote(note) {
          var _this6 = this;

          var _super = Object.create(null, {
            update: {
              get: function get() {
                return _get(_getPrototypeOf(NotesService.prototype), "update", _this6);
              }
            },
            getById: {
              get: function get() {
                return _get(_getPrototypeOf(NotesService.prototype), "getById", _this6);
              }
            }
          });

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var savedNote;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return _super.update.call(this, this.tableName, note.Id, ['title', 'description', 'archived', 'imagePath', 'reminderTime'], [note.title, note.description, note.archived ? 1 : 0, note.imagePath ? note.imagePath : '', note.reminderTime ? note.reminderTime : '']);

                  case 2:
                    _context9.next = 4;
                    return _super.getById.call(this, this.tableName, note.Id);

                  case 4:
                    savedNote = _context9.sent;
                    this.setNote(new _models_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"](savedNote));
                    return _context9.abrupt("return", savedNote);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "setNote",
        value: function setNote(note) {
          for (var i = 0, len = this.notes.length; i < len; ++i) {
            if (note.Id === this.notes[i].Id) {
              this.notes[i] = note;
              break;
            }
          }
        }
      }, {
        key: "archivedNotesCount",
        get: function get() {
          return this.notes.filter(function (note) {
            return !!note.archived;
          }).length;
        }
      }, {
        key: "filteredNotes",
        get: function get() {
          switch (this.filter) {
            case _constants_notes_filters_enum__WEBPACK_IMPORTED_MODULE_4__["NotesFilters"].ACTIVE:
              return this.notes.filter(function (note) {
                return !note.archived;
              });

            case _constants_notes_filters_enum__WEBPACK_IMPORTED_MODULE_4__["NotesFilters"].ARCHIVED:
              return this.notes.filter(function (note) {
                return !!note.archived;
              });
          }
        }
      }]);

      return NotesService;
    }(_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]);

    NotesService.ɵfac = function NotesService_Factory(t) {
      return ɵNotesService_BaseFactory(t || NotesService);
    };

    NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NotesService,
      factory: NotesService.ɵfac,
      providedIn: 'root'
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], NotesService.prototype, "notes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NotesService.prototype, "filter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], NotesService.prototype, "initNotes", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], NotesService.prototype, "setNotes", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], NotesService.prototype, "setFilter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_models_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], NotesService.prototype, "archiveNote", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], NotesService.prototype, "createNote", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_models_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], NotesService.prototype, "updateNote", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_models_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], NotesService.prototype, "setNote", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["computed"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NotesService.prototype, "archivedNotesCount", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([mobx_angular__WEBPACK_IMPORTED_MODULE_2__["computed"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NotesService.prototype, "filteredNotes", null);

    var ɵNotesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](NotesService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, {
        notes: [],
        filter: [],
        initNotes: [],
        setNotes: [],
        setFilter: [],
        archiveNote: [],
        createNote: [],
        updateNote: [],
        setNote: [],
        archivedNotesCount: [],
        filteredNotes: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/services/sqlite-storage.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/sqlite-storage.service.ts ***!
    \*********************************************************/

  /*! exports provided: SqliteStorageService */

  /***/
  function srcAppCoreServicesSqliteStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SqliteStorageService", function () {
      return SqliteStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _constants_store_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../constants/store-config */
    "./src/app/core/constants/store-config.ts");

    var SqliteStorageService = /*#__PURE__*/function () {
      function SqliteStorageService(platform, sqlite) {
        _classCallCheck(this, SqliteStorageService);

        this.platform = platform;
        this.sqlite = sqlite;
      }

      _createClass(SqliteStorageService, [{
        key: "initStorage",
        value: function initStorage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    _context10.next = 3;
                    return this.platform.ready();

                  case 3:
                    _context10.next = 5;
                    return this.sqlite.create({
                      name: _constants_store_config__WEBPACK_IMPORTED_MODULE_4__["STORE_CONFIG"].DATABASE_NAME,
                      location: _constants_store_config__WEBPACK_IMPORTED_MODULE_4__["STORE_CONFIG"].DATABASE_LOCATION
                    });

                  case 5:
                    this.database = _context10.sent;
                    return _context10.abrupt("return", this.database);

                  case 9:
                    _context10.prev = 9;
                    _context10.t0 = _context10["catch"](0);
                    console.log(_context10.t0);

                  case 12:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[0, 9]]);
          }));
        }
      }, {
        key: "getAll",
        value: function getAll(table) {
          return this.database.executeSql("SELECT * FROM ".concat(table), []).then(function (data) {
            var result = [];

            if (data.rows.length > 0) {
              for (var i = 0, len = data.rows.length; i < len; ++i) {
                result.push(data.rows.item(i));
              }
            }

            console.log('result', result);
            return result;
          });
        }
      }, {
        key: "create",
        value: function create(table, keys, values) {
          var query = "INSERT INTO ".concat(table, " (").concat(keys.join(', '), ") VALUES (").concat(keys.map(function (k) {
            return '?';
          }).join(','), ")");
          console.log(query, values);
          return this.database.executeSql(query, values);
        }
      }, {
        key: "getById",
        value: function getById(table, id) {
          return this.database.executeSql("SELECT * FROM ".concat(table, " WHERE id = ?"), [id]).then(function (data) {
            return data.rows.item(0);
          });
        }
      }, {
        key: "update",
        value: function update(table, id, keys, values) {
          var setString = keys.map(function (key) {
            return "".concat(key, " = ?");
          }).join(', ');
          var query = "UPDATE ".concat(table, " SET ").concat(setString, " WHERE id = ?");
          return this.database.executeSql(query, [].concat(_toConsumableArray(values), [id]));
        }
      }]);

      return SqliteStorageService;
    }();

    SqliteStorageService.ɵfac = function SqliteStorageService_Factory(t) {
      return new (t || SqliteStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"]));
    };

    SqliteStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SqliteStorageService,
      factory: SqliteStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SqliteStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/storage.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/storage.service.ts ***!
    \**************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppCoreServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sqlite_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sqlite-storage.service */
    "./src/app/core/services/sqlite-storage.service.ts");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./local-storage.service */
    "./src/app/core/services/local-storage.service.ts");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(platform, sqliteStorage, localStorage) {
        _classCallCheck(this, StorageService);

        this.platform = platform;
        this.sqliteStorage = sqliteStorage;
        this.localStorage = localStorage;
      }

      _createClass(StorageService, [{
        key: "init",
        value: function init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var db;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (!this.platform.is('cordova')) {
                      _context11.next = 10;
                      break;
                    }

                    _context11.next = 3;
                    return this.sqliteStorage.initStorage();

                  case 3:
                    db = _context11.sent;

                    if (!db) {
                      _context11.next = 8;
                      break;
                    }

                    _context11.next = 7;
                    return this.sqliteStorage.database.executeSql("CREATE TABLE IF NOT EXISTS notes\n          (\n              Id INTEGER PRIMARY KEY AUTOINCREMENT,\n              title TEXT,\n              description TEXT,\n              archived INTEGER default 0,\n              imagePath TEXT,\n              reminderTime TEXT\n          )\n          ", []);

                  case 7:
                    return _context11.abrupt("return", _context11.sent);

                  case 8:
                    _context11.next = 11;
                    break;

                  case 10:
                    return _context11.abrupt("return", Promise.resolve());

                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "getAll",
        value: function getAll(table) {
          if (this.isDBReady) {
            return this.sqliteStorage.getAll(table);
          } else {
            return this.localStorage.getAll(table);
          }
        }
      }, {
        key: "create",
        value: function create(table, keys, values) {
          if (this.isDBReady) {
            return this.sqliteStorage.create(table, keys, values);
          } else {
            return this.localStorage.create(table, keys, values);
          }
        }
      }, {
        key: "getById",
        value: function getById(table, id) {
          if (this.isDBReady) {
            return this.sqliteStorage.getById(table, id);
          } else {
            return this.localStorage.getById(table, id);
          }
        }
      }, {
        key: "update",
        value: function update(table, id, keys, values) {
          if (this.isDBReady) {
            return this.sqliteStorage.update(table, id, keys, values);
          } else {
            return this.localStorage.update(table, id, keys, values);
          }
        }
      }, {
        key: "isDBReady",
        get: function get() {
          return this.platform.is('cordova') && !!this.sqliteStorage.database;
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sqlite_storage_service__WEBPACK_IMPORTED_MODULE_3__["SqliteStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]));
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _sqlite_storage_service__WEBPACK_IMPORTED_MODULE_3__["SqliteStorageService"]
        }, {
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/compiler */
    "./node_modules/@angular/compiler/fesm2015/compiler.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/ahsanayaz/ionotes/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map