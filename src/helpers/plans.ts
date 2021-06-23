import { Feature, getFeatures } from "./features"

export interface Plan {
    id: number,
    description: string,
    features: Feature[],
    cost: number
}

export const getStandartPlan = (): Plan => {
    return {
        id: 1,
        description: 'PFugiat nostrud fugiat do proident amet esse nostrud nisi pariatur.',
        features: getFeatures().filter( (feat: Feature, index) => index <= 2 ),
        cost: 29
    }
}

export const getPremiumPlan = (): Plan => {
    return {
        id: 2,
        description: 'PFugiat nostrud fugiat do proident amet esse nostrud nisi pariatur.',
        features: getFeatures(),
        cost: 59
    }
}

export const getPlans = (): object => {
    return {
        1: getStandartPlan(),
        2: getPremiumPlan()
    }
}