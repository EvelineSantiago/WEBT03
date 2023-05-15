import { useEffect, useState } from "react";

const Questao02 = () => {

    const [imagem, setImagem] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
    const [imagem2, setImagem2] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
    const [turn, setTurn] = useState(true)

    const changeImage = () => { //função que alterna a imagem
        setTurn(!turn)
    }

    return (
        <>
        <h1>Questão 02 - Pikachu</h1>
        <button onClick = {changeImage}>VIRAR</button> // botão que chama a função changeImage
        <img src = {turn ? imagem : imagem2} /> // alterna entre imagem e imagem2
        </>
    )
}

export default Questao02