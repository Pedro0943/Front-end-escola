
import { Lists } from '../components/lists/Lists';
import { NavBar } from '../components/navbar/NavBar';
import { useListData } from '../hook/useListData';

function ListPage(){
  const { data: list } = useListData();
    return(
            <div className='container'>
                <NavBar/>
                
                <div className="list">
                <h2>Nivel de Formação</h2>
                    {list?.data.map(listData => 
                    <Lists 
                    id = {listData.id}
                    nome={listData.nome}
                    />
                    )}
                </div>
            </div>
    )
}

export default ListPage;