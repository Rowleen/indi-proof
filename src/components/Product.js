import React from 'react'
import propTypes from 'prop-types'

import styles from 'src/styles/components/Product.module.sass'

const Product = ({ brand, image, model, price }) => {
  return (
    <article className={styles.product}>
      <img src={image} alt={model} className={styles.productImage} />
      <div className={styles.productInfo}>
        <p className={styles.productModel}>{model}</p>
        <div className={styles.productDescription}>
          <p>{brand}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  )
}

Product.propTypes = {
  brand: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  model: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
}

export default Product
