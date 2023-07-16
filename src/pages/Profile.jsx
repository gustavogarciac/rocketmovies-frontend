import { ArrowLeft, Camera, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Profile() {
  return (
    <div>
      <header className="flex h-[150px] w-screen items-center bg-green-900 px-20 opacity-80"></header>

      <div className="relative z-10 -mt-28 flex justify-center">
        <Link
          to="/"
          className="absolute left-10 top-7 z-20 flex items-center gap-2 font-robotoSlab font-bold text-green-100"
        >
          <ArrowLeft />
          Voltar
        </Link>
        <div className="relative w-fit">
          <img
            src="https://github.com/gustavogarciac.png"
            alt="Foto do Usuário"
            className="h-[224px] w-[224px] rounded-full object-cover outline outline-2 outline-offset-4 outline-green-400"
          />
          <label
            htmlFor="image-input"
            className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-green-100 p-3 outline outline-2 outline-green-950 transition-transform hover:scale-105"
          >
            <Camera />
            <input type="file" id="image-input" className="hidden" />
          </label>
        </div>
      </div>

      <form className="m-auto mt-20 max-w-[350px] space-y-5">
        <div className="space-y-2">
          <Input
            type="text"
            placeholderText="Nome de Usuário"
            icon={<User />}
          />
          <Input
            type="email"
            placeholderText="exemplo@email.com"
            icon={<Mail />}
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholderText="Senha atual"
            icon={<Lock />}
          />
          <Input type="password" placeholderText="Nova senha" icon={<Lock />} />
        </div>

        <Button title="Salvar" type="button" />
      </form>
    </div>
  );
}
