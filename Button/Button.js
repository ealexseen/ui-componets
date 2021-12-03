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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Button = _interopRequireDefault(require("./Button.scss"));

/* eslint-disable react/button-has-type */
var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Button, _React$PureComponent);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (!disabled) {
        onClick(e);
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          type = _this$props2.type,
          className = _this$props2.className,
          other = (0, _objectWithoutProperties2["default"])(_this$props2, ["children", "type", "className"]);
      return _react["default"].createElement("button", (0, _extends2["default"])({
        className: (0, _clsx["default"])(Button.getClassName(this.props), className),
        onClick: this.handleClick,
        type: type
      }, other), children);
    }
  }]);
  return Button;
}(_react["default"].PureComponent);

Button.getClassName = function (_ref) {
  var _ref2;

  var variant = _ref.variant,
      size = _ref.size,
      block = _ref.block,
      disabled = _ref.disabled;
  return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, _Button["default"].btn, true), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnDanger, variant === 'danger'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnSuccess, variant === 'success'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnPrimary, variant === 'primary'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnInfo, variant === 'info'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnWarning, variant === 'warning'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnDefault, variant === 'default'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnLg, size === 'large'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnSm, size === 'small'), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnDisabled, disabled), (0, _defineProperty2["default"])(_ref2, _Button["default"].btnBlock, block), _ref2;
};

Button.defaultProps = {
  block: false,
  className: '',
  disabled: false,
  onClick: function onClick() {},
  size: 'normal',
  type: 'button',
  variant: 'primary'
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  /**
   * If `true`, the button will stretch to the width of it's parent.
   */
  block: _propTypes["default"].bool,

  /**
   * The content of the button.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * The onClick handler.
   */
  onClick: _propTypes["default"].func,

  /**
   * The size of the button.
   */
  size: _propTypes["default"].oneOf(['large', 'normal', 'small']),

  /**
   * The button type.
   */
  type: _propTypes["default"].oneOf(['button', 'submit', 'reset']),

  /**
   * The variant to use.
   */
  variant: _propTypes["default"].oneOf(['danger', 'default', 'info', 'primary', 'success', 'warning'])
} : void 0;
var _default = Button;
exports["default"] = _default;