import React from 'react'
import { SetStateAction } from 'react'
import { Dispatch } from 'react'
import styles from './styles.module.scss'

export interface HeaderProps {
  step: number,
  setStep: Dispatch<SetStateAction<number>>
}

const Header = (headerProps: HeaderProps): JSX.Element => {
  const { step, setStep } = headerProps

  const renderHeader = () => {
    return step !== 1 ? (
    <div className={ styles.header__step2 }>
      <h1 className={ styles.header__title } onClick={ () => setStep(1) }>Tus datos</h1>
    </div>) : (
    <div className={ styles.header }>
      <h1 className={ styles.header__title }>Mag.</h1>
    </div>)
  }

  return (
    renderHeader()
  )
}

export default Header
