import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { Color, generateRectangle } from '../../utils';
import styles from './styles';

const Rectangle = ({ color }: { color: Color }) => {
  const [coordinate, setCoordinate] = useState(generateRectangle());

  const {
    width,
    height,
    left,
    top,
  } = coordinate;

  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinate(generateRectangle());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={[styles.container, {
        width,
        height,
        left,
        top,
        backgroundColor: color,
      }]}
    />
  );
};

export default Rectangle;
