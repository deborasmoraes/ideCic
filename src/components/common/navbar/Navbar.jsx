import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    
      <header>
      <nav className="navbar">
          <button className="botao" data-toggle="collapse" data-target="#nav-principal">
            <a href='#' className="opcoes">IDE</a>
          </button>
    
                <a href="#" className="opcoes">Home</a>
                <a href="#" className="opcoes">Sobre</a>
                <a href="#" className="opcoes">Jogadores</a>
                <a href="#" className="opcoes">Jogos</a>
      </nav>
    </header>
   
  );
}