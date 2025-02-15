import '../styles-pages/FormacaoProf.css'
import { Link, useParams } from 'react-router-dom'
import { FormacaoMin } from "../components/listformacao/ListFormacao";
import { NavBar } from "../components/navbar/NavBar";
import { useFormacaoMinData } from "../hook/useFormacaoMinData";

function ListFormacao(){
    const { listid } = useParams();
    const { data: list } = useFormacaoMinData(Number(listid));

    return(
            <div className='container'>
                <NavBar/>
                <Link to={"/lists"}>Voltar</Link>
                <div className="list-formacao">
                    <h2 className='title-Profissionalizante'>Cursos Profissionalizante</h2>
                    {list?.data.map(formacaoMinData => 
                    <FormacaoMin
                    id={formacaoMinData.id}
                    nome={formacaoMinData.nome}
                    imgUrl={formacaoMinData.imgUrl}
                    duracao={formacaoMinData.duracao}
                    shortDescription={formacaoMinData.shortDescription}
                    />
                    )}
                </div>
                
            </div>
    )
}

export default ListFormacao;