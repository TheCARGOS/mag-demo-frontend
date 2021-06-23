import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Feature } from '../../helpers/features'
import { getPremiumPlan, getStandartPlan, Plan } from '../../helpers/plans'
import PaymentDetails from './PaymentDetails/PaymentDetails'
import PaymentForm from './PaymentForm/PaymentForm'
import styles from './styles.module.scss'

export interface PaymentMethodProps {
  setIsStandartSelected: Dispatch<SetStateAction<boolean>>,
  planInfo: Plan,
  setStep: Dispatch<SetStateAction<number>>
}

const PaymentMethod = (PaymentMethod: PaymentMethodProps): JSX.Element => {
  const { setIsStandartSelected, planInfo, setStep } = PaymentMethod
  const [alternativePlan, setAlternativePlan] = useState( planInfo.name !== 'Plan Estándar' ? getStandartPlan() : getPremiumPlan() )
  const [isFeaturesActive, setIsFeaturesActive] = useState(false)

  useEffect(() => {
    planInfo.name !== 'Plan Estándar' ?
      setAlternativePlan( getStandartPlan() ) :
      setAlternativePlan( getPremiumPlan() )
  }, [planInfo])

  return (
    <div className={ styles.paymentMethod }>
      <div>
        <PaymentForm
          planInfo={ planInfo }
          setStep={ setStep }
        />

        <PaymentDetails
          isFeaturesActive={ isFeaturesActive }
          planInfo={ planInfo }
          alternativePlan={ alternativePlan }
          setIsStandartSelected={ setIsStandartSelected }
          setIsFeaturesActive={ setIsFeaturesActive }
        />
      </div>
    </div>
  )
}

export default PaymentMethod
