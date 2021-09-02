import { combineReducers } from 'redux'
import initialState from './initialState'

const setProducts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        list: action.payload.products,
        feedDate: action.payload.feedDate,
      }
    case 'SET_SEARCH':
      return {
        ...state,
        filteredList: state.list.filter((products) =>
          action.payload.brand
            ? action.payload.term === products.brand
            : action.payload.term === products.model
        ),
        searching: { term: action.payload.term },
      }
    case 'SET_ITEM':
      return {
        ...state,
        cart: state.cart + action.payload.count,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ products: setProducts })

export default rootReducer
