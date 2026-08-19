import { useState } from "react";

function CardPersonal(){
const [name, setName] = useState("");
const [tipo, setTipo] = useState("");
const [distancia, setDistancia] = useState("");
const [duracao, setDuracao] = useState("");
const [calorias, setCalorias] = useState("");

    return (
        <div className="card">
            <img src="image.jpg" alt="Profile" />
            <h3>{name}</h3>
            <h2>{tipo}</h2>
            <p>Distância: {distancia}</p>
            <p>Duração: {duracao}</p>
            <p>Calorias: {calorias}</p>
        </div>
    )
}

export default CardPersonal