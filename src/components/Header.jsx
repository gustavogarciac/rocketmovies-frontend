import { Search } from "lucide-react";
import { Input } from "./Input";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex items-center justify-between space-x-8 border-b-2 border-zinc-800 px-40 py-6">
      <h1 className="font-robotoSlab text-3xl font-bold text-green-400">
        RocketMovies
      </h1>

      <div className="flex flex-1 items-center gap-2">
        <Input type="text" placeholderText="Pesquisar pelo título" />
        <Search className="cursor-pointer font-bold text-zinc-50" />
      </div>

      <div className="flex  items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="font-robotoSlab font-semibold text-zinc-200">
            Gustavo Garcia
          </span>
          <Link to="/" className="cursor-pointer font-robotoSlab text-zinc-400">
            sair
          </Link>
        </div>

        <Link to="/profile">
          <img
            src="https://github.com/gustavogarciac.png"
            alt="Foto do Usuário"
            className="aspect-square w-12 rounded-full object-cover outline outline-2 outline-offset-2 outline-green-600"
          />
        </Link>
      </div>
    </div>
  );
}
