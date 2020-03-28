webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/country.js":
/*!*******************************!*\
  !*** ./components/country.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
var _jsxFileName = "/Users/Aereli/Documents/Programs/covid-19/components/country.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CountrySelector() {
  var _this = this;

  var countries = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])("https://covid19.mathdro.id/api/countries");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USA"),
      selectionCountry = _useState[0],
      setSelectionCountry = _useState[1];

  if (!countries) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 26
    }
  }, "Loading...");
  console.log(countries);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "currently showing: ", selectionCountry), __jsx("select", {
    onChange: function onChange(e) {
      return setSelectionCountry(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, countries.countries.map(function (country) {
    return __jsx("option", {
      key: country.name,
      value: country.iso3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, country.name);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CountrySelector);

/***/ })

})
//# sourceMappingURL=index.js.195fcf8f0d85a34a3ff4.hot-update.js.map