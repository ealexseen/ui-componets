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
import styles from './Alert.scss';

var Alert =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Alert, _React$PureComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, _getPrototypeOf(Alert).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          icon = _this$props.icon,
          title = _this$props.title,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["children", "icon", "title", "className"]);

      return React.createElement("div", _extends({
        className: clsx(Alert.getClassName(this.props), className)
      }, other), title && React.createElement("div", {
        className: styles.header
      }, icon, React.createElement(Typography, {
        className: styles.title,
        component: "h5"
      }, title)), !title && icon, React.createElement(Typography, {
        className: styles.content,
        component: "p"
      }, children));
    }
  }]);

  return Alert;
}(React.PureComponent);

Alert.getClassName = function (_ref) {
  var _ref2;

  var variant = _ref.variant,
      title = _ref.title;
  return _ref2 = {}, _defineProperty(_ref2, styles.alert, true), _defineProperty(_ref2, styles.alertWithTitle, title !== null), _defineProperty(_ref2, styles.alertSuccess, variant === 'success'), _defineProperty(_ref2, styles.alertPrimary, variant === 'primary'), _defineProperty(_ref2, styles.alertDanger, variant === 'danger'), _defineProperty(_ref2, styles.alertWarning, variant === 'warning'), _ref2;
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
  children: PropTypes.node.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The icon for the alert.
   */
  icon: PropTypes.node,

  /**
   * The title of the alert.
   */
  title: PropTypes.string,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['default', 'danger', 'primary', 'success', 'warning'])
} : void 0;
export default Alert;