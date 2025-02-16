import { Link, useParams } from "react-router-dom";
import { Formacao } from "../components/formacao/Formacao";
import { NavBar } from "../components/navbar/NavBar";
import { useFormacaoData } from "../hook/useFormacaoData";



function Formacaod(){

const { id } = useParams();  
const { data: list } = useFormacaoData(Number(id));

    return(
        <div>
            <NavBar/>
            <Link to={"/lists/:listid/formacao"}>Voltar</Link>
            <div className="list-formacao">

                    {list?.data && (
                        <Formacao
                        id={list.data.id}
                        score={list.data.score}
                        nome={list.data.nome}
                        cargaHoraria={list.data.cargaHoraria}
                        imgUrl={list.data.imgUrl}
                        nivel={list.data.nivel}
                        duracao={list.data.duracao}
                        longDescription={list.data.longDescription}
                        shortDescription={list.data.shortDescription}
                        />
                    )}
        
            </div>
        </div>
    )
}

export default Formacaod;