import { useState } from 'react'
import collections from '../styles/collection.module.css'
import { PlayerActions } from './RegisterPage'
import { useDataContext } from '../hooks/useData'

export const CollectsStatistcsPage = () => {
  const [showButtons, setShowButtons] = useState<boolean>(false)
  const [playerActions] = useState<PlayerActions[]>([
    {
      id: 1,
      name: 'Ataque'
    },
    {
      id: 2,
      name: 'Bloqueo'
    },
    {
      id: 3,
      name: 'Servicio'
    },
    {
      id: 4,
      name: 'Recepción'
    },
    {
      id: 5,
      name: 'Defensa'
    },

  ])

  const { data } = useDataContext()
      const { players } = data
  const onShowButton = () => {
    setShowButtons(prev => !prev)
  }
  return (
    <>
      <section className={collections.section_players}>
        <h2>Jugadores registrados</h2>
        <div className={collections.players_container}>

          {
            players.length === 0 ? (
              <p className={collections.no_players}>No hay jugadores registrados</p>
            ) : (
              players.map(({ id, name, number }) => (
                <div className={collections.box_button}>

                  <button key={id} title='player' className={collections.player_button} onClick={onShowButton}>
                    {name} - {number}
                  </button>
                </div>
              ))
            )
          }
        </div>


      </section>
      <section className={collections.section_buttons}>

        {
          showButtons && (
            <>
              {
                playerActions.map(({ name, id }) => (
                  <button type="button" key={id} className={collections.player_action}>
                    {name}
                  </button>

                ))
              }
              <div className={collections.arrow}></div>
            </>
          )
        }
      </section>
    </>
  )
}
