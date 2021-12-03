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
import styles from './Typography.scss';

var Typography =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Typography, _React$PureComponent);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, _getPrototypeOf(Typography).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          component = _this$props.component,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["children", "component", "className"]);

      var HTMLElement = component;
      return React.createElement(HTMLElement, _extends({
        className: clsx(Typography.getClassName(this.props), className)
      }, other), children);
    }
  }]);

  return Typography;
}(React.PureComponent);

Typography.getClassName = function (_ref) {
  var _ref2;

  var size = _ref.size,
      disabled = _ref.disabled,
      variant = _ref.variant;
  return _ref2 = {}, _defineProperty(_ref2, styles.muted, variant === 'muted'), _defineProperty(_ref2, styles.sizeSm, size === 'small'), _defineProperty(_ref2, styles.sizeLg, size === 'large'), _defineProperty(_ref2, styles.disabled, disabled), _ref2;
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
  children: PropTypes.node.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * HTML element to render the text with
   */
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),

  /**
   * If `true`, the text will appear disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The size of the text.
   */
  size: PropTypes.oneOf(['large', 'normal', 'small']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['default', 'muted'])
} : void 0;
export default Typography;