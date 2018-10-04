import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'
import { BASE_URL, REG_PER_REQUEST } from '../commons/constants'

const AUTH_PATH = `?apikey=${API_KEY}`

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Referer'] = 'developer.marvel.com'
}

export function fetchCharacters(page = 0) {
  const offset = page === 0 ? '' : `&offset=${REG_PER_REQUEST * page}}`
  const url = '/characters' + AUTH_PATH + offset
  return axios.get(url)
}
