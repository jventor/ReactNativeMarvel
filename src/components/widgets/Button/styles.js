import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.mainDarker,
    width: 100,
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  }
})
