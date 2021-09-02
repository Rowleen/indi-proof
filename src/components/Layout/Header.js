import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory, useLocation, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { isMobile } from 'react-device-detect'
import logo from 'src/logo.svg'

import styles from 'src/styles/components/Header.module.sass'

const Header = () => {
  const history = useHistory()
  const location = useLocation()

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

  const angleLeft = classNames({
    fas: true,
    'fa-angle-left': true,
    [styles.angleLeft]: true,
    [styles.hidden]: location.pathname === '/',
  })

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <i className={angleLeft} onClick={() => history.goBack()}></i>

          <Link to="/">
            <img src={logo} className={styles.logo} alt="logo" />
            IndiProof
          </Link>
        </div>

        <nav className={navContainer}>
          <div className={styles.link}>
            <i className={shopingCart}></i>
            <span className={styles.count}>{cart}</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default withRouter(Header)
