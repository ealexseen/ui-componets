"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactGoogleFontLoader = _interopRequireDefault(require("react-google-font-loader"));

var GoogleFonts = function GoogleFonts() {
  return _react["default"].createElement(_reactGoogleFontLoader["default"], {
    fonts: [{
      font: 'Roboto',
      weights: [400, 700]
    }]
  });
};

var _default = GoogleFonts;
exports["default"] = _default;