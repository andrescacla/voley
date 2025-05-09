import register from '../styles/register.module.css'
import { useForm } from '../hooks/useForm'
import { useDataContext } from '../hooks/useData'
import { InitialForm } from '../interface/player.interface'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

export interface PlayerActions {
    id: number,
    name: string
}
export const RegisterPage = () => {
    const { t } = useTranslation('', { keyPrefix: 'register' })
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
            <h1 className={register.title}>{t('title')} </h1>
            <section className={register.section_register}>
                <form onSubmit={onSavePlayer} className={register.form_register}>
                    <div className={register.form_control}>
                        <label>
                            {t('fullname')}
                        </label>
                        <input
                            type="text"
                            placeholder='Nombre del jugador'
                            className={register.input_player}
                            name='player'
                            value={player}
                            onChange={onInputChange}
                            
                        />
                    </div>
                    <div className={register.form_control}>
                        <label>
                            {t('number')}
                            <strong>*</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Número del jugador'
                            className={register.input_player}
                            name='number'
                            value={number}
                            onChange={onInputChange}
                            required
                            
                        />

                    </div>
                    <div className={register.form_control}>
                        <label>
                            {t('position')}
                        </label>
                        <input
                            type="text"
                            placeholder='Posición del jugador'
                            className={register.input_player}
                            name='position'
                            value={position}
                            onChange={onInputChange}
                        />

                    </div>
                    {/* <div className={register.form_control}>

                    </div>
                    <div className={register.form_control}>

                    </div> */}




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

            </section>



        </>

    )
}
