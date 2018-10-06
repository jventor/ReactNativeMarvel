import * as types from './types.js'
import {} from '../../commons/utils'

const initialState = {
  isFetching: false,
  list: [],
  item: null,
  page: 0,
  totalPages: 0
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHARACTERS_UPDATE_LIST:
      return {
        ...state,
        list: action.value
      }
    case types.CHARACTERS_SET_PAGE:
      return {
        ...state,
        page: action.value
      }
    case types.CHARACTERS_SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.value
      }
    case types.CHARACTERS_SET_ITEM:
      return {
        ...state,
        item: action.value
      }
    default:
      return state
  }
}
