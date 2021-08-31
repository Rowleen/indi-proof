import { createStore } from 'redux'
import rootReducers from './reducers'
import { loadState, saveState } from './localStorage'

const persitedState = loadState()

const store = createStore(
  rootReducers,
  persitedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    products: store.getState().products,
  })
})

export default store
