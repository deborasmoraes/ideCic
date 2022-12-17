import React from 'react';
import './Jogos.css';
import brasil from './/imagens/brasil.png';
import japao from './/imagens/japao.png';
import ghana from './/imagens/ghana.png';
import coreia from './/imagens/coreia.png';
import versus from './/imagens/x.png';


export default function Jogos() {
  return (
    
    <div className="container jogos" >

        <h3 className="text-light">PRÓXIMOS JOGOS</h3>

        <div className="top ">
            <img src={brasil} className="left" alt = "Brasil"></img>
            <img src={versus} className="middle" alt= "versus"></img>
            <img src={coreia} className="right" alt="Coreia"></img>
        </div>

        <div className="bottom text-light  ">
            <p className="font-weight-bold">Quinta-feira</p>
            <p>02/11</p>
            <p>07:20</p>

        </div>


        <div className="top ">
            <img src={brasil} className="left" alt = "Brasil"></img>
            <img src={versus} className="middle" alt= "versus"></img>
            <img src={japao} className="right" alt= "Japao"></img>
        </div>

        <div className="bottom text-light  ">
            <p className="font-weight-bold">Sexta-feira</p>
            <p>07/11</p>
            <p>08:00</p>

        </div>
        <div className="top ">
            <img src={brasil} className="left" alt = "Brasil"></img>
            <img src={versus} className="middle" alt= "versus"></img>
            <img src={ghana} className="right" alt= "Ghana"></img>
        </div>

        <div className="bottom text-light  ">
            <p className="font-weight-bold">Sabado</p>
            <p>02/11</p>
            <p>20:30</p>

        </div>

        

     
    </div>
  )
}
