import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Feature } from '../../helpers/features'
import { getPlans, getPremiumPlan, getStandartPlan, Plan } from '../../helpers/plans'
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setStep(3)
  }

  const toggleFeatures = () => {
    setIsFeaturesActive( !isFeaturesActive )
  }

  return (
    <div className={ styles.paymentMethod }>
      <div>
        <form onSubmit={ handleSubmit } className={ styles.form }>
          <fieldset className={ styles.form__fieldset }>
            <label className={ styles.form__fieldset__label } htmlFor="fullname">Nombre y Apellidos</label>
            <input className={ styles.form__fieldset__input } id='fullname' type="text" />
          </fieldset>
          <fieldset className={ styles.form__fieldset }>
            <label className={ styles.form__fieldset__label } htmlFor="cardNumber">Número de la tarjeta</label>
            <div className={ styles.form__fieldset__card }>
              <input className={ styles.form__fieldset__input } id='cardNumber' type="text" placeholder='*** *** *** ***' />
              <div className={ styles.form__fieldset__card__icon }>CARD</div>
            </div>
          </fieldset>
          <div className={ styles.form__row }>
            <fieldset className={ styles.form__fieldset }>
              <label className={ styles.form__fieldset__label } htmlFor="expiresAt">F. Expira</label>
              <input className={ styles.form__fieldset__input } id='expiresAt' type="text" />
            </fieldset>
            <fieldset className={ styles.form__fieldset }>
              <label className={ styles.form__fieldset__label } htmlFor="cvc">CVC</label>
              <input className={ styles.form__fieldset__input } id='cvc' type="text" />
            </fieldset>
          </div>

          <button className={ styles.form__button } type='submit'>Pagar S/{ planInfo.cost.toFixed(2) }</button>
        </form>

        <div className={ styles.description } onClick={ toggleFeatures }>
          <div className={ styles.description__container }>
            <div className={ styles.description__row }>
              <h2 className={ styles.description__large }>{ planInfo.name }</h2>
              <span className={ styles.description__medium }>S/{ planInfo.cost } al mes</span>
            </div>

            { isFeaturesActive && (<div className={ styles.description__features }>
              <p className={ styles.description__features__description }>{ planInfo.description }</p>

              <ul className={ styles.description__features__feature }>
                { planInfo.features.map( (feat: Feature) => (
                  <li key={ feat.id }>{ feat.description }</li>
                ) ) }
              </ul>
            </div>)
            }

            <div className={ styles.description__row }>
              <a className={ styles.description__row__center } onClick={ () => setIsStandartSelected( val => !val ) } href="#!">Cambiar a { alternativePlan.name }</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
