"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Typography = _interopRequireDefault(require("./Typography.scss"));

var Typography =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Typography, _React$PureComponent);

  function Typography() {
    (0, _classCallCheck2["default"])(this, Typography);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Typography).apply(this, arguments));
  }

  (0, _createClass2["default"])(Typography, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          component = _this$props.component,
          className = _this$props.className,
          other = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "component", "className"]);
      var HTMLElement = component;
      return _react["default"].createElement(HTMLElement, (0, _extends2["default"])({
        className: (0, _clsx["default"])(Typography.getClassName(this.props), className)
      }, other), children);
    }
  }]);
  return Typography;
}(_react["default"].PureComponent);

Typography.getClassName = function (_ref) {
  var _ref2;

  var size = _ref.size,
      disabled = _ref.disabled,
      variant = _ref.variant;
  return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, _Typography["default"].muted, variant === 'muted'), (0, _defineProperty2["default"])(_ref2, _Typography["default"].sizeSm, size === 'small'), (0, _defineProperty2["default"])(_ref2, _Typography["default"].sizeLg, size === 'large'), (0, _defineProperty2["default"])(_ref2, _Typography["default"].disabled, disabled), _ref2;
};

Typography.defaultProps = {
  className: '',
  component: 'h1',
  disabled: false,
  size: 'normal',
  variant: 'default'
};
process.env.NODE_ENV !== "production" ? Typography.propTypes = {
  /**
   * The content of the text.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * HTML element to render the text with
   */
  component: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),

  /**
   * If `true`, the text will appear disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * The size of the text.
   */
  size: _propTypes["default"].oneOf(['large', 'normal', 'small']),

  /**
   * The variant to use.
   */
  variant: _propTypes["default"].oneOf(['default', 'muted'])
} : void 0;
var _default = Typography;
exports["default"] = _default;