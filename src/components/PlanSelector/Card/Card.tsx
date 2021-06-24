import React, { Dispatch, SetStateAction } from 'react'
import { Feature } from '../../../helpers/features'
import styles from '../styles.module.scss'

export interface CardProps {
  description: string,
  features: Feature[],
  cost: number,
  setStep: Dispatch<SetStateAction<number>>
}

const Card = (cardProps: CardProps): JSX.Element => {
  const { description, features, cost, setStep } = cardProps

  return (
    <div className={styles.planSelector__card}>
      <div className={styles.planSelector__card__header}>
        <p>
          <span className={styles.planSelector__card__header__medium}>S/</span>
          <span className={styles.planSelector__card__header__large}>{cost}</span>
          <span className={styles.planSelector__card__header__small}>/ AL MES</span>
        </p>

        <p className={styles.planSelector__card__header__text}>{description}</p>

      </div>

      <hr />

      <div className={styles.planSelector__card__body}>
        <ul className={styles.planSelector__card__body__list}>
          {features.map((feat: Feature) => (
            <li key={feat.id} className={!feat.isActive ? styles.planSelector__card__body__list__item__inactive : ''}>✔️ { feat.description }</li>
          ))}
        </ul>
      </div>
      <button
        className={styles.planSelector__card__button}
        onClick={() => setStep(2)}
      >Suscribirme</button>
    </div>
  )
}

export default Card
