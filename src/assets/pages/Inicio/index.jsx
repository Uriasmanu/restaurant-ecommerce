
import './inicio.scss';
import logo from "../../imagens/logo.png"
import NavegacaoLateral from '../../shared/NavegacaoLateral';

const Inicio = () => {
    return (
        <div className="container-inicio">
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
                <NavegacaoLateral />
            </header>
            <main className="main"></main>
            <footer className="footer"></footer>
        </div>

    )
}

export default Inicio;
