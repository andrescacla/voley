// import React, { useEffect, useState } from 'react'
// // import { CardProps, PokemonState } from '../interface/pokemon.interface'
// import pokemon from '../styles/pokemon.module.css'
// import { getPokemonId } from '../api/axios'
// import { Button } from './button/Button'
// export const Card = React.memo(({ id, onClick, name }: CardProps) => {
//   console.log(name)
//   const [pokemonState, setPokemon] = useState({
//     id: 0,
//     name: '',
//     sprites: {
//       front_default: ''
//     }
//   })
//   // const getPokemon = useCallback(async (id: number) => {
//   //   const response = await getPokemonId(id)
//   //   const { name, id: idPokemon, sprites } = response.data
//   //   setPokemon({
//   //     name,
//   //     id: idPokemon,
//   //     sprites
//   //   })
//   // }, [])
//   const getPokemonRaw = async (id: number) => {
//     const response = await getPokemonId(id)
//     const { name, id: idPokemon, sprites } = response.data
//     setPokemon({
//       name,
//       id: idPokemon,
//       sprites
//     })
//   }
//   useEffect(() => {
//     // getPokemon(id)
//     if (id > 0) {
//       getPokemonRaw(id)

//     }
//   }, [id])
//   return (
//     <div className={pokemon.card}>
//       <div className={pokemon.card_image}>
//         {
//           id > 0 && <img src={pokemonState.sprites.front_default ? pokemonState.sprites.front_default : undefined} alt={pokemonState.name} />
//         }
//       </div>
//       <div className={pokemon.card_description}>
//         {/* <strong>
//           {memorizedData.name}
//         </strong> */}
//         <strong>
//           {pokemonState.name}
//         </strong>
//       </div>
//       <Button onClick={onClick} > 
//         {id}
//       </Button>
//     </div>
//   )
// })
// // export const Card = React.memo(({ id, onClick, name}: CardProps) => {
// //   console.log(name)
// //   const [pokemonState, setPokemon] = useState<PokemonState>({
// //     id: 0,
// //     name: '',
// //     sprites: {
// //       front_default: ''
// //     }
// //   })
// //   // const getPokemon = useCallback(async (id: number) => {
// //   //   const response = await getPokemonId(id)
// //   //   const { name, id: idPokemon, sprites } = response.data
// //   //   setPokemon({
// //   //     name,
// //   //     id: idPokemon,
// //   //     sprites
// //   //   })
// //   // }, [])
// //   const getPokemonRaw = async (id: number) => {
// //     const response = await getPokemonId(id)
// //     const { name, id: idPokemon, sprites } = response.data
// //     setPokemon({
// //       name,
// //       id: idPokemon,
// //       sprites
// //     })
// //   }
// //   // const memorizedData = useMemo(() => pokemonState, [pokemonState])
// //   useEffect(() => {
// //     // getPokemon(id)
// //     getPokemonRaw(id)
// //   }, [id])
// //   return (
// //     <div className={pokemon.card}>
// //       <div className={pokemon.card_image}>
// //         {/* <img src={memorizedData.sprites.front_default} alt={memorizedData.name} /> */}
// //         <img src={pokemonState.sprites.front_default} alt={pokemonState.name} />
// //       </div>
// //       <div className={pokemon.card_description}>
// //         {/* <strong>
// //           {memorizedData.name}
// //         </strong> */}
// //         <strong>
// //           {pokemonState.name}
// //         </strong>
// //       </div>
// //       <Button onClick={onClick } text={id} />
// //     </div>
// //   )
// // })
