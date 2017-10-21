
import Http from '../client'

export const getWeatherInfos = (position) => {
  return Http.get(`/tempo?lat=${position.lat}&lng=${position.lng}`)
    .then(res => res.data)
}
