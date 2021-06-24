import React, { Dispatch, MouseEventHandler } from 'react'
import { useEffect } from 'react'
import { SetStateAction } from 'react'
import { Feature, getFeatures } from '../../../helpers/features'
import { Plan } from '../../../helpers/plans'
import styles from '../styles.module.scss'

export interface PaymentDetailsProps {
  isFeaturesActive: boolean,
  planInfo: Plan,
  alternativePlan: Plan,
  setIsStandartSelected: Dispatch<SetStateAction<boolean>>,
  setIsFeaturesActive:  Dispatch<SetStateAction<boolean>>
}

const PaymentDetails = (paymentDetailsProps: PaymentDetailsProps) => {
  const { isFeaturesActive, planInfo, setIsStandartSelected, setIsFeaturesActive, alternativePlan } = paymentDetailsProps

  const toggleFeatures = () => {
    setIsFeaturesActive( !isFeaturesActive )
  }

  const handleTogglePlan = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setIsStandartSelected(val => !val)
  }

  return (
    <div className={ styles.description} onClick={ toggleFeatures }>
      <div className={ styles.description__container }>
        <div className={ styles.description__row }>
          <h2 className={ styles.description__large }>{ planInfo.name }</h2>
          <span className={ styles.description__medium }>S/{planInfo.cost} al mes</span>
        </div>

        {isFeaturesActive && (<div className={ styles.description__features }>
          <p className={ styles.description__features__description }>{ planInfo.description }</p>

          <ul className={ styles.description__features__feature }>
            { planInfo.features.map((feat: Feature) => (
              <li key={ feat.id } className={ !feat.isActive ? styles.description__features__feature__inactive : ''  }>✔️ { feat.description }</li>
            ))}
          </ul>
        </div>)
        }

        <div className={ styles.description__row }>
          <a className={ styles.description__row__center} onClick={ handleTogglePlan } href="#!">Cambiar a {alternativePlan.name }</a>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
