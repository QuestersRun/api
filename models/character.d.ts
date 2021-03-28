export interface Character {
    id: string
    name: string
    classId: string
    gearId: string
    weaponId: string

    level: number
    experience: number
    stats: {
        health: number
        mana: number
        stamina: number
    }
}