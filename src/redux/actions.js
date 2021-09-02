export const setProducts = (payload) => {
  return {
    type: 'SET_PRODUCTS',
    payload,
  }
}

export const setSearching = (payload) => {
  return { type: 'SET_SEARCH', payload }
}

export const setItem = (payload) => {
  return { type: 'SET_ITEM', payload }
}
