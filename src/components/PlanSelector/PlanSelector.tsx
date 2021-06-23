import React from 'react'
import styles from './styles.module.scss'

const Plan = (): JSX.Element => {
  return (
    <div className={ styles.planSelector }>
      <div className={ styles.planSelector__choose }>
        <span>Plan Estándar</span>
        <label className={ styles.switch }>
          <input type="checkbox" />
          <span className={ styles.slider }></span>
        </label>
        <span>Plan Premium</span>
      </div>

      <div className={ styles.planSelector__card }>
        <div className={ styles.planSelector__card__header }>
            <p>
              <span className={ styles.planSelector__card__header__medium }>S/</span>
              <span className={ styles.planSelector__card__header__large }>29</span>
              <span className={ styles.planSelector__card__header__small }>/ AL MES</span>
            </p>

            <p>Mollit reprehenderit laborum est anim excepteur sint anim amet incididunt.</p>
            
        </div>

        <hr />

        <div className={ styles.planSelector__card__body }>
          <ul className={ styles.planSelector__card__body__list }>
            <li className={ styles.planSelector__card__body__list__item }>Laboris enim in esse ea culpa excepteur exercitation cupidatat ipsum.</li>
            <li className={ styles.planSelector__card__body__list__item }>Proident nostrud qui nisi nisi deserunt ea id.</li>
            <li className={ styles.planSelector__card__body__list__item }>Ea aute ut sint voluptate reprehenderit aliqua pariatur commodo aliqua ut consectetur duis mollit amet.</li>
            <li className={ styles.planSelector__card__body__list__item }>Do esse labore nisi nostrud minim incididunt esse occaecat.</li>
          </ul>
        </div>
        <button className={ styles.planSelector__card__button }>Suscribirme</button>
      </div>
    </div>
  )
}

export default Plan
