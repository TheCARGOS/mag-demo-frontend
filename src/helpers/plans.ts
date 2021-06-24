import { Feature, getFeatures } from "./features"

export interface Plan {
    id: number,
    name: string,
    description: string,
    features: Feature[],
    cost: number
}

export const getStandartPlan = (): Plan => {
    return {
        id: 1,
        name: 'Plan Estándar',
        description: 'Commodo magna irure velit anim sunt dolore aute ipsum irure.',
        features: getFeatures().map( (feat: Feature, index: number) => (
            index <= 2 ? { ...feat, isActive: true } : feat
        ) ),
        cost: 29
    }
}

export const getPremiumPlan = (): Plan => {
    return {
        id: 2,
        name: 'Plan Premium',
        description: 'Voluptate id commodo excepteur eu et laboris fugiat enim pariatur ex mollit anim.',
        features: getFeatures().map( (feat: Feature, index: number) => (
            index <= 4 ? { ...feat, isActive: true } : feat
        ) ),
        cost: 59
    }
}

export const getPlans = (): object => {
    return {
        1: getStandartPlan(),
        2: getPremiumPlan()
    }
}