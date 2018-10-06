import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: Colors.main,
    height: 180,
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 5
  },
  imageText: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '46%',
    textAlign: 'center',
    left: 0,
    right: 0
  }
})
