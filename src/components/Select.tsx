import { ErrorMessage, useField } from 'formik'
import { SelectProps } from '../interface/player.interface'

export const Select = ({label, ...props}: SelectProps) => {
 const [field] = useField(props)
   return (
     <>
       <label htmlFor={props.id || props.name}> {label} </label>
       <select {...field} {...props} />
       <ErrorMessage name={props.name} component="span" className={props.errorClassName}/>
       {/* {
         meta.touched && meta.error && (
           <span className={props.errorClassName}>{meta.error}</span>
         ) 
       } */}
     </>
   )
}
