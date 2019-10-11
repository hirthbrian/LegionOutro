import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import { Color, generateName, generateJob } from '../../utils';
import styles from './styles';

const Title = ({ color }: { color: Color }) => {
  const [name, setName] = useState(generateName());
  const [job, setJob] = useState(generateJob());

  useEffect(() => {
    const interval = setInterval(() => {
      setName(generateName());
      setJob(generateJob());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text
        style={[styles.job, { color }]}
      >
        {job}
      </Text>
      <Text
        style={[styles.name, { color }]}
      >
        {name}
      </Text>
    </View>
  );
};

export default Title;
