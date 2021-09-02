import React from 'react'
import { useSelector } from 'react-redux'
import logo from 'src/logo.svg'
import classNames from 'classnames'
import { Searcher } from 'src/components'

import styles from 'src/styles/components/Header.module.sass'

const Header = () => {
  const cart = useSelector((state) => state.products.cart)

  const shopingCart = classNames({
    fas: true,
    'fa-shopping-cart': true,
    [styles.shopingCart]: true,
  })

  const gitHub = classNames({
    fab: true,
    'fa-github-alt': true,
    [styles.gitHub]: true,
  })

  const home = classNames({
    fas: true,
    'fa-home': true,
    [styles.home]: true,
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

        <nav className={styles.navContainer}>
          <a className={styles.link} href="#">
            <i className={home}></i>
            Inicio
          </a>
          <a
            className={styles.link}
            href="https://github.com/Rowleen/indi-proof"
            target="blank"
            title="Repositorio en GitHub"
          >
            <i className={gitHub}></i>
            GitHub
          </a>
          <div className={styles.link}>
            <i className={shopingCart}></i>
            <span className={styles.count}>{cart}</span>
          </div>

          <Searcher />
        </nav>
      </div>
    </header>
  )
}

export default Header
