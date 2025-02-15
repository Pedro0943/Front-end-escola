import "./Formacao.css"


interface FormacaoDataProps {
    id: number,
    nome: String,
    score: number,
    imgUrl: string,
    cargaHoraria: number,
    duracao: String,
    nivel: String,
    shortDescription: String,
    longDescription: String
    

}


export function Formacao({ nome, score, imgUrl, cargaHoraria, duracao, nivel, shortDescription, longDescription}: FormacaoDataProps){
    return(
        <div>
            <img className="img" src={imgUrl}  />
            <div>
                <h1>{nome}</h1>
                <p>Duração: {duracao}</p>
            </div>
            <p>{score}</p>
            <p>{nivel}</p>
        </div>
    )
}