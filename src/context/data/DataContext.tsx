import { createContext } from "react";
import { Player, Position } from "../../interface/player.interface";

export interface InitialState {
    players: Player [],
    positions: Position[]
}

export interface DataContextProps {
    data: InitialState,
    setPlayer: (name: Player ) => void,

}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)