import React, { useState, useEffect } from 'react';

function UseEffectComponent() {

    const [ counter, setCounter ] = useState(0);

    useEffect(()=>{
        document.title = `Quantidade de Cliques ${counter}`;
    }, [counter])

    return (
        <div>
            <h2>UseEffect --> Monitarar a alteração de uma váriavel --> document.title</h2> 
            <button onClick={() => setCounter(counter + 1)}>
                Incrementar #{counter}
            </button>
        </div>
    )
}

export default UseEffectComponent;