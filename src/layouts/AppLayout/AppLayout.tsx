import React, { useState, useEffect } from 'react'
import ConfirmationStep from '../../components/ConfirmationStep/ConfirmationStep'
import Header from '../../components/Header/Header'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import PlanSelector from '../../components/PlanSelector/PlanSelector'
import { getPlans, getPremiumPlan, getStandartPlan } from '../../helpers/plans'
import styles from './styles.module.scss'

const AppLayout = (): JSX.Element => {
  const [isStandartSelected, setIsStandartSelected] = useState( true )
  const [planInfo, setPlanInfo] = useState( getStandartPlan() )
  const [step, setStep] = useState(1)

  useEffect(() => {
    isStandartSelected ?
      setPlanInfo( getStandartPlan() ) :
      setPlanInfo( getPremiumPlan() )
  }, [isStandartSelected])

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (<PlanSelector
          isStandartSelected={ isStandartSelected }
          setIsStandartSelected={ setIsStandartSelected }
          planInfo={ planInfo }
          setStep={ setStep }
        />)

      case 2:
        return (<PaymentMethod
          setIsStandartSelected={ setIsStandartSelected }
          planInfo={ planInfo }
          setStep={ setStep }
        />)

      case 3:
        return (<ConfirmationStep
          planInfo={ planInfo }
          setStep={ setStep }
        />)

      default:
        return (<PlanSelector
          isStandartSelected={ isStandartSelected }
          setIsStandartSelected={ setIsStandartSelected }
          planInfo={ planInfo }
          setStep={ setStep }
        />)
    }
  }

  return (
    <div className={ styles.AppLayout }>
      <Header
        step={ step }
        setStep={ setStep }
      />

      <div className={ styles.AppLayout__container }>
        { renderSteps() }
      </div>
    </div>
  )
}

export default AppLayout