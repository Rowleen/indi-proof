import React from 'react'
import logo from 'src/logo.svg'
import { Searcher } from 'src/components'
import styles from 'src/styles/components/Header.module.sass'

const Header = () => {
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
            Inicio
          </a>
          <a className={styles.link} href="#">
            GitHub
          </a>
          <a className={styles.link} href="#">
            Carrito
          </a>

          <Searcher />
        </nav>
      </div>
    </header>
  )
}

export default Header
