import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles.js'
export default class Button extends React.Component {
  static defaultProps = {
    label: 'Button Label',
    onButtonPress: () => {}
  }

  render() {
    const { label } = this.props
    return (
      <TouchableOpacity onPress={() => this.props.onButtonPress()} style={styles.container}>
        <Text style={styles.labelText}>{label}</Text>
      </TouchableOpacity>
    )
  }
}
