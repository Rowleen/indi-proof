import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

import styles from 'src/styles/components/ColorButton.module.sass'

const ColorButton = ({
  dataColor,
  dataName,
  handleOnClick,
  name,
  selected,
}) => {
  const colorButton = classNames({
    [styles.colorButton]: true,
    [styles.selected]: selected === dataColor,
  })

  return (
    <span
      className={colorButton}
      data-color={dataColor}
      data-name={dataName}
      onClick={handleOnClick}
      style={{ backgroundColor: name, borderColor: name }}
      title={name}
    />
  )
}

ColorButton.propTypes = {
  dataColor: propTypes.number,
  dataName: propTypes.string,
  handleOnClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  selected: propTypes.number,
}

export default ColorButton
