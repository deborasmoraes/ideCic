import PlayerBlue from "../components/common/PlayerBlue"
import PlayerGreen from "../components/common/PlayerGreen"
import React from "react"

const Atacantes = () =>{
 return(
    <div>
        <ol>
        <PlayerBlue 
        jogador ="1"
        idade ="27"
        inicial = "J"
        />  
        <PlayerGreen
        jogador ="2"
        idade ="31"
        inicial = "J"
        />   
        <PlayerBlue
        jogador ="3"
        idade ="25"
        inicial = "J"
        />   
        <PlayerGreen
        jogador ="4"
        idade ="34"
        inicial = "J"
        />   
        <PlayerBlue   
        jogador ="5"
        idade ="19"
        inicial = "J"
        />
        <PlayerGreen
        jogador ="6"
        idade ="34"
        inicial = "J"
        />   
        <PlayerBlue
        jogador ="7"
        idade ="25"
        inicial = "J"
        />   
        <PlayerGreen
        jogador ="8"
        idade ="34"
        inicial = "J"
        />   
        <PlayerBlue
        jogador ="9"
        idade ="25"
        inicial = "J"
        />   
        </ol>
    </div>
    )
}

export default Atacantes