import axios from 'axios'
import config from './config'

export const getProducts = () => axios.get(`${config.apiUrl}/api/product`)
export const getProductDetail = (id) =>
  axios.get(`${config.apiUrl}/api/product/${id}`)
export const addProductToCart = (data) =>
  axios.post(`${config.apiUrl}/api/cart`, data)
