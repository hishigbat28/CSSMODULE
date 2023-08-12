import React from 'react'
import css from './style.module.css'
import Tsonh from '../Tsonh'
import Crown from '../img/crown.webp'
import Gclass from '../img/g class.jpg'
import Maybach from '../img/Maybach.jpg'
import Prius from '../img/prius.webp'

const Ihbie = () => {
  return (
    <div className={css.Ihbie}>
      <Tsonh zurag={Crown} text="Hello friends" />
      <Tsonh zurag={Gclass} text="go to shopping" />
      <Tsonh zurag={Maybach} text="meet Friends" />
      <Tsonh zurag={Prius} text="Read a book" />
    </div>
  )
}

export default Ihbie
