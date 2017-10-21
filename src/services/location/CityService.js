
import Http from '../client'

export const getCityName = (position) => {
  return Http.get(`/endereco?lat=${position.lat}&lng=${position.lng}`)
    .then(res => res.data)
}
