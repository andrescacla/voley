import { ErrorMessage, useField } from 'formik'
import { SelectProps } from '../../interface/player.interface'
import input from './input.module.css'

export const Select = ({ labelOption, ...props }: SelectProps) => {
  const [field] = useField(props)
  const labelClassName = labelOption?.className || input.label
  const label = labelOption?.label || ''
  const isLabel = labelOption?.activeLabel !== false // Default to true if not specified
  return (
    <>
      {
        isLabel && (

          <label htmlFor={props.id || props.name} className={labelClassName}> {label} </label>
        )
      }
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className={props.errorClassName} />
      {/* {
         meta.touched && meta.error && (
           <span className={props.errorClassName}>{meta.error}</span>
         ) 
       } */}
    </>
  )
}
