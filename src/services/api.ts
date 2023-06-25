import axios from 'axios'

const api = axios.create({
  baseURL: 'https://coffee-delivery-api-dqr2.onrender.com',
})

export default api
