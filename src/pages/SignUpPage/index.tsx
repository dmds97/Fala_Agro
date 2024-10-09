import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

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
              <Input
                label="Email*"
                id="email"
                type="email"
                register={register("email")}
                error={errors.email?.message}
              />
              <Input
                label="Senha*"
                id="password"
                type="password"
                register={register("password")}
                error={errors.password?.message}
              />
              <Input
                label="Data de Nascimento*"
                id="date"
                type="date"
                register={register("date")}
                error={errors.date?.message}
              />
              <Input
                label="CPF*"
                id="cpf"
                type="text"
                register={register("number")}
                error={errors.number?.message}
                onChange={handleCPFChange}
                maxLength={14}
              />
            </div>
            <div className="button-container">
              <Button type="submit" value="Cadastrar" />
              <span>
                Já possui uma conta? <Link to="/">Faça login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
