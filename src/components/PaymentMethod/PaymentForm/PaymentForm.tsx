import React, { Dispatch, SetStateAction } from 'react'
import { Plan } from '../../../helpers/plans'
import styles from '../styles.module.scss'

export interface PlanFormProps {
  planInfo: Plan,
  setStep: Dispatch<SetStateAction<number>>
}

const PaymentForm = (planFormProps: PlanFormProps) => {
  const { planInfo, setStep } = planFormProps

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <form onSubmit={ handleSubmit } className={styles.form}>
      <fieldset className={styles.form__fieldset}>
        <label className={styles.form__fieldset__label} htmlFor="fullname">Nombre y Apellidos</label>
        <input className={styles.form__fieldset__input} id='fullname' type="text" />
      </fieldset>
      <fieldset className={styles.form__fieldset}>
        <label className={styles.form__fieldset__label} htmlFor="cardNumber">Número de la tarjeta</label>
        <div className={styles.form__fieldset__card}>
          <input className={styles.form__fieldset__input} id='cardNumber' type="text" placeholder='*** *** *** ***' />
          <div className={styles.form__fieldset__card__icon}>CARD</div>
        </div>
      </fieldset>
      <div className={styles.form__row}>
        <fieldset className={styles.form__fieldset}>
          <label className={styles.form__fieldset__label} htmlFor="expiresAt">F. Expira</label>
          <input className={styles.form__fieldset__input} id='expiresAt' type="text" />
        </fieldset>
        <fieldset className={styles.form__fieldset}>
          <label className={styles.form__fieldset__label} htmlFor="cvc">CVC</label>
          <input className={styles.form__fieldset__input} id='cvc' type="text" />
        </fieldset>
      </div>

      <button className={styles.form__button} type='submit'>Pagar S/{planInfo.cost.toFixed(2)}</button>
    </form>
  )
}

export default PaymentForm
