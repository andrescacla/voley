import { createContext } from "react";
import { Player } from "../../interface/player.interface";

export interface InitialState {
    players: Player [],
}

export interface DataContextProps {
    data: InitialState,
    setPlayer: (name: Player ) => void,

}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)