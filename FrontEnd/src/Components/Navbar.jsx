import React from 'react'
import style from "./style.module.css"
import { FaBars } from "react-icons/fa";
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.nav}>
      <div className={style.navimage}>
      <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
      </div>
      <div className={style.lists}>
        <ul>
          <NavLink className={style.aa} style={{textDecoration:"none"}} to="">Home</NavLink>
          <NavLink className={style.aa}  style={{textDecoration:"none"}} >Catecory</NavLink>
          <NavLink className={style.aa} style={{textDecoration:"none"}}>Man</NavLink>
          <NavLink className={style.aa} style={{textDecoration:"none"}} >Woman</NavLink>
          <NavLink className={style.aa}  style={{textDecoration:"none"}}>Latest</NavLink>
          <NavLink className={style.aa} style={{textDecoration:"none"}} to="favorites">Wishlist</NavLink>

        </ul>

        <NavLink to="add"><button>Add</button></NavLink>
      <div className={style.bar}><FaBars/> </div>
    </div>
      </div>
    </div>
  )
}

export default Navbar