import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import { createStore, applyMiddleware, combineReducers } from 'redux'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../redux'

import { CharactersList, CharacterDetail, CharacterAdd } from './sections'
import * as api from '../api'

import styles from './styles.js'

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
        <Router navigationBarStyle={styles.navigationBar} titleStyle={styles.navigationTitle}>
          <Stack key={'root'}>
            <Scene
              key={'charactersList'}
              component={CharactersList}
              title={'Characters List'}
              hideNavBar={true}
              initial={'true'}
            />
            <Scene key={'characterDetail'} component={CharacterDetail} title={'Character Profile'} />
            <Scene key={'characterAdd'} component={CharacterAdd} title={'Character Add (Mock)'} />
          </Stack>
        </Router>
      </Provider>
    )
  }
}
