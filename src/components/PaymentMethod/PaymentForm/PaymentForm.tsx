import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { Plan } from '../../../helpers/plans'
import { UserInfo } from '../../../helpers/user'
import styles from '../styles.module.scss'

export interface PlanFormProps {
  planInfo: Plan,
  setStep: Dispatch<SetStateAction<number>>,
  initialValues: UserInfo
  setUserInfo: Dispatch<SetStateAction<UserInfo>>
}

export interface FormError {
  found: boolean,
  message: string
}

const PaymentForm = (planFormProps: PlanFormProps) => {
  const { planInfo, setStep, initialValues, setUserInfo } = planFormProps
  const [formState, setFormState] = useState( initialValues )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const validateForm = (form: object): FormError => {
    let foundError = { found: false, message: '' }

    // validating length
    Object.values(formState).forEach( val => {
      if ( val.length < 3 ) {
        foundError = {
          found: true,
          message: 'Los campos no pueden tener menos de 3 caracteres'
        }
      }
    } )

    // validating credit card number
    if ( formState.cardNumber.length < 15 ) {
      foundError = {
        found: true,
        message: 'El nro. de tarjeta debe de ser mayor o igual a 15'
      }
    }

    // validating date
    const dateRegExp = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/
    if ( !dateRegExp.test( formState.expiresAt ) ) {
      foundError = {
        found: true,
        message: 'Ingrese la fecha en el formato correcto'
      }
    }

    // validating cvc
    if ( formState.cvc.length !== 3 ) {
      foundError = {
        found: true,
        message: 'CVC es un campo de tres dígitos'
      }
    }
    
    return foundError
  }
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { found } = validateForm( formState )
    if ( found) {
      return
    } else {
      setUserInfo( formState )
      setStep(3)
    }
    
  }

  const renderErrorMessage = () => {
    const { found, message } = validateForm( formState )
    return found && <div className={ styles.errorContainer }>
      <span className={ styles.errorContainer__message }>{ message }</span>
    </div>
  }
  
  return (
    <form onSubmit={ handleSubmit } className={styles.form}>
      <fieldset className={styles.form__fieldset}>
        <label className={styles.form__fieldset__label} htmlFor="fullname">Nombre y Apellidos</label>
        <input
          className={styles.form__fieldset__input}
          id='fullname'
          type="text"
          name='fullName'
          defaultValue={ initialValues.fullName }
          onChange={ handleInputChange }
        />
      </fieldset>
      <fieldset className={styles.form__fieldset}>
        <label className={styles.form__fieldset__label} htmlFor="cardNumber">Número de la tarjeta</label>
        <div className={styles.form__fieldset__card}>
          <input
            className={styles.form__fieldset__input}
            id='cardNumber'
            type="text"
            placeholder='*** *** *** *** ***'
            name='cardNumber'
            defaultValue={ initialValues.cardNumber }
            onChange={ handleInputChange }
          />
          <div className={styles.form__fieldset__card__icon}>CARD</div>
        </div>
      </fieldset>
      <div className={styles.form__row}>
        <fieldset className={styles.form__fieldset}>
          <label className={styles.form__fieldset__label} htmlFor="expiresAt">F. Expira</label>
          <input
            className={styles.form__fieldset__input}
            id='expiresAt'
            type="text"
            name='expiresAt'
            placeholder='MM/DD/YYYY'
            defaultValue={ initialValues.expiresAt }
            onChange={ handleInputChange }
          />
        </fieldset>
        <fieldset className={styles.form__fieldset}>
          <label className={styles.form__fieldset__label} htmlFor="cvc">CVC</label>
          <input
            className={styles.form__fieldset__input}
            id='cvc'
            type="text"
            name='cvc'
            defaultValue={ initialValues.cvc }
            onChange={ handleInputChange }
          />
        </fieldset>
      </div>

      { renderErrorMessage() }

      <button className={styles.form__button} type='submit'>Pagar S/{planInfo.cost.toFixed(2)}</button>
    </form>
  )
}

export default PaymentForm
