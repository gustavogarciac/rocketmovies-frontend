import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

/* Components */
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import LoginBg from "../assets/loginBg.png";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";

import { api } from "../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos para continuar.");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível concluir o cadastro.");
        }
      });
  }

  return (
    <div className="flex h-screen w-screen">
      <div className="m-auto flex h-screen flex-col justify-center space-y-6 px-6">
        <div className="flex flex-col">
          <h1 className="font-robotoSlab text-5xl font-bold leading-none text-green-400">
            RocketMovies
          </h1>
          <span className="text-zinc-300">
            Aplicação para acompanhar tudo que assistir
          </span>
        </div>

        <form>
          <h2 className="mb-6 font-robotoSlab text-2xl font-bold leading-loose text-zinc-100">
            Crie sua conta
          </h2>

          <div className="mb-6 space-y-2">
            <Input
              type="text"
              placeholder="Nome"
              icon={<User />}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="E-mail"
              icon={<Mail />}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              icon={<Lock />}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button title="Cadastrar" onClick={handleSignUp} type="button" />
          <Link
            to="/"
            className="mt-6 flex w-full items-center justify-center font-robotoSlab font-bold text-green-500 hover:text-green-800"
          >
            <ArrowLeft /> Voltar para o login
          </Link>
        </form>
      </div>

      <div className="hidden sm:flex">
        <img src={LoginBg} alt="" className="object-cover" />
      </div>
    </div>
  );
}
