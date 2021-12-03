import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '../Typography';
import styles from './TextField.scss';

var TextField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TextField, _React$PureComponent);

  function TextField(props) {
    var _this;

    _classCallCheck(this, TextField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextField).call(this, props));

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

  _createClass(TextField, [{
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
          other = _objectWithoutProperties(_this$props, ["type", "label", "icon", "placeholder", "bottomLabel", "disabled", "className", "value", "onBlur", "onFocus"]);

      return React.createElement("div", {
        className: clsx(TextField.getClassName(this.props, this.state), className)
      }, label && React.createElement("label", null, label), React.createElement("div", {
        className: styles.formControl
      }, icon, React.createElement("input", _extends({
        defaultValue: value,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        placeholder: placeholder,
        type: type
      }, other))), bottomLabel && React.createElement(Typography, {
        className: styles.formHelper,
        component: "p",
        size: "small",
        variant: "muted"
      }, bottomLabel));
    }
  }]);

  return TextField;
}(React.PureComponent);

TextField.getClassName = function (_ref, _ref2) {
  var _ref3;

  var disabled = _ref.disabled,
      variant = _ref.variant,
      size = _ref.size;
  var hasFocus = _ref2.hasFocus;
  return _ref3 = {}, _defineProperty(_ref3, styles.formGroupFocus, hasFocus), _defineProperty(_ref3, styles.formGroupDanger, variant === 'danger'), _defineProperty(_ref3, styles.formGroupSuccess, variant === 'success'), _defineProperty(_ref3, styles.formGroupSm, size === 'small'), _defineProperty(_ref3, styles.formGroupDisabled, disabled), _ref3;
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
  bottomLabel: PropTypes.string,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Icon displayed next to the input.
   */
  icon: PropTypes.node,

  /**
   * Label displayed on the top of the input.
   */
  label: PropTypes.string,

  /**
   * Input blur handler.
   */
  onBlur: PropTypes.func,

  /**
   * Input focus handler.
   */
  onFocus: PropTypes.func,

  /**
   * Placeholder displayed in the input.
   */
  placeholder: PropTypes.string,

  /**
   * The size of the input.
   */
  size: PropTypes.oneOf(['normal', 'small']),

  /**
   * The input type.
   */
  type: PropTypes.oneOf(['text', 'password']),

  /**
   * The input element initial value.
   */
  value: PropTypes.string,

  /**
   * The input visual variant.
   */
  variant: PropTypes.oneOf(['default', 'success', 'danger'])
} : void 0;
export default TextField;