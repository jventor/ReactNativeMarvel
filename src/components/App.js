import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import { createStore, applyMiddleware, combineReducers } from 'redux'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../redux'

import { CharactersList, CharacterDetail } from './sections'
import * as api from '../api'

const reducer = combineReducers(reducers)

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk.withExtraArgument(api))
)

export default class App extends Component {
  componentWillMount() {
    api.configureAxios()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={'root'}>
            <Scene
              key={'charactersList'}
              initial={'true'}
              component={CharactersList}
              title={'Characters List'}
              hideNavBar={true}
            />
            <Scene key={'characterDetail'} component={CharacterDetail} title={'Character Detail'} />
          </Stack>
        </Router>
      </Provider>
    )
  }
}
