import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    
    return(
        <div className="NavBar">
            <nav className="navbar">
                <div className="logo basis">
                    <Link to="/">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
                    </Link>
                </div>
                <ul className="nav-list basis">
                    <li className="nav-link">
                        <Link to="/trends/1">Тренды</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/movies/1">Фильмы</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/series/1">Сериалы</Link>
                    </li>
                </ul>   
                <div className="select basis">
                    <select className="form-select">
                        <option value="Ru" >RU</option>
                        <option value="En" >EN</option>
                    </select>
                </div>
            </nav>
        </div>
    )
}

export default NavBar