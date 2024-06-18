import { httpClient } from '@/api'

class UsecaseObterListaExercicos {
  static url = '/api/geral/ano/exercicio'

  static async execute() {
    const response = await httpClient.get(this.url)
    return response
  }
}
export { UsecaseObterListaExercicos }
