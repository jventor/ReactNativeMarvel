import axios from 'axios'
import { API_KEY, HASH, BASE_URL, TIMESTAMP } from 'react-native-dotenv'

const AUTH_PATH = `?apikey=${API_KEY}&hash=${HASH}&ts=${TIMESTAMP}`
const REG_PER_REQUEST = 20

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL
  axios.defaults.headers.common['Referer'] = 'http://dccomics.com'
}

export function fetchCharacters(page = 0) {
  const offset = page === 0 ? '' : `&offset=${REG_PER_REQUEST * page}}`
  const url = '/characters' + AUTH_PATH + offset
  return axios.get(url)
}
