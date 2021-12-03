import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Icon.scss';
var Icon = React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = _objectWithoutProperties(props, ["children", "className", "titleAccess", "viewBox"]);

  return React.createElement("svg", _extends({
    ref: ref,
    "aria-hidden": titleAccess ? 'false' : 'true',
    className: clsx(Icon.getClassName(), className),
    focusable: "false",
    role: titleAccess ? 'img' : 'presentation',
    viewBox: viewBox
  }, other), children, titleAccess ? React.createElement("title", null, titleAccess) : null);
});

Icon.getClassName = function () {
  return _defineProperty({}, styles.icon, true);
};

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element. For
   * example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0) to bottom
   * right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string
} : void 0;
Icon.defaultProps = {
  className: '',
  titleAccess: '',
  viewBox: '0 0 24 24'
};
export default Icon;