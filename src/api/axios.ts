import axios from "axios";


export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


export const post = async <T>(url: string, data: T ) => {
  const response = await api.post(url, data)
  return response
}
export const getPokemonId = async( id: number ) => {
  const response = await api.get(`${id}`)
  return response
}