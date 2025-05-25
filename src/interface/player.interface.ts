
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
type typeInput = 'text' | 'email' | 'password' | 'number' 
export interface TextInputProps{
  labelOption?: LabelOption,

  name:string,
  type?: typeInput,
  placeholder?: string,
  className?: string,
  errorClassName?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}
interface LabelOption {
  activeLabel?: boolean,
  label: string,
  className?: string
}

export interface SelectProps {
  labelOption?: LabelOption,
  name: string,
  className?: string,
  errorClassName?: string,
  // options: Array<{ value: string, label: string }>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}