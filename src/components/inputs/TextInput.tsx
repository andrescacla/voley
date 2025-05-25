import { ErrorMessage, useField } from "formik"
import { TextInputProps } from "../../interface/player.interface"
import input from './input.module.css'


export const TextInput = ({ errorClassName, labelOption,...props}: TextInputProps) => {
  const [field] = useField(props)
  const labelClassName = labelOption?.className || input.label
  const label = labelOption?.label || ''
  const isLabel = labelOption?.activeLabel !== false // Default to true if not specified
  console.log({labelOption, isLabel})
  return (
    <>
      {
        isLabel && (

          <label htmlFor={props.id || props.name} className={labelClassName}> {label} </label>
        )
      }
      <input {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className={errorClassName}/>
      {/* {
        meta.touched && meta.error && (
          <span className={props.errorClassName}>{meta.error}</span>
        ) 
      } */}
    </>
  )
}
