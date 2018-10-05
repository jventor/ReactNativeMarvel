import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles.js'
import TextInput from '../../widgets/TextInput'
export default class CharacterAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    const image = require('../../../resources/logo-marvel.jpeg')
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode={'cover'} />
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 10, paddingTop: 10 }}>
          <TextInput
            label={'Name: *'}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder={'Name'}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <TextInput
            label={'Comics: *'}
            value={this.state.comics}
            onChangeText={comics => this.setState({ comics })}
            placeholder={'Number of comics'}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <TextInput
            label={'Series: *'}
            value={this.state.series}
            onChangeText={series => this.setState({ series })}
            placeholder={'Number of series'}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <TextInput
            label={'Stories: *'}
            value={this.state.stories}
            onChangeText={stories => this.setState({ stories })}
            placeholder={'Number of stories'}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <TextInput
            label={'Events: *'}
            value={this.state.events}
            onChangeText={events => this.setState({ events })}
            placeholder={'Number of events'}
          />
        </View>
      </View>
    )
  }
}
