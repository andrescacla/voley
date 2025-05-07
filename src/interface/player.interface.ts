
export interface SavePlayerStatistics {
  player_id: number,
  statistics: Statistics
}

export type Qualification = 1 | 2 | 3 | 0
export type ActionsVoley = 'attack' | 'block' | 'service' | 'reception' | 'defense' 
export interface Statistics {
  id: number,
  name: ActionsVoley,
  qualification: Qualification
}

export interface Player {
    id: number,
    name: string,
    number: string,
    position: string,
    statistics: Statistics []
}

export interface InitialForm {
    player: string,
    number: string,
    position: string
}