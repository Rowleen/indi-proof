export const setProducts = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload,
  }
}

export const setSearch = (payload) => {
  return { type: 'SET_SEARCH', payload }
}

export const setItem = (payload) => {
  return { type: 'SET_ITEM', payload }
}
