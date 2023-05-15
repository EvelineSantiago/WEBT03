import { useEffect } from "react";

const Questao01Y = (props) => {

    const { aluno, setMedia } = props

    useEffect(() => {
        let medias = []
        aluno.forEach(
            (aluno) => {
                medias.push((aluno.notas.ap1 + aluno.notas.ap2) / 2)
            }
        )
        setMedia(medias)
    }, [aluno])
}

export default Questao01Y;