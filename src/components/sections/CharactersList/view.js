import React from 'react'
import { View, FlatList, ActivityIndicator, Image, Text, Alert } from 'react-native'
import styles from './styles.js'
import CharactersListCell from '../../widgets/CharactersListCell'
import { Actions } from 'react-native-router-flux'
import Button from '../../widgets/Button'

export default class CharactersList extends React.Component {
  componentDidMount() {
    this._fetchCharacters()
  }

  _fetchCharacters() {
    this.props.fetchCharacterList()
  }

  _renderItem({ item }) {
    return <CharactersListCell character={item} onCharacterPress={v => this._onCharacterTapped(v)} />
  }

  _onCharacterTapped(character) {
    Actions.characterDetail({ item: character })
  }

  _handleLoadMore = () => {
    console.log('load more')
    if (this.props.page < this.props.totalPages - 1) {
      this.props.onLoadMoreCharacters(this.props.page + 1)
    } else {
      Alert.alert('You are in the last page')
    }
  }

  _handleLoadLess = () => {
    console.log('load less')
    if (this.props.page > 0) {
      this.props.onLoadMoreCharacters(this.props.page - 1)
    } else {
      Alert.alert('You are in the first page')
    }
  }

  _renderEmpty = () => {
    return (
      <View style={styles.listEmpty}>
        <ActivityIndicator animating={true} size={'large'} />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageHeader} source={require('../../../resources/logo-marvel.jpeg')} />
        </View>
        <View style={styles.paginationContainer}>
          <Button label={'<< Prev'} onButtonPress={this._handleLoadLess} disabled={this.props.isFetching} />
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              {this.props.totalPages > 0 ? 'Page: ' + (this.props.page + 1) + ' / ' + this.props.totalPages : ''}
            </Text>
          </View>
          <Button
            label={'Next >>'}
            onButtonPress={this._handleLoadMore}
            style={{ color: 'white' }}
            disabled={this.props.isFetching}
          />
        </View>

        <FlatList
          ref="listRef"
          renderItem={item => this._renderItem(item)}
          data={this.props.list}
          keyExtractor={item => 'cell' + item.id}
          ListEmptyComponent={this._renderEmpty}
        />
      </View>
    )
  }
}
