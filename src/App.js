import React from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SingleProd from "./components/SingleProd";
import Produtos from "./components/Produtos";
import Contatos from "./components/Contatos";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={SingleProd} path='/produtos/:slug'/>
        <Route component={Produtos} path='/produtos'/>
        <Route component={Contatos} path='/contatos'/>
      </Switch>
    </BrowserRouter>
  )
  
}

export default App;
