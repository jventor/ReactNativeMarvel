import React from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './styles.js';
import * as api from '../../../api';

export default class Characters extends React.Component {
  render() {
    api
      .fetchCharacters()
      .then(res => {
        console.log('resultado: ', res.data.data.results);
        Alert.alert(res.data.data.results.length.toString());
      })
      .catch(err => console.log(err));
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{'Characters'}</Text>
      </View>
    );
  }
}
