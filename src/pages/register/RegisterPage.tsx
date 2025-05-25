import register from '../../styles/register.module.css'
// import { useForm } from '../hooks/useForm'
import * as Yup from 'yup'
import { useDataContext } from '../../hooks/useData'
// import { InitialForm } from '../interface/player.interface'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Formik, Form, FormikHelpers } from 'formik'
import { TextInput, Select } from '../../components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { InitialForm } from '../../interface/player.interface'
import { HeaderForm } from './components/HeaderForm'
import { Button } from '../../components/button/Button'

const MySwal = withReactContent(Swal)
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
    const validatePosition = (position: string) => {
        switch (position) {
            case '1':
                return t('setter')
            case '2':
                return t('middle')
            case '3':
                return t('opposite')
            case '4':
                return t('outside')
            case '5':
                return t('libero')
            default:
                return ''
        }
    }

    const onSavePlayer = ({ number, player, position }: InitialForm, { resetForm }: FormikHelpers<InitialForm>) => {
        const positionPlayer = validatePosition(position)
        setPlayer({
            id: Date.now(),
            name: player,
            statistics: [],
            number,
            position: positionPlayer
        })
        MySwal.fire({
            title: <strong>{t('success')}</strong>,
            didOpen: () => {
                MySwal.showLoading()
            },
            timer: 300,
            // icon: 'success',
            // showCloseButton: true,
            // showCancelButton: false,
            // focusConfirm: false,
            // confirmButtonText: t('ok'),
            // confirmButtonAriaLabel: t('ok')
        }).then(() => {
            resetForm()
            return MySwal.fire({
                title: <strong>{t('success')}</strong>,
                // text: t('successText'),
                timer: 1000,
                icon: 'success',
                showCloseButton: false,
                showCancelButton: false,
                showConfirmButton: false,
                focusConfirm: false,
                // confirmButtonText: t('ok'),
                // confirmButtonAriaLabel: t('ok')
            })
        })

    }

    const onContinue = () => {
        navigate('/collects-statistics')
    }


    return (
        <div className={register.register_container}>
            <Formik
                initialValues={{
                    player: '',
                    number: '',
                    position: ''
                }}
                onSubmit={onSavePlayer}
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
                            <div className={register.card} >
                                <HeaderForm />
                                <div className={register.card_content} >
                                    <div className={register.form_group}>
                                        <TextInput
                                            labelOption={
                                                {
                                                    label: t('fullname'),
                                                    activeLabel: true,
                                                }
                                            }
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
                                    <div className={register.form_group}>
                                        <TextInput
                                            labelOption={
                                                {
                                                    label: t('number'),
                                                    activeLabel: true,
                                                }
                                            }
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
                                    <div className={register.form_group}>
                                        <Select
                                            labelOption={{
                                                label: t('position'),
                                                activeLabel: true,
                                            }}
                                            name="position"
                                            className={register.select_custom}
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

                                        <Button  type='submit' className={register.button_register}>
                                            Registrar
                                        </Button>
                                        <Button
                                            className={register.button_continue}
                                            onClick={onContinue}
                                            disabled={players.length < 6}
                                            title='continue'
                                        >
                                            Continuar
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    )
                }

            </Formik>


        </div>

    )
}
