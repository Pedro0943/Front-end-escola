import { Link } from 'react-router-dom'
import './Lists.css'

interface ListsProps{
    id: number
    nome: String
}

export function Lists({nome, id}: ListsProps){
    return(
        <div className="list">
            <ul>
                <li>
                    <Link to= {`/lists/${id}/formacao`}>
                        {nome}
                    </Link>
                    
                </li>

            </ul>
        </div>
    )

}
