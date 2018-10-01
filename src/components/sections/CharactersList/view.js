import React from 'react'
import { View, FlatList, Text, ActivityIndicator } from 'react-native'
import styles from './styles.js'
import * as api from '../../../api'
import CharactersListCell from '../../widgets/CharactersListCell'
import { Actions } from 'react-native-router-flux'

export default class CharactersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      page: 0,
      isLoading: false
    }
  }

  componentDidMount() {
    this._fetchCharacters()
  }

  _fetchCharacters() {
    this.setState({ isLoading: true })
    api
      .fetchCharacters(this.state.page)
      .then(res =>
        this.setState({
          isLoadind: false,
          list: [...this.state.list, ...res.data.data.results]
        })
      )
      .catch(err => console.log('Error (CharactersList: componentDidMount: ', err))
  }

  _renderItem({ item }) {
    return <CharactersListCell character={item} onCharacterPress={v => this._onCharacterTapped(v)} />
  }

  _onCharacterTapped(character) {
    Actions.characterDetail({ item: character })
  }

  _handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this._fetchCharacters()
      }
    )
  }

  _renderFooter = () => {
    if (this.state.isLoading === true) {
      return (
        <View>
          <ActivityIndicator animating={true} size={'large'} />
        </View>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={item => this._renderItem(item)}
          data={this.state.list}
          keyExtractor={item => 'cell' + item.id}
          onEndReached={this._handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this._renderFooter}
        />
      </View>
    )
  }
}
