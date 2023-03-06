import './estilo.css'

function OpcoesHeader() {
    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

    return (
        <ul className='opcoes'>
            {
                textoOpcoes.map((texto) => {
                    return <li className='opcao' key={texto.id}><p>{texto}</p></li>
                })
            }
        </ul>
    )
}

export default OpcoesHeader;