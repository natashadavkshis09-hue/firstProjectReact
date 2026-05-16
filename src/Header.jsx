import { Link } from "react-router-dom";
import AddProduct from "./components/ui/AddProduct";

function Header({ isVisible, setIsVisible }) {
    return ( 
        <header className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <span className="text-white text-2xl font-bold tracking-tight">
                        Интернет магазин
                    </span>

                    <div className="flex gap-3">
                        {/* Кнопка админки - ведёт на AddProduct */}
                        <Link to="/add">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 shadow-md">
                                👑 Админка
                            </button>
                        </Link>

                        <Link to={"/login"}>
                            <button 
                                className={`font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 shadow-md ${
                                    isVisible 
                                        ? "bg-red-600 hover:bg-red-700 text-white" 
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? "🚪 Выход" : "🔑 Вход"}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;