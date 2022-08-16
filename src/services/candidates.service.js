import axios from 'axios'

const baseURL = 'http://localhost:3001'

const api = axios.create({ baseURL })

export async function getCandidates() {
  const { data: candidates } = await api.get('/candidates')
  return candidates
}
