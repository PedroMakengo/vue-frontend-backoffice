import { httpClient } from '@/api'

export const UsecaseAuthentication = async () => {
  const url = '/api/'

  const response = await httpClient.get(url)
  return response
}
