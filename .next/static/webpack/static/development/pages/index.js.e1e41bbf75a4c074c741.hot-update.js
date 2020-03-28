webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useStats = function useStats(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function fetchData() {
      console.log("fetching data");
      var data = fetch(url).then(function (res) {
        return res.json();
      });
      setStats(data);
    }

    fetchData();
  }, []);
  return stats;
};

/* harmony default export */ __webpack_exports__["default"] = (useStats);

/***/ })

})
//# sourceMappingURL=index.js.e1e41bbf75a4c074c741.hot-update.js.map