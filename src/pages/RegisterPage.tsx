import register from '../styles/register.module.css'
// import { useForm } from '../hooks/useForm'
import { useDataContext } from '../hooks/useData'
import { InitialForm } from '../interface/player.interface'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { FormikErrors, useFormik } from 'formik'

export interface PlayerActions {
    id: number,
    name: string
}
export const RegisterPage = () => {
    const { t } = useTranslation('', { keyPrefix: 'register' })
    const navigate = useNavigate()
    const { data, setPlayer } = useDataContext()

    const validate = ({number, player, position}: InitialForm) => {
        const errors: FormikErrors<InitialForm> = {}
        if (!player) {
            errors.player = t('inputError')
        }else if (player.length < 3) {
            errors.player = t('minError')
        }else if (player.length > 40) {
            errors.player = t('maxError')
        }
        if (!number) {
            errors.number = t('inputError')
        }else if (number.length > 0 && number.length > 2) {
            errors.number = t('numberError')
        }
        if (!position) {
            errors.position = t('inputError')
        }
        console.log(errors)
        return errors
    }
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            player: '',
            number: '',
            position: ''
        },
        onSubmit: (values) => {
            console.log(values)
            setPlayer({
                id: Date.now(),
                name: player,
                statistics: [],
                number,
                position
            })
        },
        validate
    })
    // const { onInputChange, formState } = useForm<InitialForm>({ player: '', number: '', position: '' })
    const { player, number, position } = values
    const { players } = data
    
    // const onSavePlayer = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()

    // }

    const onContinue = () => {
        navigate('/collects-statistics')
    }


    return (
        <>
            <h1 className={register.title}>{t('title')} </h1>
            <section className={register.section_register}>
                <form noValidate onSubmit={handleSubmit} className={register.form_register}>
                    <div className={register.form_control}>
                        <label htmlFor='player'>
                            {t('fullname')}
                        </label>
                        <input
                            type="text"
                            placeholder='Nombre del jugador'
                            className={register.input_player}
                            name='player'
                            value={player}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        {
                           touched.player && errors.player && <span className={register.error}>{errors.player}</span>
                        }
                    </div>
                    <div className={register.form_control}>
                        <label htmlFor='number'>
                            {t('number')}
                        </label>
                        <input
                            type="text"
                            placeholder='Número del jugador'
                            className={`${register.input_player}`}
                            name='number'
                            value={number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            pattern='[0-9]*'
                            maxLength={2}

                        />
                        {
                          touched.number && errors.number && <span className={register.error}>{errors.number}</span>
                        }

                    </div>
                    <div className={register.form_control}>
                        <label htmlFor='position'>
                            {t('position')}
                        </label>
                        <select 
                            name="position" 
                            id="position_voley"
                            className={register.input_player}
                            value={position}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="0">Seleccionar</option>
                            <option value="3">{t('setter')}</option>
                            <option value="1">{t('middle')}</option>
                            <option value="2">{t('opposite')}</option>
                            <option value="5">{t('outside')}</option>
                            <option value="4">{t('libero')}</option>
                        </select>
                        {
                           touched.position && errors.position && <span className={register.error}>{errors.position}</span>
                        }

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
