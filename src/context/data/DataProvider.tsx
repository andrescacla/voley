import { useReducer } from "react";
import { DataContext } from "./DataContext";
import { dataReducer } from "./DataReducer";
import initialState from "./DataState";
import { Player } from "../../interface/player.interface";


export interface DataProviderProps {
  children: React.ReactNode | React.ReactNode[];
}



export const DataProvider = ({ children }: DataProviderProps) => {

  const [dataState, dispatch] = useReducer(dataReducer, initialState)
  const setPlayer = (player: Player) => {
    
    dispatch({
      type: 'SET_PLAYER',
      payload: player
    })
  }
  
  

 

  return (
    <DataContext.Provider
      value={{
        data: dataState,
        setPlayer,
      }}>
      {children}
    </DataContext.Provider>
  )
}


