import axios from 'axios'

const baseURL = 'http://localhost:3001'

const api = axios.create({ baseURL })

export async function getCities() {
  const { data: cities } = await api.get('/cities')
  cities.sort((a, b) => a.name.localeCompare(b.name))
  return cities
}
