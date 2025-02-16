import { Link } from "react-router-dom";
import '../styles-pages/NotFoud.css'

function NotFoud(){

    return(
        <div>
            <div className="notfoud">
                <h1>Not Foud</h1>
                <p>Clik <Link to={"/"}>aqui</Link> para voltar</p>
            </div>
        </div>
    )
}

export default NotFoud;