import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <>
            <header class="top-bar">
                <div class="top-bar-left">
                    <img src={logo} alt="Logo Spotilytics" class="logo" />
                    <span class="brand-name">Spotilytics</span>
                </div>

                <div class="top-bar-right">
                    <span class="user-name">NombreUsuario</span>
                    <img src="user-icon.png" alt="Usuario" class="user-icon" />
                </div>
            </header>

            <header class="navbar">
                <nav class="nav-links">
                    <NavLink to="/songs">Canciones</NavLink>
                    <NavLink to="/artists">Artistas</NavLink>
                    <NavLink to="/genres">Géneros</NavLink>
                    <NavLink to="/reproduction">Reproducción</NavLink>
                </nav>

                <div class="navbar-right">
                    <button class="theme-toggle">🌙</button>
                    <div class="search-container">
                        <input type="text" placeholder="Buscar" />
                        <button class="search-button">🔍</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header