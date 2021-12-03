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

var _TimesLight = _interopRequireDefault(require("@arcadia/glyphs/TimesLight"));

var _Toast = _interopRequireDefault(require("./Toast.scss"));

var _ref = _react["default"].createElement(_TimesLight["default"], null);

var Toast =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Toast, _React$PureComponent);

  function Toast() {
    (0, _classCallCheck2["default"])(this, Toast);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Toast).apply(this, arguments));
  }

  (0, _createClass2["default"])(Toast, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          onClickAction = _this$props.onClickAction,
          actionTitle = _this$props.actionTitle,
          children = _this$props.children,
          isCloseable = _this$props.isCloseable,
          className = _this$props.className,
          other = (0, _objectWithoutProperties2["default"])(_this$props, ["onClose", "onClickAction", "actionTitle", "children", "isCloseable", "className"]);
      return _react["default"].createElement("div", (0, _extends2["default"])({
        className: (0, _clsx["default"])(Toast.getClassName(this.props), className)
      }, other), _react["default"].createElement("div", null, children), (isCloseable || actionTitle) && _react["default"].createElement("div", {
        className: _Toast["default"].menu
      }, actionTitle && _react["default"].createElement("button", {
        className: _Toast["default"].btnAction,
        onClick: onClickAction,
        type: "button"
      }, actionTitle), isCloseable && _react["default"].createElement("button", {
        className: _Toast["default"].btnClose,
        onClick: onClose,
        type: "button"
      }, _ref)));
    }
  }]);
  return Toast;
}(_react["default"].PureComponent);

Toast.getClassName = function (_ref2) {
  var _ref3;

  var variant = _ref2.variant;
  return _ref3 = {}, (0, _defineProperty2["default"])(_ref3, _Toast["default"].root, true), (0, _defineProperty2["default"])(_ref3, _Toast["default"].toastDanger, variant === 'danger'), (0, _defineProperty2["default"])(_ref3, _Toast["default"].toastSuccess, variant === 'success'), (0, _defineProperty2["default"])(_ref3, _Toast["default"].toastPrimary, variant === 'primary'), (0, _defineProperty2["default"])(_ref3, _Toast["default"].toastWarning, variant === 'warning'), _ref3;
};

Toast.defaultProps = {
  actionTitle: '',
  className: '',
  isCloseable: true,
  onClickAction: function onClickAction() {},
  onClose: function onClose() {},
  variant: 'primary'
};
process.env.NODE_ENV !== "production" ? Toast.propTypes = {
  /**
   * Name of the action button on toast.
   */
  actionTitle: _propTypes["default"].string,

  /**
   * The content of the toast.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * Should display close button.
   */
  isCloseable: _propTypes["default"].bool,

  /**
   * If the action title is provided, triggers on click the action button.
   */
  onClickAction: _propTypes["default"].func,

  /**
   * If the toast isCloseable, triggers on click close button.
   */
  onClose: _propTypes["default"].func,

  /**
   * The variant to use.
   */
  variant: _propTypes["default"].oneOf(['primary', 'success', 'danger', 'warning'])
} : void 0;
var _default = Toast;
exports["default"] = _default;