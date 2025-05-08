import { useNavigate } from 'react-router'
import home from '../styles/home.module.css'
export const HomePage = () => {
  const navigate = useNavigate()
  const onStart = () => {
    navigate('/register')
  }

  return (
    <div className={home.home_container}>
      HomePage V0.0.1 by Andres Camacho
      <button className={home.button_start} onClick={onStart}>
        Comenzar
      </button>
    </div>
  )
}
