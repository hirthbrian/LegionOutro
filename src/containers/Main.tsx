import React from 'react';
import {
  View,
} from 'react-native';
import Name from '../components/Name';
import Rectangle from '../components/Rectangle';

import { Color } from '../utils';

type MainProps = {
  isDark: boolean,
};

const Main = ({ isDark }: MainProps) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDark ? Color.black : Color.white,
    }}
  >
    <Rectangle color={Color.purple} />
    <Rectangle color={Color.green} />
    <Name color={isDark ? Color.white : Color.black} />
  </View>
);

export default Main;
