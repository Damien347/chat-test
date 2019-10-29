import React, { Component } from 'react';
import {
  SafeAreaView
} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Splashscreen from './app/loading/Splashscreen/Splashscreen';
import Main from './app/main/Main/Main';



const AppContainer = createAppContainer(
  createSwitchNavigator( {
    Loading: Splashscreen,
    Main: Main

  }, {
    initialRouteName: 'Loading'
  })
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AppContainer />
      </SafeAreaView>
    );
  }

};



export default App;