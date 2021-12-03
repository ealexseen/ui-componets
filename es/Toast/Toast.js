import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CloseIcon from '@arcadia/glyphs/TimesLight';
import styles from './Toast.scss';

var _ref = React.createElement(CloseIcon, null);

class Toast extends React.PureComponent {
  render() {
    const _this$props = this.props,
          {
      onClose,
      onClickAction,
      actionTitle,
      children,
      isCloseable,
      className
    } = _this$props,
          other = _objectWithoutPropertiesLoose(_this$props, ["onClose", "onClickAction", "actionTitle", "children", "isCloseable", "className"]);

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

}

Toast.getClassName = ({
  variant
}) => ({
  [styles.root]: true,
  [styles.toastDanger]: variant === 'danger',
  [styles.toastSuccess]: variant === 'success',
  [styles.toastPrimary]: variant === 'primary',
  [styles.toastWarning]: variant === 'warning'
});

Toast.defaultProps = {
  actionTitle: '',
  className: '',
  isCloseable: true,
  onClickAction: () => {},
  onClose: () => {},
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