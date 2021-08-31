import React from 'react'
import propTypes from 'prop-types'
import { Header, Footer } from 'src/components'
import styles from 'src/styles/components/Layout.module.sass'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
