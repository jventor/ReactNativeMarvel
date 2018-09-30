/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { CharactersList } from './sections';
import * as api from '../api';

export default class App extends Component {
  componentWillMount() {
    api.configureAxios();
  }

  render() {
    return (
      <Router>
        <Stack key={'root'}>
          <Scene
            key={'characters'}
            initial={'true'}
            component={CharactersList}
            title={'Characters'}
          />
        </Stack>
      </Router>
    );
  }
}
