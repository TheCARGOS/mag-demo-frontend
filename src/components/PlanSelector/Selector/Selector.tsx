import React, { Dispatch, SetStateAction } from 'react'
import styles from '../styles.module.scss'

export interface SelectorProps {
  isStandartSelected: boolean,
  setIsStandartSelected: Dispatch<SetStateAction<boolean>>
}

const Selector = (selectorProps: SelectorProps) => {
  const { isStandartSelected, setIsStandartSelected } = selectorProps

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    checked ?
      setIsStandartSelected( false ) :
      setIsStandartSelected( true )
  }

  return (
    <div className={ styles.planSelector__choose }>
      <span>Plan Estándar</span>
      <label className={ styles.switch }>
        <label htmlFor="selectPlan" className={ styles.label }>Seleccionar plan</label> 
        <input id='selectPlan' type="checkbox" onChange={ handleInputChange } defaultChecked={ !isStandartSelected } />
        <span className={ styles.slider }></span>
      </label>
      <span>Plan Premium</span>
    </div>
  )
}

export default Selector
