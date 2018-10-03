import React from 'react'
import { View, FlatList, ActivityIndicator, Image, Text } from 'react-native'
import styles from './styles.js'
import CharactersListCell from '../../widgets/CharactersListCell'
import { Actions } from 'react-native-router-flux'

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
    this.props.onLoadMoreCharacters(this.props.page + 1)
    this.refs.listRef.scrollToIndex({ animated: true, index: 0, viewPosition: 0.5 })
  }

  _handleLoadLess = () => {
    console.log('load less')
    if (this.props.page > 0) {
      this.props.onLoadMoreCharacters(this.props.page - 1)
      this.refs.listRef.scrollToIndex({ animated: true, index: 0, viewPosition: 0.5 })
    }
  }

  _renderPushDownMessage = () => {
    if (this.props.page > 0) {
      return (
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
          {'Push down to advance to the next page'}
        </Text>
      )
    }
  }

  _renderHeader = () => {
    if (this.props.totalPages > 0) {
      return (
        <View style={styles.listHeader}>
          <Image style={styles.imageHeader} source={require('../../../resources/logo-marvel.jpeg')} />
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>
              {this.props.totalPages > 0 ? 'Page: ' + (this.props.page + 1) + ' / ' + this.props.totalPages : ''}
            </Text>
            {this._renderPushDownMessage()}
          </View>
        </View>
      )
    } else
      return (
        <View style={styles.listHeader}>
          <Image style={styles.imageHeader} source={require('../../../resources/logo-marvel.jpeg')} />
        </View>
      )
  }

  _renderFooter = () => {
    if (this.props.totalPages > 0 && this.props.page < this.props.totalPages) {
      return (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{'Push up to advance to the next page'}</Text>
        </View>
      )
    }
    return null
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
        <FlatList
          ref="listRef"
          renderItem={item => this._renderItem(item)}
          data={this.props.list}
          keyExtractor={item => 'cell' + item.id}
          onEndReached={this._handleLoadMore}
          onRefresh={this._handleLoadLess}
          onEndReachedThreshold={-0.3}
          ListFooterComponent={this._renderFooter}
          ListHeaderComponent={this._renderHeader}
          ListEmptyComponent={this._renderEmpty}
          stickyHeaderIndices={[0]}
          refreshing={false}
        />
      </View>
    )
  }
}
