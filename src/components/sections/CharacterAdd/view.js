import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import styles from './styles.js'
import TextInput from '../../widgets/TextInput'
import ImagePicker from 'react-native-image-picker'
import Button from '../../widgets/Button'

export default class CharacterAdd extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: null,
      name: '',
      comics: '',
      series: '',
      events: '',
      stories: ''
    }

    this.imagePickerOptions = {
      title: 'Select Image'
    }
  }

  _onImagePickerTapped() {
    ImagePicker.showImagePicker(this.imagePickerOptions, response => {
      if (response.uri && response.data) {
        let preview = { uri: response.uri }
        let data = 'data:image/jpeg;base64,' + response.data
        this.setState({ image: { preview, data } })
      }
    })
  }

  _renderImageInput() {
    const imageUri = this.state.image ? this.state.image.preview : null
    const imageLabel = this.state.image ? 'Pulsa para escoger otra imagen' : 'Pulsa para elegir imagen *'
    return (
      <View style={{ marginTop: 5, marginHorizontal: 5 }}>
        <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
          <Image source={imageUri} style={styles.image} resizeMode={'cover'} />
          <Text style={styles.imageText}>{imageLabel}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _validateForm() {
    const { name, events, series, stories, comics, image } = this.state
    if (name && events && series && stories && comics && image) {
      return true
    } else {
      return false
    }
  }

  _onSaveButtonTapped() {
    if (this._validateForm()) {
      this.props.postNewCharacter(this.state.name)
    } else {
      Alert.alert('Invalid form', 'You have to fill all the fields')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderImageInput()}
        <View style={[styles.textInputContainer, { paddingTop: 5 }]}>
          <TextInput
            label={'Name: *'}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder={'Name'}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            label={'Comics: *'}
            value={this.state.comics}
            onChangeText={comics => this.setState({ comics })}
            placeholder={'Number of comics'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            label={'Series: *'}
            value={this.state.series}
            onChangeText={series => this.setState({ series })}
            placeholder={'Number of series'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            label={'Stories: *'}
            value={this.state.stories}
            onChangeText={stories => this.setState({ stories })}
            placeholder={'Number of stories'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            label={'Events: *'}
            value={this.state.events}
            onChangeText={events => this.setState({ events })}
            placeholder={'Number of events'}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={[styles.textInputContainer, { alignItems: 'center', paddingTop: 10 }]}>
          <Button
            style={{ width: '90%', borderRadius: 20 }}
            label={'Save character'}
            onButtonPress={() => this._onSaveButtonTapped()}
          />
        </View>
      </View>
    )
  }
}
