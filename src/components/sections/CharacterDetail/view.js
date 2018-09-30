import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles.js'
import { imageUri } from '../../../commons/utils/'

export default class CharacterDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.item
    }
  }

  render() {
    const character = this.props.item

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageUri(character.thumbnail)} />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{character.name}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.labelData}>{'Comics: '}</Text>
          <Text style={styles.valueData}>{character.comics.available}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.labelData}>{'Series: '}</Text>
          <Text style={styles.valueData}>{character.series.available}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.labelData}>{'Stories: '}</Text>
          <Text style={styles.valueData}>{character.stories.available}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.labelData}>{'Events: '}</Text>
          <Text style={styles.valueData}>{character.events.available}</Text>
        </View>
      </View>
    )
  }
}
