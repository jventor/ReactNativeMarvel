import axios from 'axios';
import { API_KEY, HASH, BASE_URL, TIMESTAMP } from 'react-native-dotenv';

const AUTH_PATH = `?apikey=${API_KEY}&hash=${HASH}&ts=${TIMESTAMP}`;

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL;
}

export function fetchCharacters() {
  const url = '/characters' + AUTH_PATH;
  return axios.get(url);
}
