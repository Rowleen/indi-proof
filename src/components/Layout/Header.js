import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { isMobile } from 'react-device-detect'
import logo from 'src/logo.svg'

import styles from 'src/styles/components/Header.module.sass'

const Header = () => {
  const cart = useSelector((state) => state.products.cart)

  const shopingCart = classNames({
    fas: true,
    'fa-shopping-cart': true,
    [styles.shopingCart]: true,
  })

  const navContainer = classNames({
    [styles.navContainer]: true,
    [styles.mobile]: isMobile,
  })

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <a href="#">
            <img src={logo} className={styles.logo} alt="logo" />
            IndiProof
          </a>
        </div>

        <nav className={navContainer}>
          <div className={styles.link}>
            <i className={shopingCart}></i>
            <span className={styles.count}>{cart || 0}</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
