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
          <img src={menu} alt="" />
          <img src={grafico} alt="" />
          <img src={favorito} alt="" />
          <img src={ticket} alt="" />
          <img src={carrinho} alt="" />
          <img src={configuracao} alt="" />
          <img src={perfil} alt="" />
          <img src={alerta} alt="" />

        </div>
    )
}

export default NavegacaoLateral;
