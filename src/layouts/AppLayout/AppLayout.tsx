import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import PlanSelector from '../../components/PlanSelector/PlanSelector'
import { getPlans, getPremiumPlan, getStandartPlan } from '../../helpers/plans'
import styles from './styles.module.scss'

const AppLayout = (): JSX.Element => {
  const [isStandartSelected, setIsStandartSelected] = useState( true )
  const [planInfo, setPlanInfo] = useState( getStandartPlan() )

  useEffect(() => {
    isStandartSelected ?
      setPlanInfo( getStandartPlan() ) :
      setPlanInfo( getPremiumPlan() )
  }, [isStandartSelected])

  return (
    <div className={ styles.AppLayout }>
      <Header />

      <div className={ styles.AppLayout__container }>
        <PlanSelector
          isStandartSelected={ isStandartSelected }
          setIsStandartSelected={ setIsStandartSelected }
          planInfo={ planInfo }
        />
      </div>
    </div>
  )
}

export default AppLayout