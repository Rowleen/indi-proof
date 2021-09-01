import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from 'src/components'
import styles from 'src/styles/components/Products.module.sass'

const Products = () => {
  const products = useSelector((state) => state.products.list)

  const productsList = products.map((product, index) => (
    <Product
      brand={product.brand}
      image={product.imgUrl}
      key={`${product.model}-${index}`}
      model={product.model}
      price={product.price}
    />
  ))

  return <section className={styles.products}>{productsList}</section>
}

export default Products
