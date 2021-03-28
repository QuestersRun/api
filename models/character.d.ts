export interface Character {
    id: string
    name: string
    classId: string

    level: number
    experience: number
    stats: {
        health: number
        mana: number
        stamina: number
    }
}