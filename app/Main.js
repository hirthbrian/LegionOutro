import React from 'react';
import {
  Text,
  View,
  Platform,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from './Colors';
import Names from './Names';

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      blackBackground: true,
      purpleStyle: {},
      greenStyle: {},
    }
  }

  switchBackgroundColor = () => {
    this.setState({ blackBackground: !this.state.blackBackground });
  }

  generateStyle(color) {
    const { width, height } = Dimensions.get('window');

    const maxWidth = width / 2;
    const maxHeight = height / 2;

    const rndmWidth = Math.floor(Math.random() * maxWidth) + 1;
    const rndmHeight = Math.floor(Math.random() * maxHeight) + 1;
    const rndmX = Math.floor(Math.random() * (width - rndmWidth)) + 1;
    const rndmY = Math.floor(Math.random() * (height - rndmHeight)) + 1;

    return style = {
      width: rndmWidth,
      height: rndmHeight,
      left: rndmX,
      top: rndmY,
      position: 'absolute',
      backgroundColor: color,
    }
  }

  generateName() {
    return Names[Math.floor(Math.random() * Names.length)];
  }

  componentWillMount() {
    this.setState({
      purpleStyle: this.generateStyle(Colors.purple),
      greenStyle: this.generateStyle(Colors.green),
      name: this.generateName(),
    })
    setInterval(() => {
      this.setState({
        purpleStyle: this.generateStyle(Colors.purple),
        greenStyle: this.generateStyle(Colors.green),
      })
    }, 650);

    setInterval(() => {
      this.setState({
        name: this.generateName(),
      })
    }, 1950);
  }

  renderRectangle = (style) => (
    <View style={style} />
  );

  renderName = () => (
    <View>
      <Text
        style={{
          color: this.state.blackBackground ? Colors.white : Colors.black,
          fontSize: 42,
          fontFamily: 'Avenir',
        }}
      >
        {this.state.name && this.state.name.name.toUpperCase()}
      </Text>
    </View>
  )

  render() {
    const { greenStyle, purpleStyle } = this.state;

    return (
      <TouchableWithoutFeedback
        onPress={this.switchBackgroundColor}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.blackBackground ? Colors.black : Colors.white,
          }}
        >
          <StatusBar
            hidden
          />
          {this.renderRectangle(greenStyle)}
          {this.renderRectangle(purpleStyle)}
          {this.renderName()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
