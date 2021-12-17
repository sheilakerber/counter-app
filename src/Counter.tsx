import { useState, useEffect } from "react"

export function Counter(){

    let [counter, setCounter] = useState(0)
    let [counter5, setCounter5 ] = useState(0)

    function incrementOne(){
        setCounter(counter + 1)
    }
    function decrementOne(){
        setCounter(counter - 1)
    }

    function incrementFive(){
        setCounter5(counter5 + 5)
    }
    function decrementFive(){
        setCounter5(counter5 - 5)
    }

    function resetValue1(){
        setCounter(0)
    }

    function resetValue5(){
        setCounter5(0)
    }
   
    const [counterChanged, setCounterChanged] = useState(0)
    const [counter5Changed, setcounter5Changed] = useState(0)

    useEffect( ()=> {
        setCounterChanged(counterChanged + 1)
    }, [counter])
    
    useEffect( ()=> {
        setcounter5Changed(counter5Changed + 1)
    }, [counter5])

    return (
        <>
            <section className="card">
                <p>Utilize esta aba para aumentar ou diminuir o valor em 1 unidade:</p>
                <h2>{counter}</h2>
                <span>Número de vezes que você já alterou o valor:  {counterChanged - 1} </span><br />
                <button type="button" onClick={resetValue1} >Zerar</button>
                <button type="button" onClick={incrementOne} >+1</button>
                <button type="button" onClick={decrementOne} >-1</button>
            </section>           

            <section className="card">
                <p>Utilize esta aba para aumentar ou diminuir o valor em 5 unidades:</p>
                <h2>{counter5}</h2>
                <span>Número de vezes que você já alterou o valor:  {counter5Changed -1} </span><br />
                <button type="button" onClick={resetValue5} >Zerar</button>
                <button type="button" onClick={incrementFive} >+5</button>
                <button type="button" onClick={decrementFive} >-5</button>
            </section>
            
        </>
    )
}