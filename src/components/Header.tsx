// import React from 'react'
import React from 'react'
import header from '../styles/header.module.css'
// import { HeaderProps } from '../interface/pokemon.interface'
// import { HeaderProps } from '../interface/pokemon.interface'

// export const Header = () => {
//   console.log('Header')
//   return (
//     <h3 className={header.title}>
//       Ejemplo
//     </h3>
//   )
// }

export const Header = React.memo(() => {
  console.log('Header')
  return (
    <h3 className={header.title}>
      Ejemplo
    </h3>
  )
})

// export const Header = React.memo(({title}: HeaderProps) => {
//   console.log('Header')
//   return (
//     <h3 className={header.title}>
//       {title}
//     </h3>
//   )
// })
