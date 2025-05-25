import { ButtonProps } from '../../interface/components/button'
import button from './button.module.css'
export const Button = ({onClick, children}: ButtonProps) => {
  console.log({button, children})
  return (
    <button className={button.button_start} onClick={onClick}>
      {children}
    </button>
  )
}
