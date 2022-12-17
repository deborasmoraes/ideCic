import './Player.css';
import tafarellll from './imagens/tafarellll.jpg';

const PlayerGreen = (props) =>{

    return(
        <div className='container'>
            <div className='d-flex flex-row faixa_green align-items-center'>
                <div className='p-2 px-5 py-2'>
                    <div>
                        <img className='img_jogador_green py-1 mx-auto d-block' src={tafarellll} alt="foto dos jogadores"/>
                    </div>
                </div>
                <div className="p-2 flex-fill text-start justify-content-center">
                    <h6 className='fs-3 fw-bold'>Jogador {props.jogador}</h6>
                    <h6 className='fs-3'>Idade: {props.idade} anos</h6>
                </div>
                <div className='p-2 flex-fill flex-row-reverse p-5'>
                    <div className='p-2 py-3 circle_green'>
                        {props.inicial}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerGreen