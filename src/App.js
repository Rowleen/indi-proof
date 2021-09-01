import { useEffect } from 'react'
import { getProducts } from './api/product'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from './redux/actions'
import { Products } from 'src/components'
import styles from './styles/App.module.sass'

function App() {
  const dispatch = useDispatch()
  const feedDate = useSelector((state) => state.products.feedDate)

  useEffect(() => {
    const date = new Date()

    if (!feedDate) {
      getProducts()
        .then((products) => {
          dispatch(setProducts({ products: products.data, feedDate: date }))
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
    <div className={styles.App}>
      <Products />
    </div>
  )
}

export default App
