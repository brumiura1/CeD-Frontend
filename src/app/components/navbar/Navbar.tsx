import React from 'react'
import styles from './Navbar.module.scss'
import NavbarButtonHome from './navbarButtonHome/NavbarButtonHome'
import NavbarButtonProfile from './navbarButtonProfile/NavbarButtonProfile'
import NavbarButtonLogout from './navbarButtonLogout/NavbarButtonLogout'
import Image from 'next/image';
import NavbarButtonConfig from './navbarButtonConfig/NavbarButtonConfig'
import NavbarButtonRegistration from './navbarButtonRegistration/NavbarButtonRegistration'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src='/logo1.png'
          alt='Logotipo Carro em Dados'
          fill 
          style={{objectFit:'contain' }}/>
      </div>
      <div className={styles.buttonsContainer}>
        <NavbarButtonHome />
        <NavbarButtonProfile />
        <NavbarButtonRegistration />
        <NavbarButtonLogout />
      </div>
    </div>
  )
}

export default Navbar