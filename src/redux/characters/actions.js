import * as types from './types.js'
import * as api from '../../api'
import { REG_PER_REQUEST } from 'react-native-dotenv'

export function setFetching(value) {
  return {
    type: types.CHARACTERS_SET_FETCHING,
    value: value
  }
}

export function setList(value) {
  return {
    type: types.CHARACTERS_UPDATE_LIST,
    value: value
  }
}

export function setPage(value) {
  return {
    type: types.CHARACTERS_SET_PAGE,
    value: value
  }
}

export function setTotalPages(value) {
  return {
    type: types.CHARACTERS_SET_TOTAL_PAGES,
    value: Math.ceil(value / REG_PER_REQUEST)
  }
}

export function fetchCharactersList() {
  return (dispatch, getState) => {
    dispatch(setFetching(true))
    const page = getState().characters.page
    console.log('page: ', page)
    api
      .fetchCharacters(getState().characters.page)
      .then(response => {
        dispatch(setFetching(false))
        dispatch(setList(response.data.data.results))
        dispatch(setTotalPages(response.data.data.total))
      })
      .catch(error => {
        dispatch(setFetching(false))
        console.error('fetchCharactersList', error)
      })
  }
}
