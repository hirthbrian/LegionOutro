import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Colors from './Colors';

import {
  generateJob,
  generateName,
  generateRectangle,
} from './utils';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: generateName(),
      job: generateJob(),
      firstRectangle: generateRectangle(),
      secondRectangle: generateRectangle(),
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        firstRectangle: generateRectangle(),
        secondRectangle: generateRectangle(),
      })
    }, 650);

    setInterval(() => {
      this.setState({
        name: generateName(),
        job: generateJob(),
      })
    }, 1950);
  }

  renderRectangle = (style, color) => (
    <View
      style={[{
        backgroundColor: color,
      }, style]}
    />
  );

  renderName = () => {
    const {
      name,
      job,
    } = this.state;
    const { blackBackground } = this.props;

    return (
      <View>
        <Text
          style={{
            fontSize: 26,
            textAlign: 'center',
            fontFamily: 'montserrat-italic',
            color: blackBackground ? Colors.white : Colors.black,
          }}
        >
          {job}
        </Text>
        <Text
          style={{
            fontSize: 38,
            textAlign: 'center',
            fontFamily: 'montserrat',
            color: blackBackground ? Colors.white : Colors.black,
          }}
        >
          {name}
        </Text>
      </View>
    )
  }

  render() {
    const {
      firstRectangle,
      secondRectangle,
    } = this.state;
    const { blackBackground } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: blackBackground ? Colors.black : Colors.white,
        }}
      >
        {this.renderRectangle(firstRectangle, Colors.purple)}
        {this.renderRectangle(secondRectangle, Colors.green)}
        {this.renderName()}
      </View>
    );
  }
}
