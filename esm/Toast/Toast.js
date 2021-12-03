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
import CloseIcon from '@arcadia/glyphs/TimesLight';
import styles from './Toast.scss';

var _ref = React.createElement(CloseIcon, null);

var Toast =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Toast, _React$PureComponent);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          onClickAction = _this$props.onClickAction,
          actionTitle = _this$props.actionTitle,
          children = _this$props.children,
          isCloseable = _this$props.isCloseable,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["onClose", "onClickAction", "actionTitle", "children", "isCloseable", "className"]);

      return React.createElement("div", _extends({
        className: clsx(Toast.getClassName(this.props), className)
      }, other), React.createElement("div", null, children), (isCloseable || actionTitle) && React.createElement("div", {
        className: styles.menu
      }, actionTitle && React.createElement("button", {
        className: styles.btnAction,
        onClick: onClickAction,
        type: "button"
      }, actionTitle), isCloseable && React.createElement("button", {
        className: styles.btnClose,
        onClick: onClose,
        type: "button"
      }, _ref)));
    }
  }]);

  return Toast;
}(React.PureComponent);

Toast.getClassName = function (_ref2) {
  var _ref3;

  var variant = _ref2.variant;
  return _ref3 = {}, _defineProperty(_ref3, styles.root, true), _defineProperty(_ref3, styles.toastDanger, variant === 'danger'), _defineProperty(_ref3, styles.toastSuccess, variant === 'success'), _defineProperty(_ref3, styles.toastPrimary, variant === 'primary'), _defineProperty(_ref3, styles.toastWarning, variant === 'warning'), _ref3;
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
  actionTitle: PropTypes.string,

  /**
   * The content of the toast.
   */
  children: PropTypes.node.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Should display close button.
   */
  isCloseable: PropTypes.bool,

  /**
   * If the action title is provided, triggers on click the action button.
   */
  onClickAction: PropTypes.func,

  /**
   * If the toast isCloseable, triggers on click close button.
   */
  onClose: PropTypes.func,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'warning'])
} : void 0;
export default Toast;