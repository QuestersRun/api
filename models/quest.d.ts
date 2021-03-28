export interface Quest {
    id: string
    name: string
    description: string
    duration: number
    rewards: {
        gold?: number
        weaponIds?: string[]
        gearIds?: string[]
        experience?: number
    } 
}