import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Typography.scss';

class Typography extends React.PureComponent {
  render() {
    const _this$props = this.props,
          {
      children,
      component,
      className
    } = _this$props,
          other = _objectWithoutPropertiesLoose(_this$props, ["children", "component", "className"]);

    const HTMLElement = component;
    return React.createElement(HTMLElement, _extends({
      className: clsx(Typography.getClassName(this.props), className)
    }, other), children);
  }

}

Typography.getClassName = ({
  size,
  disabled,
  variant
}) => ({
  [styles.muted]: variant === 'muted',
  [styles.sizeSm]: size === 'small',
  [styles.sizeLg]: size === 'large',
  [styles.disabled]: disabled
});

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