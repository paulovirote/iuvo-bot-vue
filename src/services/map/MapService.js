import Http from '../client'

export const getOcorrencias = () => {
  return Http.get('/ocorrencia')
    .then(res => res.data)
}
