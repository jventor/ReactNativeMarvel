import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { CharactersList, CharacterDetail } from './sections'
import * as api from '../api'

export default class App extends Component {
  componentWillMount() {
    api.configureAxios()
  }

  render() {
    return (
      <Router>
        <Stack key={'root'}>
          <Scene key={'charactersList'} initial={'true'} component={CharactersList} title={'Characters List'} />
          <Scene key={'characterDetail'} component={CharacterDetail} title={'Character Detail'} />
        </Stack>
      </Router>
    )
  }
}
