import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cellContainer: {
    width: '50%',
    height: 300,
    backgroundColor: 'rgb(24,24,24)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderColor: 'grey',
    borderWidth: 1
  },
  detailContainer: {
    flexDirection: 'row',
    padding: 5
  },

  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});
