import { Link } from "react-router-dom";

/* Components */
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import LoginBg from "../assets/loginBg.png";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";

export function SignUp() {
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
            <Input type="text" placeholderText="Nome" icon={<User />} />
            <Input type="email" placeholderText="E-mail" icon={<Mail />} />
            <Input type="password" placeholderText="Senha" icon={<Lock />} />
          </div>

          <Button title="Entrar" />
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
