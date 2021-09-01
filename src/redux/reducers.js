import { combineReducers } from 'redux'

const setProducts = (state = [], action) => {
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
    default:
      return state
  }
}

const rootReducer = combineReducers({ products: setProducts })

export default rootReducer
