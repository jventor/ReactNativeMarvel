import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: Colors.main
  },
  labelContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.labelBackGround
  },
  label: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})
