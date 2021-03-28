export interface Skill {
    id: string
    name: string
    description: string
    requiredLevel: number
    
    modifiers: {
        characterHealth: number
        characterMana: number
        characterStamina: number

        targetHealth: number
        targetMana: number
        targetStamina: number
    }
}