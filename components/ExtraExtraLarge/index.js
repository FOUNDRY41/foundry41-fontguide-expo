import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { styleConstants } from '../../config'


// DOCS
// =========================

/**
 * @namespace HeaderText
 * @description reusable header text typically used as a sort of h1 page title
 * @prop children {object} 
 * @prop textStyle {object}
 * 
 */


// EXPORTED COMPONENT
// =========================
const ExtraExtraLarge = ({ children, textStyle }) => {

  if (!children) { return null };
 
  return (
    <Text style={[ s.defaultTextStyles, textStyle ]}>
      { children }
    </Text>
  );

};


// STYLES
// =========================
const s = StyleSheet.create({
  defaultTextStyles: { 
    fontFamily: styleConstants.fontFamily.bold, 
    color: styleConstants.color.black1, 
    fontSize: styleConstants.fontSize.xxl,
    fontWeight: styleConstants.fontWeight.bold,
    margin: 0,
    textAlign: 'left' 
  }
});



// PROP TYPES
// =========================

ExtraExtraLarge.propTypes = {
  textStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
}

ExtraExtraLarge.defaultProps = {
  textStyle: {},
  children: null
}


// EXPORT
// =========================
export default ExtraExtraLarge;