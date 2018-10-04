import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainDark
  },
  listHeader: {
    backgroundColor: Colors.main
  },
  imageHeader: {
    width: '100%',
    height: 94,
    resizeMode: 'contain',
    marginTop: 20
  },
  listFooter: {
    backgroundColor: Colors.labelBackGround,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  listEmpty: {
    height: '100%',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.main
  },
  labelText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.main,
    paddingHorizontal: 10
  },
  imageContainer: {
    padding: 0,
    margin: 0,
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
