/**
 * Ejemplo Hooks 
 * UseState()
 * useContext()
 */

import React, { useState, useContext } from 'react'




/**
 * 
 * @returns dispone de un contexto que va atener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Component1 = () => {
    //inicializamos un estado vacio que va a rellenarse con los datos del  contexto del padre
    const state = useContext(miContexto)
    console.log('mi contexto', miContexto)

    

  return (
    <div>
        <h2>El token: { state.token }</h2>
        {/* PINTAMOS EL COMPONTENTE 2 */}
        <Component2 />
    </div>
  )
}

const Component2 = () => {
  
    const state = useContext(miContexto)

    return (
    <div>
        <h2>La session es: { state.sesion }</h2>
    </div>
  )
}


export const MiComponenteConContexto = () => {

    const initialState = {
        token: '124567',
        sesion: 1
    }
    console.log(initialState)
    //creamos el estado de este componente
    const [sessionData, setSessionData] = useState(initialState);

    function updateSession() {
        setSessionData(
            {
                token: new Date().getTime(),
                sesion: sessionData.sesion + 1
            }
        )

    }

  return (
    <div>
        <miContexto.Provider value={ sessionData }>
            {/* TODO LO QUE ESTE AUI ADENTRO PUEDE VER LOS DATOS DE sessionData  */}
            {/* ADEMAS SI SE ACTUALIZAN LOS COMPONENTES DE AQUI , TAMBIEN LO ACTUALIZAN */}
            <h1>***Ejemplo de useState() y de useContext()***</h1>
            <Component1></Component1>
            <button onClick={ updateSession }>Actualizar Sesión </button>
        </miContexto.Provider>

    </div>
  )
}
