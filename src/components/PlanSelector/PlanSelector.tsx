import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Feature } from '../../helpers/features'
import { Plan as MappedPlan } from '../../helpers/plans'
import Card from './Card/Card'
import Selector from './Selector/Selector'
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

  return (
    <div className={ styles.planSelector }>
      <Selector
        isStandartSelected={ isStandartSelected }
        setIsStandartSelected={ setIsStandartSelected }
      />

      <Card
        description={ description }
        features={ features }
        cost={ cost }
        setStep={ setStep }
      />
    </div>
  )
}

export default Plan
