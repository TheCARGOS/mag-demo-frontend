export interface Feature {
    id: number,
    description: string
}

export const getFeatures = (): Feature[] => {
    return [
        {
            id: 123,
            description: 'Labore elit deserunt pariatur pariatur deserunt.'
        },
        {
            id: 124,
            description: 'Excepteur id id ipsum qui ea cillum deserunt mollit.'
        },
        {
            id: 125,
            description: 'Quis excepteur ex ut sint est enim nostrud duis ea exercitation velit nulla nisi.'
        },
        {
            id: 126,
            description: 'Nostrud qui quis duis esse laborum aliquip aute elit eiusmod commodo est.'
        }
    ]
}