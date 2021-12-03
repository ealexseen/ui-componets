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

var _Typography = _interopRequireDefault(require("../Typography"));

var _Alert = _interopRequireDefault(require("./Alert.scss"));

var Alert =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Alert, _React$PureComponent);

  function Alert() {
    (0, _classCallCheck2["default"])(this, Alert);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Alert).apply(this, arguments));
  }

  (0, _createClass2["default"])(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          icon = _this$props.icon,
          title = _this$props.title,
          className = _this$props.className,
          other = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "icon", "title", "className"]);
      return _react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _clsx["default"])(Alert.getClassName(this.props), className)
      }, other), title && _react["default"].createElement("div", {
        className: _Alert["default"].header
      }, icon, _react["default"].createElement(_Typography["default"], {
        className: _Alert["default"].title,
        component: "h5"
      }, title)), !title && icon, _react["default"].createElement(_Typography["default"], {
        className: _Alert["default"].content,
        component: "p"
      }, children));
    }
  }]);
  return Alert;
}(_react["default"].PureComponent);

Alert.getClassName = function (_ref) {
  var _ref2;

  var variant = _ref.variant,
      title = _ref.title;
  return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, _Alert["default"].alert, true), (0, _defineProperty2["default"])(_ref2, _Alert["default"].alertWithTitle, title !== null), (0, _defineProperty2["default"])(_ref2, _Alert["default"].alertSuccess, variant === 'success'), (0, _defineProperty2["default"])(_ref2, _Alert["default"].alertPrimary, variant === 'primary'), (0, _defineProperty2["default"])(_ref2, _Alert["default"].alertDanger, variant === 'danger'), (0, _defineProperty2["default"])(_ref2, _Alert["default"].alertWarning, variant === 'warning'), _ref2;
};

Alert.defaultProps = {
  className: '',
  icon: null,
  title: null,
  variant: 'default'
};
process.env.NODE_ENV !== "production" ? Alert.propTypes = {
  /**
   * The content of the text.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * The icon for the alert.
   */
  icon: _propTypes["default"].node,

  /**
   * The title of the alert.
   */
  title: _propTypes["default"].string,

  /**
   * The variant to use.
   */
  variant: _propTypes["default"].oneOf(['default', 'danger', 'primary', 'success', 'warning'])
} : void 0;
var _default = Alert;
exports["default"] = _default;