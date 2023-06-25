import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://coffee-delivery-api-dqr2.onrender.com',
  baseURL: 'http://localhost:10000',
})

export default api
