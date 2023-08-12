import React from 'react'
import css from './style.module.css'
import Hot from '../Hot'

const Hotuud = () => {
  return (
    <div className={css.header}>
      <Hot text="Sydney" />
      <Hot text="Dubai" />
      <Hot text="Moscow" />
      <Hot text="Soul" />
      <Hot text="Tokyo" />
      <Hot text="Berlin" />
      <Hot text="Taipei" />
      <Hot text="Rio" />
    </div>
  )
}

export default Hotuud
