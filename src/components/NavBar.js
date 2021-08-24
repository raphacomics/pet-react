import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-info text-white">
            <div className="container  mx-auto">
                <nav className="d-flex gap-5">
                    <h1 className="brand">PraPet</h1>
                    <div className="d-flex justify-content-between gap-5 align-self-center">
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
                </nav>
            </div>
        </header>
    )
}