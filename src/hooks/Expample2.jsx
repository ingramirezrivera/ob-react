/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 * */


import React, { useState, useRef, useEffect } from 'react'

export const Expample2 = () => {

    //cread dos contadores distintos
    //cada uno con un estado distinto
    const [counter1 ,setCounter1] = useState(0);
    const [counter2, setCounter2] =useState(0);

    //vamos a crear una referencia con useRef para asociar una variable con un elemento del DOM del componente (vistaHTML)
    const myRef = useRef()

    function increment1 (){
        setCounter1(counter1 + 1)
    }

    function increment2 (){
        setCounter2(counter2 + 1)

    }

    /**
     * Trabajando con UseEffect()
     */

    /**
     * ? Caso 1: Ejecutar siempre un snippet de codigo
     * se ejecuta aquello que esta dentro del useEffect
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO EL COMPONENTE');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(myRef);

    })

    /**
     * ? Caso 2: Ejecutar cuando cambie el contador 1
     * Cada vez que haya un cambio en el contador 1
     */
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO EL COMPONENTE 1');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(myRef);

        
    }, [counter1]);

     /**
     * ? Caso 3: Ejecutar cuando cambie el contador 1 o el contador 2
     * se ejecuta aquello que esta dentro del useEffect
     */

      useEffect(() => {
        console.log('CAMBIO EN EL ESTADO EL COMPONENTE 1 o 2');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(myRef);

    },[counter1, counter2])

  return (
    <div>
        <h1>**** Ejemplo de UseState useRef y UseEffect</h1>
        <h2>CONTADOR 1 : { counter1 }</h2>
        <h2>CONTADOR 2 : { counter2 }</h2>
        {/* ELEMENTO REFERECIADO */}
        <h3 ref={ myRef }>
            Ejemplo de elemento referenciado

        </h3>
        {/* BOTONES PARA CAMBIAR LOS CONTADORES */}
        <button onClick={ increment1 }>INCREMENTAR 1</button>
        <button onClick={ increment2 }>INCREMENTAR 2</button>

        
    </div>
  )
}

