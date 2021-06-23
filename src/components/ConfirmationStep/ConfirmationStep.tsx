import React from 'react'
import { SetStateAction } from 'react'
import { Dispatch } from 'react'
import { Plan } from '../../helpers/plans'
import ConfirmationHeader from './ConfirmationHeader/ConfirmationHeader'
import styles from './styles.module.scss'

export interface ConfirmationStepProps {
  planInfo: Plan,
  setStep: Dispatch<SetStateAction<number>>
}

const ConfirmationStep = (confirmationStepProps: ConfirmationStepProps) => {
  const { planInfo, setStep } = confirmationStepProps
  
  return (
    <div className={ styles.confirmationStep }>
      <ConfirmationHeader
        planInfo={ planInfo }
      />

      <p className={ styles.confirmationStep__body }>
        <p className={ styles.confirmationStep__body__description }>{ planInfo.description }</p>
        <a className={ styles.confirmationStep__body__link } onClick={ () => setStep(1) } href="#!">Ir a ver mi plan</a>
      </p>

      <div className={ styles.confirmationStep__footer }>
        <a href="#!">Ir a Mag.pe</a>
      </div>
    </div>
  )
}

export default ConfirmationStep
