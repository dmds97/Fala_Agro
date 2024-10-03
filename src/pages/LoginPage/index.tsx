import { useForm } from "react-hook-form";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginPage = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("E-mail invalido")
        .required("Esse campo é obrigatorio"),
      password: yup
        .string()
        .min(8, "Minimo 8 caracteres")
        .required("Esse campo é obrigatorio"),
    })
    .required();

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  console.log(errors);
  return (
    <>
      <div className="background"></div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="modal">
        <div className="content">
          <div className="titlelogin">
            <h1>Login</h1>
          </div>
          <div className="inputsdata">
            <div>
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" {...register("email")} />
            </div>
            <div>
              <label htmlFor="password">Senha*</label>
              <input id="password" type="password" {...register("password")} />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar-me</label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Entrar</button>
            <p>Cadastre-se</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
