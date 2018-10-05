import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles.js'
export default class Button extends React.Component {
  static defaultProps = {
    label: 'Button Label',
    onButtonPress: () => {}
  }

  render() {
    const { label, disabled } = this.props
    return (
      <TouchableOpacity
        onPress={() => this.props.onButtonPress()}
        style={[styles.container, this.props.style]}
        disabled={disabled}
      >
        <Text style={styles.labelText}>{label}</Text>
      </TouchableOpacity>
    )
  }
}
