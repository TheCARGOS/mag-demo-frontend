import React from 'react'
import { SetStateAction } from 'react'
import { Dispatch } from 'react'
import { Plan } from '../../helpers/plans'
import styles from './styles.module.scss'

export interface ConfirmationStepProps {
  planInfo: Plan,
  setStep: Dispatch<SetStateAction<number>>
}

const ConfirmationStep = (confirmationStepProps: ConfirmationStepProps) => {
  const { planInfo, setStep } = confirmationStepProps
  
  return (
    <div className={ styles.confirmationStep }>
      <header className={ styles.confirmationStep__header }>
        <img
          className={ styles.confirmationStep__header__checkedIcon }
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrhuaTAoIIXgn5ircQD43ewolGO5mP0uVJmX2aT2br0Cvp0JBwogPx-L6IGborNf-InE&usqp=CAU"
          alt="aproved icon"
        />

        <h2 className={ styles.confirmationStep__header__titleSmall }>Bienvenido, has adquirido el plan</h2>
        <h2 className={ styles.confirmationStep__header__titleLarge }>{ planInfo.name }</h2>
        <h3 className={ styles.confirmationStep__header__titleMedium }>S/.{ planInfo.cost } al mes</h3>
      </header>

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
