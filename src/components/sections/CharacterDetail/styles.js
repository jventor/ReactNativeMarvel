import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainDark
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  labelContainer: {
    width: '100%',
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    flexDirection: 'row'
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  dataContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  labelData: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  valueData: {
    color: 'white',
    fontSize: 18
  }
})
