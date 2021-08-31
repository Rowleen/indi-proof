export const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
  }
}

export const setProducts = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload,
  }
}
