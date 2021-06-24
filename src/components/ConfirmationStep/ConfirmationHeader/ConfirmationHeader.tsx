import React from 'react'
import { Plan } from '../../../helpers/plans'
import { UserInfo } from '../../../helpers/user'
import styles from '../styles.module.scss'

export interface ConfirmationHeaderProps {
  planInfo: Plan,
  userInfo: UserInfo
}

const ConfirmationHeader = (confirmationHeaderProps: ConfirmationHeaderProps) => {
  const { planInfo, userInfo } = confirmationHeaderProps
  const { fullName } = userInfo

  return (
    <header className={ styles.confirmationStep__header }>
      <img
        className={ styles.confirmationStep__header__checkedIcon}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrhuaTAoIIXgn5ircQD43ewolGO5mP0uVJmX2aT2br0Cvp0JBwogPx-L6IGborNf-InE&usqp=CAU"
        alt="aproved icon"
      />

      <h2 className={ styles.confirmationStep__header__titleSmall }>Bienvenido { fullName }, has adquirido el plan</h2>
      <h2 className={ styles.confirmationStep__header__titleLarge }>{ planInfo.name }</h2>
      <h3 className={ styles.confirmationStep__header__titleMedium }>S/.{ planInfo.cost } al mes</h3>
    </header>
  )
}

export default ConfirmationHeader
