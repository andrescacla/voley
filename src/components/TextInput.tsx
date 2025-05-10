import { ErrorMessage, useField } from "formik"
import { TextInputProps } from "../interface/player.interface"


export const TextInput = ({label, ...props}: TextInputProps) => {
  const [field] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}> {label} </label>
      <input {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className={props.errorClassName}/>
      {/* {
        meta.touched && meta.error && (
          <span className={props.errorClassName}>{meta.error}</span>
        ) 
      } */}
    </>
  )
}
