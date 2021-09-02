import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

import styles from 'src/styles/components/Product.module.sass'

const Product = ({ brand, id, image, model, price }) => {
  return (
    <article className={styles.product}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={model} className={styles.productImage} />
      </Link>

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
  id: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  model: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
}

export default Product
