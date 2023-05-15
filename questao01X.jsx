import Questao01Y from "./questao01Y"
import { useState } from "react"

function Questao01X() {

    const [medias, setMedias] = useState([])
    const [loading, setLoading] = useState(false)
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]
        
    const setMedia = (medias) => { // função que seta da média dos alunos
        setMedias(medias)
        setLoading(true)
    }

    const renderizarAunosAcimaDaMedia = () => { // função que renderiza os alunos acima da média
        const alunosAcimaDaMedia = alunos.filter(
            (aluno, index) => {
                return medias[index] >= 7
            }
        )
        return alunosAcimaDaMedia.map(
            (aluno) => {
                return <li>{aluno.nome}</li>
            }
        )
    }

    return (
        <>
            <h1>Questão 01X</h1>
            <Questao01Y alunos = {alunos} setMedia = {setMedia} />
            {loading ? <ul>{renderizarAunosAcimaDaMedia()}</ul> : <p>Carregando...</p>} {/* renderiza os alunos acima da média */}
        </>
    )
}

export default Questao01X;

