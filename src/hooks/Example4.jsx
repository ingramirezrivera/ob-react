/**
 * Ejemplo para entender del uso de props.children
 */

import React from 'react'

export const Example4 = ( { name, children } ) => {
  return (
    <div>
        <h1>*** Ejemplo de Children props***</h1>
        <h2>Nombre: { name }</h2>
        {/* props.children pintará por defecto auqello que se encuentre entre las etiquetas de apertura y cierre de este componente desde el componente de orden superior*/}
        { children }
    </div>
  )
}
