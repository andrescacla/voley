import register from '../styles/register.module.css'
// import { useForm } from '../hooks/useForm'
import * as Yup from 'yup'
import { useDataContext } from '../hooks/useData'
// import { InitialForm } from '../interface/player.interface'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Formik, Form } from 'formik'
import { TextInput, Select } from '../components'

export interface PlayerActions {
    id: number,
    name: string
}
export const RegisterPage = () => {
    const { t } = useTranslation('', { keyPrefix: 'register' })
    const navigate = useNavigate()
    const { data, setPlayer } = useDataContext()


    // const {
    //     values,
    //     errors,
    //     touched,
    //     handleSubmit,
    //     getFieldProps
    // } = useFormik({
    //     initialValues: {
    //         player: '',
    //         number: '',
    //         position: ''
    //     },
    //     onSubmit: (values) => {
    //         console.log(values)
    //         setPlayer({
    //             id: Date.now(),
    //             name: player,
    //             statistics: [],
    //             number,
    //             position
    //         })
    //     },
    //     validationSchema: Yup.object({
    //         player: Yup.string()
    //             .required(t('required'))
    //             .max(40, t('maxError')),
    //         number: Yup.string()
    //             .required(t('required'))
    //             .matches(/^[0-9]+$/, t('numberError')),
    //         position: Yup.string()
    //             .notOneOf(['0'], t('required'))
    //     }),
    // })
    // const { onInputChange, formState } = useForm<InitialForm>({ player: '', number: '', position: '' })
    // const { player, number, position } = values
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
                <Formik
                    initialValues={{
                        player: '',
                        number: '',
                        position: ''
                    }}
                    onSubmit={({ player, number, position }) => {
                        // console.log(values)
                        setPlayer({
                            id: Date.now(),
                            name: player,
                            statistics: [],
                            number,
                            position
                        })
                    }}
                    validationSchema={Yup.object({
                        player: Yup.string()
                            .required(t('required'))
                            .max(40, t('maxError')),
                        number: Yup.string()
                            .required(t('required'))
                            .matches(/^[0-9]+$/, t('numberError')),
                        position: Yup.string().required(t('required'))
                    })}
                >
                    {
                        () => (
                            <Form noValidate className={register.form_register}>
                                <div className={register.form_control}>
                                    <TextInput 
                                        label={t('fullname')}
                                        name='player'
                                        type='text'
                                        className={register.input_player}
                                        errorClassName={register.error}  
                                    />
                                    {/* <label htmlFor='player'>
                                        {t('fullname')}
                                    </label>
                                    <Field name="player" type="text" className={register.input_player} />
                                    <ErrorMessage name="player" component="span" className={register.error} /> */}

                                </div>
                                <div className={register.form_control}>
                                    <TextInput 
                                        label={t('number')}
                                        name='number'
                                        type='text'
                                        className={register.input_player}
                                        errorClassName={register.error}
                                    />
                                    {/* <label htmlFor='number'>
                                        {t('number')}
                                    </label>
                                    <Field name="number" type="text" className={register.input_player} />
                                    <ErrorMessage name="number" component="span" className={register.error} /> */}


                                </div>
                                <div className={register.form_control}>
                                    <Select  
                                        label={t('position')} 
                                        name="position" 
                                        className={register.input_player}
                                    >
                                        <option disabled value="">{t('select')}</option>
                                        <option value="1">{t('setter')}</option>
                                        <option value="2">{t('middle')}</option>
                                        <option value="3">{t('opposite')}</option>
                                        <option value="4">{t('outside')}</option>
                                        <option value="5">{t('libero')}</option>
                                    </Select>
                                    {/* <label htmlFor='position'>
                                        {t('position')}
                                    </label>
                                    <Field as="select" name="position" className={register.input_player}>
                                        <option disabled value="">{t('select')}</option>
                                        <option value="1">{t('setter')}</option>
                                        <option value="2">{t('middle')}</option>
                                        <option value="3">{t('opposite')}</option>
                                        <option value="4">{t('outside')}</option>
                                        <option value="5">{t('libero')}</option>
                                    </Field>
                                    <ErrorMessage name="position" component="span" className={register.error} /> */}



                                </div>





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
                            </Form>
                        )
                    }

                </Formik>


            </section>



        </>

    )
}
