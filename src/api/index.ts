import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export { httpClient }
