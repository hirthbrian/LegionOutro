import React from 'react';
import { View } from 'react-native';
import Title from '../../components/Title';
import Rectangle from '../../components/Rectangle';

import { Color } from '../../utils';
import styles from './styles';

const Main = ({ isDark }: { isDark: boolean }) => (
  <View
    style={[styles.container, {
      backgroundColor: isDark ? Color.black : Color.white,
    }]}
  >
    <Rectangle color={Color.purple} />
    <Rectangle color={Color.green} />
    <Title color={isDark ? Color.white : Color.black} />
  </View>
);

export default Main;
