import { useNavigate } from 'react-router'
import home from '../styles/home.module.css'
import { Button } from '../components/button/Button'
export const HomePage = () => {
  const navigate = useNavigate()
  const onStart = () => {
    navigate('/register')
  }
  
  return (
    <div className={home.home_container}>
      HomePage V0.0.1 by Andres Camacho
      <Button onClick={onStart}>
        Comenzar
      </Button>
      
      
    </div>
  )
}
