import React from 'react';
import {StatusBar} from 'react-native';
import HomeContainer from '../container/HomeContainer';

class HomeScreen extends React.Component {
  render() {
    return [<StatusBar barStyle="light-content" />, <HomeContainer />];
  }
}

export default HomeScreen;
