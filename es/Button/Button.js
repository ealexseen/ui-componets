import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.scss';

class Button extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.handleClick = e => {
      const {
        disabled,
        onClick
      } = this.props;

      if (!disabled) {
        onClick(e);
      }
    };
  }

  render() {
    const _this$props = this.props,
          {
      children,
      type,
      className
    } = _this$props,
          other = _objectWithoutPropertiesLoose(_this$props, ["children", "type", "className"]);

    return React.createElement("button", _extends({
      className: clsx(Button.getClassName(this.props), className),
      onClick: this.handleClick,
      type: type
    }, other), children);
  }

}

Button.getClassName = ({
  variant,
  size,
  block,
  disabled
}) => ({
  [styles.btn]: true,
  [styles.btnDanger]: variant === 'danger',
  [styles.btnSuccess]: variant === 'success',
  [styles.btnPrimary]: variant === 'primary',
  [styles.btnInfo]: variant === 'info',
  [styles.btnWarning]: variant === 'warning',
  [styles.btnDefault]: variant === 'default',
  [styles.btnLg]: size === 'large',
  [styles.btnSm]: size === 'small',
  [styles.btnDisabled]: disabled,
  [styles.btnBlock]: block
});

Button.defaultProps = {
  block: false,
  className: '',
  disabled: false,
  onClick: () => {},
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