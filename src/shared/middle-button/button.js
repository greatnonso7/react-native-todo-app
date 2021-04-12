import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import {wp, hp} from '../resposive-dimension';
import styles from './style';

const Button = props => {
  const {style, title, solid, icon, onPress} = props;
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      {icon ? (
        <Image source={icon} style={styles.icon} />
      ) : (
        <View style={[styles.demoIcon, solid && styles.solid]} />
      )}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  solid: false,
  style: {},
};
