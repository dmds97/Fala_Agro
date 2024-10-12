import "./style.css";
import logo from "../../assets/img/logo.png";  
import { useState } from "react";

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="homepage">
      <header className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a 
                href="/" 
                className={selectedMenu === "Home" ? "active" : ""} 
                onClick={() => handleMenuClick("Home")} 
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/noticias" 
                className={selectedMenu === "Notícias" ? "active" : ""} 
                onClick={() => handleMenuClick("Notícias")}
              >
                Notícias
              </a>
            </li>
            <li>
              <a 
                href="/eventos" 
                className={selectedMenu === "Eventos" ? "active" : ""} 
                onClick={() => handleMenuClick("Eventos")}
              >
                Eventos
              </a>
            </li>
            <li>
              <a 
                href="/negocios" 
                className={selectedMenu === "Negócios" ? "active" : ""} 
                onClick={() => handleMenuClick("Negócios")}
              >
                Negócios
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <a href="/login">Login</a>
        </div>
      </header>
      <main className="feed">
        <div className="feed-item">
          <img src={logo} alt="Imagem de Notícia 1" />
          <h2>Safra de Soja 2024</h2>
          <p>A produção de soja no Brasil está estimada em mais de 150 milhões de toneladas para 2024...</p>
        </div>
        <div className="feed-item">
          <img src={logo} alt="Imagem de Notícia 2" />
          <h2>Tecnologias no Agronegócio</h2>
          <p>A adoção de tecnologias de ponta, como drones e sensores, tem otimizado a gestão de propriedades...</p>
        </div>
        <div className="feed-item">
          <img src={logo} alt="Imagem de Notícia 3" />
          <h2>Feira Agro 2024</h2>
          <p>A Feira Agro 2024 reunirá os principais players do setor agropecuário em um evento que promete...</p>
        </div>
        <div className="feed-item">
          <img src={logo} alt="Imagem de Notícia 4" />
          <h2>Inovações em Agricultura</h2>
          <p>Novas técnicas de cultivo e inovações em biotecnologia estão revolucionando a agricultura...</p>
        </div>
        <div className="feed-item">
          <img src={logo} alt="Imagem de Notícia 5" />
          <h2>Mercado de Commodities</h2>
          <p>O mercado de commodities agrícolas está em alta, com preços de soja e milho atingindo novos...</p>
        </div>
        <div className="feed-item">
          <img src={logo} alt="Imagem de Notícia 6" />
          <h2>Políticas Agrícolas</h2>
          <p>As novas políticas agrícolas do governo visam apoiar pequenos agricultores, oferecendo...</p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;