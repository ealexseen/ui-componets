import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '../Typography';
import styles from './TextField.scss';

class TextField extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleFocus = e => {
      this.setState({
        hasFocus: true
      });
      this.props.onFocus(e);
    };

    this.handleBlur = e => {
      this.setState({
        hasFocus: false
      });
      this.props.onBlur(e);
    };

    this.state = {
      hasFocus: false
    };
  }

  render() {
    const _this$props = this.props,
          {
      type,
      label,
      icon,
      placeholder,
      bottomLabel,
      disabled,
      className,
      value
    } = _this$props,
          other = _objectWithoutPropertiesLoose(_this$props, ["type", "label", "icon", "placeholder", "bottomLabel", "disabled", "className", "value", "onBlur", "onFocus"]);

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

}

TextField.getClassName = ({
  disabled,
  variant,
  size
}, {
  hasFocus
}) => ({
  [styles.formGroupFocus]: hasFocus,
  [styles.formGroupDanger]: variant === 'danger',
  [styles.formGroupSuccess]: variant === 'success',
  [styles.formGroupSm]: size === 'small',
  [styles.formGroupDisabled]: disabled
});

TextField.defaultProps = {
  bottomLabel: '',
  className: '',
  disabled: false,
  icon: null,
  label: '',
  onBlur: () => {},
  onFocus: () => {},
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