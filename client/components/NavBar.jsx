import React from 'react'
import style from '../styles/NavBar.module.scss'
import TheButton from './TheButton'

function NavBar() {

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <h1>AWC</h1>
          <div className={style.navBarList}>
            <TheButton buttonWord={"Upload Csv"} />
          </div>
      </div>
    </nav>
  )
}
export default NavBar
