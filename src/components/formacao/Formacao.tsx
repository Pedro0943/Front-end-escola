import { Star } from "../star/star"
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
        <div className="box-formacao">
            <div className="container-box">
                <img className="img" src={imgUrl}  />
                <div className="info">
                    
                    <h1>{nome}</h1>
                    <p>Duração: {duracao}</p>
                    
                    <p>Carga Horaria: {cargaHoraria}h</p>
                    <Star
                    score={score}/>
                    <p>{nivel}</p>
                </div>
            </div>

            <div className="descricao">
                <p >Descrição:</p>
                <p className="descricao-p">{shortDescription}<br/>
                {longDescription}</p>
            </div>
        </div>
    )
}