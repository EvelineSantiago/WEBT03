import { useEffect, useState } from "react";

fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
    .then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (data) => {
            console.table(data.map(
            (country) => country.capital[0] + "-" + country.population
        ))
    }
    )
    .catch(error => console.log(error))


const Questao03 = () => {

    const [maiorPop, setMaiorPop] = useState([]) // hooks que armazenam as capitais com maior e menor população
    const [menorPop, setMenorPop] = useState([]) 

    async function promessaAsyncAwait() {
        try {
            const resposta = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            const data = await resposta.json()
            let maiorPop = 0
            let menorPop = 0
            let maiorPopIndex = 0
            let menorPopIndex = 0
            for (let i = 0; i < data.length; i++) { // percorre o array de objetos e compara a população de cada país
                if (data[i].population > maiorPop) {
                    maiorPop = data[i].population
                    maiorPopIndex = i
                }
                if (data[i].population < menorPop) {
                    menorPop = data[i].population
                    menorPopIndex = i
                }
            }
            setMaiorPop(data[maiorPopIndex].capital[0])
            setMenorPop(data[menorPopIndex].capital[0])
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        promessaAsyncAwait() // chama a função que faz a requisição 
    }, [])

    return (
        <>
            <h1>Questão 03</h1>
            <h3>Maior população: {maiorPop}</h3>
            <h3>Menor população: {menorPop}</h3>
        </>
    )
}

export default Questao03;