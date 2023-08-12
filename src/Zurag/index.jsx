import React from 'react'
import css from './style.module.css'

const Zurag = ({ zurag }) => {
  return (
    <div className={css.Zurag}>
      <img src={zurag} />
    </div>
  )
}

export default Zurag
