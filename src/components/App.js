/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Characters } from './sections';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key={'root'}>
          <Scene key={'characters'} initial={'true'} component={Characters} title={'Characters'} />
        </Stack>
      </Router>
    );
  }
}
