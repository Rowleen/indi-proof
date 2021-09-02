import React, { useEffect, useState } from 'react'
import { Product, Searcher } from 'src/components'
import { useSelector } from 'react-redux'
import styles from 'src/styles/components/Products.module.sass'

const Products = () => {
  const products = useSelector((state) => state.products.list)
  const filteredList = useSelector((state) => state.products.filteredList)

  const [list, setList] = useState([])

  useEffect(() => {
    if (filteredList && filteredList.length > 0) {
      setList(filteredList)
    } else {
      setList(products)
    }
  }, [filteredList])

  let productsList = []
  if (list && list.length > 0) {
    productsList = list.map((product, index) => (
      <Product
        brand={product.brand}
        image={product.imgUrl}
        id={product.id}
        key={`${product.model}-${index}`}
        model={product.model}
        price={product.price}
      />
    ))
  }

  return (
    <>
      <Searcher />
      <section className={styles.products}>{productsList}</section>
    </>
  )
}

export default Products
