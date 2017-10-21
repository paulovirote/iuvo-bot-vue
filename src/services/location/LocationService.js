export const getLocation = () => {
  return new Promise((resolve, reject) => {
    var startPos
    var geoOptions = {
      enableHighAccuracy: true
    }

    var geoSuccess = function (position) {
      startPos = position
      let lat = startPos.coords.latitude
      let lng = startPos.coords.longitude

      resolve({ lat, lng })
    }
    var geoError = function (error) {
      console.log('Error occurred on get location. Error code: ' + error.code)
      reject(error)
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    }

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions)
  })
}
