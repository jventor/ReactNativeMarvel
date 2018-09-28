import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

export default class Characters extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'Characters'}</Text>
      </View>
    );
  }
}
