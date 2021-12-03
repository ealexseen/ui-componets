import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";

/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.scss';

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          type = _this$props2.type,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["children", "type", "className"]);

      return React.createElement("button", _extends({
        className: clsx(Button.getClassName(this.props), className),
        onClick: this.handleClick,
        type: type
      }, other), children);
    }
  }]);

  return Button;
}(React.PureComponent);

Button.getClassName = function (_ref) {
  var _ref2;

  var variant = _ref.variant,
      size = _ref.size,
      block = _ref.block,
      disabled = _ref.disabled;
  return _ref2 = {}, _defineProperty(_ref2, styles.btn, true), _defineProperty(_ref2, styles.btnDanger, variant === 'danger'), _defineProperty(_ref2, styles.btnSuccess, variant === 'success'), _defineProperty(_ref2, styles.btnPrimary, variant === 'primary'), _defineProperty(_ref2, styles.btnInfo, variant === 'info'), _defineProperty(_ref2, styles.btnWarning, variant === 'warning'), _defineProperty(_ref2, styles.btnDefault, variant === 'default'), _defineProperty(_ref2, styles.btnLg, size === 'large'), _defineProperty(_ref2, styles.btnSm, size === 'small'), _defineProperty(_ref2, styles.btnDisabled, disabled), _defineProperty(_ref2, styles.btnBlock, block), _ref2;
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
  block: PropTypes.bool,

  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The onClick handler.
   */
  onClick: PropTypes.func,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['large', 'normal', 'small']),

  /**
   * The button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['danger', 'default', 'info', 'primary', 'success', 'warning'])
} : void 0;
export default Button;