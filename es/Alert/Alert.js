import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '../Typography';
import styles from './Alert.scss';

class Alert extends React.PureComponent {
  render() {
    const _this$props = this.props,
          {
      children,
      icon,
      title,
      className
    } = _this$props,
          other = _objectWithoutPropertiesLoose(_this$props, ["children", "icon", "title", "className"]);

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

}

Alert.getClassName = ({
  variant,
  title
}) => ({
  [styles.alert]: true,
  [styles.alertWithTitle]: title !== null,
  [styles.alertSuccess]: variant === 'success',
  [styles.alertPrimary]: variant === 'primary',
  [styles.alertDanger]: variant === 'danger',
  [styles.alertWarning]: variant === 'warning'
});

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