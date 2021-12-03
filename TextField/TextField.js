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

var _TextField = _interopRequireDefault(require("./TextField.scss"));

var TextField =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(TextField, _React$PureComponent);

  function TextField(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TextField);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TextField).call(this, props));

    _this.handleFocus = function (e) {
      _this.setState({
        hasFocus: true
      });

      _this.props.onFocus(e);
    };

    _this.handleBlur = function (e) {
      _this.setState({
        hasFocus: false
      });

      _this.props.onBlur(e);
    };

    _this.state = {
      hasFocus: false
    };
    return _this;
  }

  (0, _createClass2["default"])(TextField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          label = _this$props.label,
          icon = _this$props.icon,
          placeholder = _this$props.placeholder,
          bottomLabel = _this$props.bottomLabel,
          disabled = _this$props.disabled,
          className = _this$props.className,
          value = _this$props.value,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          other = (0, _objectWithoutProperties2["default"])(_this$props, ["type", "label", "icon", "placeholder", "bottomLabel", "disabled", "className", "value", "onBlur", "onFocus"]);
      return _react["default"].createElement("div", {
        className: (0, _clsx["default"])(TextField.getClassName(this.props, this.state), className)
      }, label && _react["default"].createElement("label", null, label), _react["default"].createElement("div", {
        className: _TextField["default"].formControl
      }, icon, _react["default"].createElement("input", (0, _extends2["default"])({
        defaultValue: value,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        placeholder: placeholder,
        type: type
      }, other))), bottomLabel && _react["default"].createElement(_Typography["default"], {
        className: _TextField["default"].formHelper,
        component: "p",
        size: "small",
        variant: "muted"
      }, bottomLabel));
    }
  }]);
  return TextField;
}(_react["default"].PureComponent);

TextField.getClassName = function (_ref, _ref2) {
  var _ref3;

  var disabled = _ref.disabled,
      variant = _ref.variant,
      size = _ref.size;
  var hasFocus = _ref2.hasFocus;
  return _ref3 = {}, (0, _defineProperty2["default"])(_ref3, _TextField["default"].formGroupFocus, hasFocus), (0, _defineProperty2["default"])(_ref3, _TextField["default"].formGroupDanger, variant === 'danger'), (0, _defineProperty2["default"])(_ref3, _TextField["default"].formGroupSuccess, variant === 'success'), (0, _defineProperty2["default"])(_ref3, _TextField["default"].formGroupSm, size === 'small'), (0, _defineProperty2["default"])(_ref3, _TextField["default"].formGroupDisabled, disabled), _ref3;
};

TextField.defaultProps = {
  bottomLabel: '',
  className: '',
  disabled: false,
  icon: null,
  label: '',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  placeholder: '',
  size: 'normal',
  type: 'text',
  value: '',
  variant: 'default'
};
process.env.NODE_ENV !== "production" ? TextField.propTypes = {
  /**
   * Label displayed on the bottom of the input.
   */
  bottomLabel: _propTypes["default"].string,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Icon displayed next to the input.
   */
  icon: _propTypes["default"].node,

  /**
   * Label displayed on the top of the input.
   */
  label: _propTypes["default"].string,

  /**
   * Input blur handler.
   */
  onBlur: _propTypes["default"].func,

  /**
   * Input focus handler.
   */
  onFocus: _propTypes["default"].func,

  /**
   * Placeholder displayed in the input.
   */
  placeholder: _propTypes["default"].string,

  /**
   * The size of the input.
   */
  size: _propTypes["default"].oneOf(['normal', 'small']),

  /**
   * The input type.
   */
  type: _propTypes["default"].oneOf(['text', 'password']),

  /**
   * The input element initial value.
   */
  value: _propTypes["default"].string,

  /**
   * The input visual variant.
   */
  variant: _propTypes["default"].oneOf(['default', 'success', 'danger'])
} : void 0;
var _default = TextField;
exports["default"] = _default;