
import { Link } from 'react-router-dom'
import './Listformacao.css'

interface FormacaoMinProps{
    id: number,
    nome: String
    imgUrl: string,
    duracao: String,
    shortDescription: String 
}

export function FormacaoMin({id,nome, imgUrl, duracao, shortDescription} : FormacaoMinProps){
    return(
        <div className="box">
            <img className='img_card' src={imgUrl}/>
            <div className="container-info">
                <div className='container-img'>
                    <Link to={"/formacao/"+id}>
                        <h1>{nome}</h1>
                    </Link>
                    
                    <p className='cargaH'>Duração: {duracao}</p>
                </div>
                <p>{shortDescription}</p>
            </div>
        </div>
    )

}