import register from '../../../styles/register.module.css'

export const HeaderForm = () => {
  return (
    <div className={register.cardHeader}>
      <h1 className={register.cardTitle}>Registro de Jugador</h1>
      <p className={register.cardDescription}>Completa la información del jugador</p>
    </div>
  )
}
