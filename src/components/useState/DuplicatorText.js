import { useState } from "react"

export const DuplicatorText = () => {
  const [ text, setText ] = useState('Hello');

    const campoDigitacao = (event) => setText(event.target.value)

    return(
    <>
        <input type="text" onChange={campoDigitacao} id="input"/>
        <p>Voce digitou: {text} </p>
        <button onClick={() => setText('')}>Reset</button>
    </>
  )
}