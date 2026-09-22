import { useState} from "react";

const SimpleCounter = (props: { title?: string}) => {

    const [contador, setContador] = useState(0)

    const handlerMinus = () => {
        setContador(contador-1);
    }

    const handlerPlus = () => {
        setContador(contador+1);
    }

    return (

        <div>
            <h2>{props.title ? props.title : "Contador Simples"}</h2>
            <p>Contador: {contador}</p>
            <button onClick={handlerMinus}>-</button>
            <button onClick={handlerPlus}>+</button>
        </div>
    )
}

export default SimpleCounter;