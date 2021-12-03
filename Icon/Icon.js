"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Icon = _interopRequireDefault(require("./Icon.scss"));

var Icon = _react["default"].forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties2["default"])(props, ["children", "className", "titleAccess", "viewBox"]);
  return _react["default"].createElement("svg", (0, _extends2["default"])({
    ref: ref,
    "aria-hidden": titleAccess ? 'false' : 'true',
    className: (0, _clsx["default"])(Icon.getClassName(), className),
    focusable: "false",
    role: titleAccess ? 'img' : 'presentation',
    viewBox: viewBox
  }, other), children, titleAccess ? _react["default"].createElement("title", null, titleAccess) : null);
});

Icon.getClassName = function () {
  return (0, _defineProperty2["default"])({}, _Icon["default"].icon, true);
};

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes["default"].string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element. For
   * example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0) to bottom
   * right (50,20) and each unit will be worth 10px.
   */
  viewBox: _propTypes["default"].string
} : void 0;
Icon.defaultProps = {
  className: '',
  titleAccess: '',
  viewBox: '0 0 24 24'
};
var _default = Icon;
exports["default"] = _default;