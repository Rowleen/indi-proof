import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from 'src/styles/components/Searcher.module.sass'

const Searcher = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState({
    term: '',
    brand: false,
    model: false,
  })

  const handleOnChange = (e) => {
    const { value, name } = e.target

    if (value === 'brand' && name === 'filter')
      setSearch({ ...search, brand: true, model: false })
    if (value === 'model' && name === 'filter')
      setSearch({ ...search, brand: false, model: true })
    if (name === 'term') setSearch({ ...search, term: value })
  }

  const handleOnChangeForm = () =>
    dispatch({ type: 'SET_SEARCH', payload: search })

  return (
    <div className={styles.searcher}>
      <form className={styles.form} onChange={handleOnChangeForm}>
        <input
          className={styles.searcher__input}
          type="text"
          name="term"
          placeholder="Búsqueda"
          onChange={handleOnChange}
        />

        <div className={styles.filters}>
          <label htmlFor="brand" className={styles.filter}>
            <input
              type="radio"
              id="brand"
              name="filter"
              value="brand"
              onChange={handleOnChange}
            />
            Marca
          </label>

          <label htmlFor="model" className={styles.filter}>
            <input
              type="radio"
              id="model"
              name="filter"
              value="model"
              onChange={handleOnChange}
            />
            Modelo
          </label>
        </div>
      </form>
    </div>
  )
}

export default Searcher
