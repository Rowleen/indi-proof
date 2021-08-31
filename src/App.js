import { useEffect } from 'react'
import { getProducts } from './api/product'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const feedDate = useSelector((state) => state.products.feedDate)

  useEffect(() => {
    const date = new Date()

    if (!feedDate) {
      getProducts()
        .then((products) => {
          dispatch({
            type: 'SET_PRODUCTS',
            payload: { products: products.data, feedDate: date },
          })
        })
        .catch((err) => console.log(err))
    } else {
      const lastDate = new Date(feedDate)
      const diff = date.getTime() - lastDate.getTime()

      if (diff > 60000) {
        getProducts()
          .then((products) =>
            dispatch({
              type: 'SET_PRODUCTS',
              payload: { products: products.data, feedDate: date },
            })
          )
          .catch((err) => console.log(err))
      }
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
