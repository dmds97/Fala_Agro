import "./style.css";
import logo from "../../assets/img/logo.png";

const LoginPage = () => {
  return (
    <>
      <div className="background"></div>
      <img src={logo} alt="Logo" className="logo" /> {/* Logo adicionado */}
      <div className="modal">
        <div className="content">
          <div className="titlelogin">
            <h1>Login</h1>
          </div>
          <div className="inputsdata">
            <div>
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" />
            </div>
            <div>
              <label htmlFor="password">Senha*</label>
              <input id="password" type="password" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar-me</label>
            </div>
          </div>
          <div className="button-container">
            <button>Entrar</button>
            <p>Cadastre-se</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
