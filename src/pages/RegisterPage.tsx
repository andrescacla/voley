import register from '../styles/register.module.css'
import { useForm } from '../hooks/useForm'
import { useDataContext } from '../hooks/useData'
import { InitialForm } from '../interface/player.interface'
import { useNavigate } from 'react-router'

export interface PlayerActions {
    id: number,
    name: string
}
export const RegisterPage = () => {

    const navigate = useNavigate()
    const { onInputChange, formState } = useForm<InitialForm>({ player: '', number: '', position: '' })
    const { player, number, position } = formState
    const { data, setPlayer } = useDataContext()
    const { players } = data
    const onSavePlayer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPlayer({
            id: Date.now(),
            name: player,
            statistics: [],
            number,
            position
        })
    }

    const onContinue = () => {
        navigate('/collects-statistics')
    }


    return (
        <>
            <h1>Registro de estadisticas</h1>
            <form onSubmit={onSavePlayer} className={register.form_register}>
                <label>Nombre del jugador</label>
                <input
                    type="text"
                    placeholder='Nombre del jugador'
                    className={register.input_player}
                    name='player'
                    value={player}
                    onChange={onInputChange}
                />

                <label>Número del jugador</label>
                <input type="text" placeholder='Número del jugador' className={register.input_player} name='number' value={number} onChange={onInputChange} />

                <label>Posición del jugador</label>
                <input type="text" placeholder='Posición del jugador' className={register.input_player} name='position' value={position} onChange={onInputChange} />

                <div className={register.container_buttons}>

                    <button type='submit' className={register.button_register}>
                        Registrar
                    </button>
                    <button
                        className={register.button_continue}
                        onClick={onContinue}
                        disabled={players.length < 6}
                        title='continue'
                    >
                        Continuar
                    </button>
                </div>
            </form>



        </>

    )
}
