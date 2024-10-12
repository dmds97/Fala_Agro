import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import logo from "../../assets/simbolo-falaagro-1.png";
import "./style.css";

const Header = () => {
    return (
        <div>
            <nav>
                <img className="nav-logo" src={logo} alt="Fala Agro" />
                <input className="search" placeholder="Pesquisar..." type="search" name="search" id="search" />
                <ul>
                    <li><Link className="nav-link" to="/home">Home</Link></li>
                    <li><Link className="nav-link" to="/noticias">Noticias</Link></li>
                    <li><Link className="nav-link" to="/eventos">Eventos</Link></li>
                    <li><Link className="nav-link" to="/negocios">Negócios</Link></li>
                </ul>
                <div className="user-container">
                    <div className="user-info">
                        <img className="user-icon" src={user} alt="icone de usuario" />
                    </div>
                    <p className="user-name">usuario</p>
                </div>
            </nav>
        </div>
    )
}

export default Header;