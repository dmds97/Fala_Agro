import { useForm, SubmitHandler } from "react-hook-form";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "../../components/Button/Button";

const schema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .nonempty("Esse campo é obrigatório"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .nonempty("Esse campo é obrigatório"),
  date: z.string().nonempty("Esse campo é obrigatório"),
  number: z
    .string()
    .length(14, "CPF inválido")
    .nonempty("Esse campo é obrigatório"),
});

type LoginFormInputs = z.infer<typeof schema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = formatCPF(event.target.value);
    setValue("number", formattedCPF);
  };

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
            <h1>Cadastre-se</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputsdata">
              <div>
                <label htmlFor="email">Email*</label>
                <input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
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
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="date">Data de Nascimento*</label>
                <input id="date" type="date" {...register("date")} />
                {errors.date && (
                  <p className="error-message">{errors.date.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="cpf">CPF*</label>
                <input
                  id="cpf"
                  type="text"
                  {...register("number")}
                  onChange={handleCPFChange}
                  maxLength={14}
                  className="cpf-input"
                />
                {errors.number && (
                  <p className="error-message">{errors.number.message}</p>
                )}
              </div>
            </div>
            <div className="button-container">
              <Button type="submit" value="Cadastrar" />
              <span>
                Já possui uma conta? <a href="/">Faça login</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
