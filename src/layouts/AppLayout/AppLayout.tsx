import React from 'react'
import Header from '../../components/Header/Header'
import PlanSelector from '../../components/PlanSelector/PlanSelector'
import styles from './styles.module.scss'

const AppLayout = (): JSX.Element => {
  return (
    <div className={ styles.AppLayout }>
      <Header />

      <div className={ styles.AppLayout__container }>
        <PlanSelector />
      </div>
    </div>
  )
}

export default AppLayout
