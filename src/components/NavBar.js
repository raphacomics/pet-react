import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="header py-3">
            
                <nav className="container d-flex gap-5 align-items-center">
                    <div className="logo">
                        <h1 className="brand">PraPet</h1>
                    </div>

                    <div className="menu">
                        <NavLink to="/" exact>
                            Home
                        </NavLink>
                        <NavLink to="/produtos">
                            Produtos
                        </NavLink>
                        <NavLink to="/contatos">
                            Contatos
                        </NavLink>
                    </div>

                    <div className="ms-auto">
                        <a className="btn b-yellow" href="">Whatsapp</a>
                    </div>

                </nav>

        </header>
    )
}