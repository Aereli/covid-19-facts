webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/country.js":
/*!*******************************!*\
  !*** ./components/country.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import useStats from "../utils/useStats"
// import { useState } from "react"
// import Stats from "./Stats"
// function CountrySelector() {
//   const countries = useStats("https://covid19.mathdro.id/api/countries")
//   const [selectionCountry, setSelectionCountry] = useState("USA")
//   if (!countries) return <p>Loading...</p>
//   // console.log(`this is new: ${countries.name}`)
//   console.log(countries)
//   return (
//     <div>
//       <h2>currently showing: {selectionCountry}</h2>
//       <select onChange={e => setSelectionCountry(e.target.value)}>
//         {countries.countries.map(country => (
//           <option key={country.name} value={country.iso3}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//       <Stats
//         url={`https://covid19.mathdro.id/api/countries/${selectionCountry}`}
//       ></Stats>
//     </div>
//   )
// }
// export default CountrySelector

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _components_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/country */ "./components/country.js");
/* harmony import */ var _components_country__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_country__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/Aereli/Documents/Programs/covid-19/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var IndexPage = function IndexPage() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://covid19.mathdro.id/api/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_components_country__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.026b70466c1c717f9e33.hot-update.js.map