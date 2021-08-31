import { combineReducers } from 'redux'

const setProducts = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        list: action.payload.products,
        feedDate: action.payload.feedDate,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ products: setProducts })

export default rootReducer
