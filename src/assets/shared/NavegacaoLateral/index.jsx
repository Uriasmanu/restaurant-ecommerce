import './NavegacaoLateral.scss';

import menu from '../../imagens/BarChart.svg'
import grafico from '../../imagens/BarChart.svg'
import favorito from '../../imagens/Favorite.svg'
import ticket from '../../imagens/BoxImportant.svg'
import carrinho from '../../imagens/MaleUser.svg'
import configuracao from '../../imagens/ShoppingBag.svg'
import perfil from '../../imagens/Storage.svg'
import alerta from '../../imagens/SyncSettings.svg'



const NavegacaoLateral = () =>{
    return (
        <div className="container-navegacaolateral">
          <img src={menu} alt="menu" />
          <img src={grafico} alt="grafico" />
          <img src={favorito} alt="favorito" />
          <img src={ticket} alt="ticket" />
          <img src={carrinho} alt="carrinho" />
          <img src={configuracao} alt="configuracao" />
          <img src={perfil} alt="perfil" />
          <img src={alerta} alt="alerta" />

        </div>
    )
}

export default NavegacaoLateral;
