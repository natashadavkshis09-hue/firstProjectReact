import {Link} from "react-router-dom"

function Header({ isVisible, setIsVisible }) {
    return ( 
        <header className="header">
            <Link to={"/login"}>
            <button 
                className="auth-btn"
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? "выход" : "вход"}
            </button>
             </Link>
            <span className="title">Интернет магазин</span>
        </header>
    )
}

export default Header