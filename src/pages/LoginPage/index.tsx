import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"; // Importação do Link
import "./style.css";
import logo from "../../assets/img/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .nonempty("Esse campo é obrigatório"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .nonempty("Esse campo é obrigatório"),
});

type LoginFormInputs = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="background"></div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="modal">
        <div className="content">
          <div className="titlelogin">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputsdata">
              <div>
                <label htmlFor="email">Email*</label>
                <input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="password">Senha*</label>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembrar-me</label>
              </div>
            </div>
            <div className="button-container">
              <button type="submit">Entrar</button>
              <p>
                <Link to="/signup">Cadastre-se</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
