import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  dataContainer: {
    flexDirection: 'row'
  },
  label: {
    color: 'white'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: Colors.main,

    height: 200,
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
