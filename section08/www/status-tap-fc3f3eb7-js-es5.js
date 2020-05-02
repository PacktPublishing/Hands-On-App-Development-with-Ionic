(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-fc3f3eb7-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/status-tap-fc3f3eb7.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/status-tap-fc3f3eb7.js ***!
    \******************************************************************/

  /*! exports provided: startStatusTap */

  /***/
  function node_modulesIonicCoreDistEsmStatusTapFc3f3eb7Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startStatusTap", function () {
      return startStatusTap;
    });
    /* harmony import */


    var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-2cd7e630.js */
    "./node_modules/@ionic/core/dist/esm/index-2cd7e630.js");

    var startStatusTap = function startStatusTap() {
      var win = window;
      win.addEventListener('statusTap', function () {
        Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
          var width = win.innerWidth;
          var height = win.innerHeight;
          var el = document.elementFromPoint(width / 2, height / 2);

          if (!el) {
            return;
          }

          var contentEl = el.closest('ion-content');

          if (contentEl) {
            contentEl.componentOnReady().then(function () {
              Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                return contentEl.scrollToTop(300);
              });
            });
          }
        });
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=status-tap-fc3f3eb7-js-es5.js.map