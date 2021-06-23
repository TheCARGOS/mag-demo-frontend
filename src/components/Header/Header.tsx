import React from 'react'
import styles from './styles.module.scss'

const Header = (): JSX.Element => {
  return (
    <div className={ styles.header }>
      <h1 className={ styles.header__title }>Mag.</h1>
    </div>
  )
}

export default Header
