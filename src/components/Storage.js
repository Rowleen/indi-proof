import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

import styles from 'src/styles/components/Storage.module.sass'

const Storage = ({ dataStorage, dataName, handleOnClick, name, selected }) => {
  const storage = classNames({
    [styles.storage]: true,
    [styles.selected]: selected === dataStorage,
  })

  return (
    <span
      className={storage}
      data-storage={dataStorage}
      data-name={dataName}
      onClick={handleOnClick}
    >
      {name}
    </span>
  )
}

Storage.propTypes = {
  dataStorage: propTypes.number,
  dataName: propTypes.string,
  handleOnClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  selected: propTypes.number,
}

export default Storage
