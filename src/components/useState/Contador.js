import { useState } from "react";

export const Contador = () => {
    const [contador, setContador] = useState(0);

    function soma(){
        return setContador( contador + 1)
    }

    return(
        <button onClick={soma}>
        voce clicou {contador} vezes
      </button>
    )
}   
