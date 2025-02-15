import './NavBar.css'
import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <div className="navegacao">
            <div className="container-fluid">
            <Link to ={"/"}>
                <img src="../../../public/icon.png" width="90px" height="80px" />
            </Link>
            </div>
            <div className="navbar">
            <ul className="nav ">
                <li className="nav-item ">
                    <Link to = {"/"}>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to = {"/lists"}>Formação</Link>
                </li>
                <li className="nav-item">
                    <Link to = {"*"}>Aluno</Link>
                </li>
                <li className="nav-item">
                    <Link to = {"*"}>...</Link>
                </li>
            </ul>
        </div>
        </div>
    )

}