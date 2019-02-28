import React from 'react';
import {
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Font,
} from 'expo';

import Main from './app/Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      blackBackground: true,
    };
  }

  componentWillMount() {
    Font.loadAsync({
      'montserrat': require('./assets/fonts/Montserrat-Bold.ttf'),
      'montserrat-italic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
    }).then(async () => {
      this.setState({ fontLoaded: true });
    });
  }

  switchBackgroundColor = () => {
    const { blackBackground } = this.state;
    this.setState({ blackBackground: !blackBackground });
  }

  render() {
    const {
      fontLoaded,
      blackBackground,
    } = this.state;
    if (!fontLoaded) return null;

    return (
      <TouchableWithoutFeedback
        onPress={this.switchBackgroundColor}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <StatusBar
            translucent
            barStyle={blackBackground ? 'light-content' : 'dark-content'}
          />
          <Main
            blackBackground={blackBackground}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
