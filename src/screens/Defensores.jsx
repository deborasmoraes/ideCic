import PlayerBlue from "../components/common/PlayerBlue"
import PlayerGreen from "../components/common/PlayerGreen"
import React from "react"

const Defensores = () =>{
 return(
    <div>
        <ol>
            <PlayerBlue
            jogadores = "16"
            idade = "27"
            inicial = "J"
            />   
            <PlayerGreen
            jogadores = "17"
            idade = "31"
            inicial = "J"
            />   
            <PlayerBlue
            jogadores = "18"
            idade = "25"
            inicial = "J"
            /> 
            <PlayerGreen 
            jogadores = "19"
            idade = "34"
            inicial = "J"
            />
            <PlayerBlue
            jogadores = "20"
            idade = "19"
            inicial = "J"
            />   
            <PlayerGreen
            jogadores = "21"
            idade = "34"
            inicial = "J"
            />
            <PlayerBlue
            jogadores = "22"
            idade = "25"
            inicial = "J"
            />   
            <PlayerGreen
            jogadores = "23"
            idade = "34"
            inicial = "J"
            /> 
        </ol>
    </div>
    )
}

export default Defensores