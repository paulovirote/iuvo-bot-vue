import Http from '../client'

export const saveInformation = (data) => {
  return Http.post('/ocorrencia', data)
}
