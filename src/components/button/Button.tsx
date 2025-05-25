import { ButtonProps } from '../../interface/components/button'
import button from './button.module.css'
export const Button = ({onClick, children, className}: ButtonProps) => {
  const styleButton = className ? `${className}` : button.button_start
  return (
    <button className={styleButton} onClick={onClick}>
      {children}
    </button>
  )
}
