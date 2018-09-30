import React from 'react'
import { View, Text, Alert, FlatList, Image } from 'react-native'
import styles from './styles.js'
import * as api from '../../../api'
import CharactersListCell from '../../widgets/CharactersListCell'
import { Actions } from 'react-native-router-flux'

export default class CharactersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    api
      .fetchCharacters()
      .then(res => this.setState({ list: res.data.data.results }))
      .catch(err => console.log('Error (CharactersList: componentDidMount: ', err))
  }

  _renderItem({ item }) {
    console.log('Item: ', item)
    return <CharactersListCell character={item} onCharacterPress={v => this._onCharacterTapped(v)} />
  }

  _onCharacterTapped(character) {
    Actions.characterDetail({ item: character })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={item => this._renderItem(item)}
          data={this.state.list}
          keyExtractor={item => 'cell' + item.id}
        />
      </View>
    )
  }
}
