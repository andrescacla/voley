// import { useState } from 'react'
// import collections from '../styles/collection.module.css'
// import { PlayerActions } from './register/RegisterPage'
// import { useDataContext } from '../hooks/useData'

// export const CollectsStatistcsPage = () => {
//   const [showButtons, setShowButtons] = useState<boolean>(false)
//   const [playerActions] = useState<PlayerActions[]>([
//     {
//       id: 1,
//       name: 'Ataque'
//     },
//     {
//       id: 2,
//       name: 'Bloqueo'
//     },
//     {
//       id: 3,
//       name: 'Servicio'
//     },
//     {
//       id: 4,
//       name: 'Recepción'
//     },
//     {
//       id: 5,
//       name: 'Defensa'
//     },

//   ])

//   const { data } = useDataContext()
//       const { players } = data
//   const onShowButton = () => {
//     setShowButtons(prev => !prev)
//   }
//   return (
//     <>
//       <section className={collections.section_players}>
//         <h2>Jugadores registrados</h2>
//         <div className={collections.players_container}>

//           {
//             players.length === 0 ? (
//               <p className={collections.no_players}>No hay jugadores registrados</p>
//             ) : (
//               players.map(({ id, name, number }) => (
//                 <div className={collections.box_button}>

//                   <button key={id} title='player' className={collections.player_button} onClick={onShowButton}>
//                     {name} - {number}
//                   </button>
//                 </div>
//               ))
//             )
//           }
//         </div>


//       </section>
//       <section className={collections.section_buttons}>

//         {
//           showButtons && (
//             <>
//               {
//                 playerActions.map(({ name, id }) => (
//                   <button type="button" key={id} className={collections.player_action}>
//                     {name}
//                   </button>

//                 ))
//               }
//               <div className={collections.arrow}></div>
//             </>
//           )
//         }
//       </section>
//     </>
//   )
// }


// import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"
import { useDataContext } from "../../hooks/useData"
import styles from "../../styles/volleyball.module.css"
import { MouseEvent, useState } from "react"
import { Player } from "../../interface/player.interface"
// import { MouseEventHandler } from "react"

// interface Player {
//   id: number
//   name: string
//   number: string
//   position: string
// }

// interface VolleyballCourtProps {
//   // players: Player[]
//   // onBack: () => void
// }
const courtPositions = [
    { id: 1, name: "Zaguero Derecho", className: styles.position1 },
    { id: 2, name: "Delantero Derecho", className: styles.position2 },
    { id: 3, name: "Delantero Central", className: styles.position3 },
    { id: 4, name: "Delantero Izquierdo", className: styles.position4 },
    { id: 5, name: "Zaguero Izquierdo", className: styles.position5 },
    { id: 6, name: "Zaguero Central", className: styles.position6 },
  ]
export const VolleyballCourt = () => {
  // Limitar a máximo 7 jugadores
  const navigate = useNavigate()
  const {data} = useDataContext()
  const { players, positions } = data

  const [playerSelected, setPlayerSelected] = useState<Player>()
  

  const onBack = () => {
    navigate("/register")
  }
  const onSelectPlayer = (event: MouseEvent<HTMLDivElement>, player: Player) => {
    console.log({event})
    const target = event.target as HTMLDivElement

    
    // setPlayerSelected()
    console.log({})

  }
  return (
    <div className={styles.courtContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Formación del Equipo</h1>
        <p className={styles.subtitle}>Cancha de Voleibol - {players.length} jugadores registrados</p>
        <button onClick={onBack} className={styles.backButton}>
          {/* <ArrowLeft className={styles.icon} /> */}
          Volver al registro
        </button>
      </div>

      <div className={styles.courtWrapper}>
        <div className={styles.court}>
          <div className={styles.net}></div>

          <div className={styles.playersGrid}>
            {positions.map((position, index) => (
              <div key={position.id} className={`${styles.playerPosition}`}>
                {position.id}
              </div>
            ))}
          </div>

          {/* Posición del líbero (7mo jugador) */}
          {/* {players[6] && (
            <div className={styles.liberoPosition}>
              <div
                className={`${styles.player} ${styles.libero}`}
                title={`${players[6].name} - ${players[6].position}`}
              >
                {players[6].number}
              </div>
            </div>
          )} */}
        </div>
      </div>

      <div className={styles.playerInfo}>
        <h2 className={styles.playerInfoTitle}>Jugadores Registrados</h2>
        <div className={styles.playersList}>
          {players.map((player) => (
            <div key={player.id} className={styles.playerCard}>
              <div className={`${styles.playerNumber} ${player.position === "Líbero" ? styles.libero : ""}`}>
                {player.number}
              </div>
              <div className={styles.playerDetails}>
                <p className={styles.playerName}>{player.name}</p>
                <p className={styles.playerPosition}>{player.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
