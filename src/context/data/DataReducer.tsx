import { Player, SavePlayerStatistics } from "../../interface/player.interface"
import { InitialState } from "./DataContext"

export type actions =
  { type: 'SET_PLAYER', payload: Player }
  | { type: 'SET_STATISTICS', payload: SavePlayerStatistics }




export const dataReducer = (state: InitialState, action: actions): InitialState => {
  switch (action.type) {
    case 'SET_PLAYER':
      return {
        ...state,
        players: [...state.players, action.payload ]
      }
    case 'SET_STATISTICS':
      return {
        ...state,
        players: state.players.map(player => player.id === action.payload.player_id ? { ...player, statistics: [...player.statistics, action.payload.statistics] } : player)
      }
    
    default:
      return state
  }
}
