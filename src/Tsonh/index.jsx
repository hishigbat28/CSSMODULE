import React from 'react'
import css from './style.module.css'
import Zurag from '../Zurag'
import Tailbar from '../Tailbar'

const Tsonh = ({ zurag, text }) => {
  return (
    <div className={css.Tsonh}>
      <Zurag zurag={zurag} />
      <Tailbar text={text} />
    </div>
  )
}

export default Tsonh
