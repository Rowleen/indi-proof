import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail, addProductToCart } from 'src/api/product'
import { ColorButton, Storage } from 'src/components'
import classNames from 'classnames'
import propTypes from 'prop-types'

import styles from 'src/styles/pages/ProductDetails.module.sass'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [options, setOptions] = useState({
    id,
    colorCode: null,
    storageCode: null,
  })

  useEffect(() => {
    getProductDetail(id)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (product.options) {
      product.options.storages.length === 1 &&
        setOptions({
          ...options,
          storageCode: product.options.storages[0].code,
        })

      product.options.colors.length === 1 &&
        setOptions({
          ...options,
          colorCode: product.options.colors[0].code,
        })
    }
  }, [product])

  const onSelectOptions = (e) => {
    const { dataset } = e.target

    setOptions({
      ...options,
      [dataset.name]: parseInt(dataset.storage) || parseInt(dataset.color),
    })
  }

  const handleOnBuy = () => {
    addProductToCart(options)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  const buyButton = classNames({
    [styles.buyButton]: true,
    [styles.disabled]: !options.colorCode || !options.storageCode,
  })

  const colors = product.options?.colors.map((color, index) => (
    <ColorButton
      customStyle={{ backgroundColor: color.name }}
      dataColor={color.code}
      dataName="colorCode"
      handleOnClick={onSelectOptions}
      key={`color-${index}`}
      name={color.name}
      selected={options.colorCode}
    />
  ))

  const storages = product.options?.storages.map((storage, index) => (
    <Storage
      dataName="storageCode"
      dataStorage={storage.code}
      handleOnClick={onSelectOptions}
      key={`storage-${index}`}
      name={storage.name}
      selected={options.storageCode}
    />
  ))

  return (
    <section className={styles.productDetails}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={product.imgUrl}
          alt={product.model}
        />
      </div>

      <div className={styles.details}>
        <h1
          className={styles.title}
        >{`${product.brand} ${product.model} - ${product.os}`}</h1>

        <div className={styles.description}>
          <ul className={styles.listDetails}>
            <li>
              <strong>Precio: </strong> {product.price}
            </li>
            <li>
              <strong>CPU:</strong> {product.cpu}
            </li>
            <li>
              <strong>RAM:</strong> {product.ram}
            </li>
            <li>
              <strong>Resolución:</strong> {product.displayResolution}
            </li>
            <li>
              <strong>Batería:</strong> {product.battery}
            </li>
            <li>
              <strong>Cámaras:</strong>
              <ul className={styles.secondList}>
                <li>
                  <strong>Principal:</strong>{' '}
                  {Array.isArray(product.primaryCamera)
                    ? product.primaryCamera.map((info) => info)
                    : product.primaryCamera}
                </li>
                <li>
                  <strong>Secundaria:</strong>{' '}
                  {Array.isArray(product.secondaryCmera)
                    ? product.secondaryCmera.map((info) => info)
                    : product.secondaryCmera}
                </li>
              </ul>
            </li>
            <li>
              <strong>Dimensiones:</strong> {product.dimentions}
            </li>
            <li>
              <strong>Peso:</strong> {product.weight}
            </li>
          </ul>
        </div>

        <div className={styles.actions}>
          <div className={styles.colorsWrapper}>
            <h3>Colores</h3>
            <div className={styles.colors}>{colors}</div>
          </div>

          <div className={styles.storagesWrapper}>
            <h3>Almacenamiento</h3>
            <div className={styles.storages}>{storages}</div>
          </div>
        </div>

        <button className={buyButton} onClick={handleOnBuy}>
          Comprar
        </button>
      </div>
    </section>
  )
}

ProductDetails.propTypes = {
  props: propTypes.object,
}

export default ProductDetails
