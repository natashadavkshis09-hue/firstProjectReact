

function Header({ isVisible, setIsVisible }) {
    return ( 
        <header className="header">
            <button 
                className="auth-btn"
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? "выход" : "вход"}
            </button>

            <span className="title">Интернет магазин</span>
        </header>
    )
}

export default Header