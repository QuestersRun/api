export interface Quest {
    id: string
    name: string
    description: string
    duration: number
    rewards: {
        gold: number
        gearIds: string[]
    } 
}