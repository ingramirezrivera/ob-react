/**
 * Ejemplo del hook use State
 * 
 */

import React from 'react'
import { useState } from 'react'

const Example = () => {

  const initialValue = 0
  const initialPerson = {
    nombre: 'Daniel',
    email: 'ing.ramirezrivera@gmail.com'
  }

  const [counter, setCounter] = useState(initialValue)
  const [person, setPerson] = useState(initialPerson)

  /**
   * Funcion para actulizar el estado  privado que contine el contadorr
   */
  function incrementCouter() {
    setCounter(counter + 1)
  }
  /**
   * Funcion para actualizar el estado de la persona
   */
  function updatePerson() {
    setPerson(
      {
        name: 'Pepe',
        email: 'pepe@gmail.com'
      }
    )
  }

  return (
    <div>
      <h1>UseState Example</h1>
      <h2>COUNTER:  { counter }</h2>
      <h2>----------------------------</h2>
      <h2>PERSON DATA</h2>
      <h3>Name: { person.name }</h3>
      <h3>Email: { person.email }</h3>
      <h2>----------------------------</h2>
      {/* Bloque de botones para actualizar el estado */}
      <button onClick={ incrementCouter }> Increment counter</button>
      <button onClick={ updatePerson }> UpdatePerson </button>




    </div>
  )
}

export default Example;