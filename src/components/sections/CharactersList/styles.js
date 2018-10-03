import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors'
import React from 'react'

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
  }
})
