import PlayerBlue from "../components/common/PlayerBlue" //importação do componente utilizado como base
import PlayerGreen from "../components/common/PlayerGreen"

const MeioCampo = () =>{ //função que renderiza a lista de meio campos
 return(
    <div>
        <ol>
        <PlayerBlue
        jogadores = "10"
        idade = "27"
        inicial = "J"
        />   
        <PlayerGreen
        jogadores = "11"
        idade = "31"
        inicial = "J"
        />   
        <PlayerBlue
        jogadores = "12"
        idade = "25"
        inicial = "J"
        />   
        <PlayerGreen
        jogadores = "13"
        idade = "34"
        inicial = "J"
        />   
        <PlayerBlue
        jogadores = "14"
        idade = "19"
        inicial = "J"
        />   
        <PlayerGreen
        jogadores = "15"
        idade = "19"
        inicial = "J"
        />   
        </ol>
    </div>
    )
}

export default MeioCampo