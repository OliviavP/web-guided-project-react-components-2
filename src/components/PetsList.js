import React from 'react'
// 👉 1- We need the Pet component
import Pet from "./Pet"

export default function PetsList(props) {
  const { pets } = props

  return (
    <div className='list-pets-friends container'>
      { pets.map(pet => <Pet pet={pet} />) }
    </div>
  )
}
