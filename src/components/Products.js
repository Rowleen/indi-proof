import React from 'react'
import { useSelector } from 'react-redux'
import { Product, Searcher } from 'src/components'
import styles from 'src/styles/components/Products.module.sass'

const Products = () => {
  const products = useSelector((state) => state.products.list)

  const productsList = products.map((product, index) => (
    <Product
      brand={product.brand}
      image={product.imgUrl}
      id={product.id}
      key={`${product.model}-${index}`}
      model={product.model}
      price={product.price}
    />
  ))

  return (
    <>
      <Searcher />
      <section className={styles.products}>{productsList}</section>
    </>
  )
}

export default Products
