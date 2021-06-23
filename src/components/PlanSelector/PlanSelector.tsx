import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Feature } from '../../helpers/features'
import { Plan as MappedPlan } from '../../helpers/plans'
import styles from './styles.module.scss'

export interface PlanProps {
  isStandartSelected: boolean,
  setIsStandartSelected: Dispatch<SetStateAction<boolean>>,
  planInfo: MappedPlan,
  setStep: Dispatch<SetStateAction<number>>
}

const Plan = (planProps: PlanProps): JSX.Element => {
  const { isStandartSelected, setIsStandartSelected, planInfo, setStep } = planProps
  const { description, features, cost } = planInfo

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    checked ?
      setIsStandartSelected( false ) :
      setIsStandartSelected( true )
  }

  return (
    <div className={ styles.planSelector }>
      <div className={ styles.planSelector__choose }>
        <span>Plan Estándar</span>
        <label className={ styles.switch }>
          <label htmlFor="selectPlan" className={ styles.label }>Seleccionar plan</label>
          <input id='selectPlan' type="checkbox" onChange={ handleInputChange } />
          <span className={ styles.slider }></span>
        </label>
        <span>Plan Premium</span>
      </div>

      <div className={ styles.planSelector__card }>
        <div className={ styles.planSelector__card__header }>
            <p>
              <span className={ styles.planSelector__card__header__medium }>S/</span>
              <span className={ styles.planSelector__card__header__large }>{ cost }</span>
              <span className={ styles.planSelector__card__header__small }>/ AL MES</span>
            </p>

            <p>{ description }</p>
            
        </div>

        <hr />

        <div className={ styles.planSelector__card__body }>
          <ul className={ styles.planSelector__card__body__list }>
            { features.map( (feat: Feature) => (
              <li key={ feat.id } className={ styles.planSelector__card__body__list__item }>
                { feat.description }  
              </li>
            ) )

            }
          </ul>
        </div>
        <button
          className={ styles.planSelector__card__button }
          onClick={ () => setStep(2) }
        >Suscribirme</button>
      </div>
    </div>
  )
}

export default Plan
