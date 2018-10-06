import React from 'react'
import { View, Text, Image, Animated, Easing } from 'react-native'
import styles from './styles.js'
import { imageUri } from '../../../commons/utils/'
import Button from '../../widgets/Button'

export default class CharacterDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageExpanded: true,
      animatedHeight: new Animated.Value(50)
    }
  }

  _onShowImage() {
    if (this.state.imageExpanded) {
      Animated.timing(this.state.animatedHeight, {
        toValue: 0,
        duration: 500
      }).start()
      this.setState({ imageExpanded: false })
    } else {
      Animated.timing(this.state.animatedHeight, {
        toValue: 50,
        duration: 500
      }).start()
      this.setState({ imageExpanded: true })
    }
  }

  render() {
    const character = this.props.item
    const height = this.state.animatedHeight._value
    console.log(height)
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.imageContainer,
            { height: this.state.animatedHeight.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }
          ]}
        >
          <Image style={[styles.image]} source={imageUri(character.thumbnail)} />
        </Animated.View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>{character.name}</Text>
        </View>
        <View style={{ width: '100%', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            style={{ width: '90%', borderRadius: 20 }}
            label={this.state.imageExpanded ? 'Hide image' : 'Show image'}
            onButtonPress={() => this._onShowImage()}
          />
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
