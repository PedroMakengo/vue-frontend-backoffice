import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://teste.api.isfactory.app',
  headers: {
    'Content-Type': 'application/json',
    company: 'vendap'
  }
})

export { httpClient }
