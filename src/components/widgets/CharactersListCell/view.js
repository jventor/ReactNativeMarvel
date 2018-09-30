import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { imageUri } from '../../../commons/utils'

export default class CharactersListCell extends React.Component {
  static defaultProps = {
    character: null,
    onCharacterPress: () => {}
  }

  render() {
    const { character } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onCharacterPress(character)}>
        <Image style={styles.image} source={imageUri(character.thumbnail)} />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{character.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
