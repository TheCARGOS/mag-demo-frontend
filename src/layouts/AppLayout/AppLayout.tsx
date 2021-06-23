import React from 'react'
import Header from '../../components/Header/Header'
import Plan from '../../components/Plan/Plan'
import styles from './styles.module.scss'

const AppLayout = () => {
  return (
    <div className={ styles.AppLayout }>
      <Header />

      <Plan />
    </div>
  )
}

export default AppLayout
