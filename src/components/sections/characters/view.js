import React from 'react';
import { View, Text, Alert, FlatList, Image } from 'react-native';
import styles from './styles.js';
import * as api from '../../../api';
import CharactersListCell from '../../widgets/CharactersListCell/view';

export default class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    api
      .fetchCharacters()
      .then(res => this.setState({ list: res.data.data.results }))
      .catch(err => console.log('Error (Characters: componentDidMount: ', err));
  }

  _renderItem({ item }) {
    console.log('Item: ', item);
    return <CharactersListCell character={item} />;
  }

  render() {
    console.log(this.state.list);
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={item => this._renderItem(item)}
          data={this.state.list}
          keyExtractor={item => 'cell' + item.id}
          numColumns={2}
        />
      </View>
    );
  }
}
