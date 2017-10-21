import axios from 'axios'

const client = axios.create({
  baseURL: 'http://192.168.10.198:3000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default client
