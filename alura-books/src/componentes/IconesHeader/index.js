import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './estilo.css';

function IconesHeader() {
    const icones = [perfil, sacola];
    return (
        <ul className='icones'>
            {icones.map((icone) => {
                return <li className='icone' key={icone._id}><img src={icone}></img></li>
            })}
        </ul>
    )
}

export default IconesHeader;