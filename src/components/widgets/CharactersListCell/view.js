import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles.js';

export default class CharactersListCell extends React.Component {
  static defaultProps = {
    character: null,
    onCharacterPress: () => {}
  };

  render() {
    const { character } = this.props;
    //TODO: poner path en luhar de paths, puesto para provocar usar la imagen auxiliar
    const imageVariant = 'landscape_xlarge'; //
    const image =
      character.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
        ? require('../../../resources/placeholder.jpg')
        : { uri: `${character.thumbnail.path}/${imageVariant}.${character.thumbnail.extension}` };
    //
    return (
      <TouchableOpacity style={styles.cellContainer} onPress={() => this.props.onCharacterPress()}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>{character.name}</Text>
        </View>
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
    );
  }
}
