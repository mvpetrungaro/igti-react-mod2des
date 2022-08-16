import axios from 'axios'

const baseURL = 'http://localhost:3001'

const api = axios.create({ baseURL })

export async function getElections() {
  const { data: elections } = await api.get('/election')
  return elections
}
