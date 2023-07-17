import { Search } from "lucide-react";
import { Input } from "./Input";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { api } from "../services/api";
import avatarPlaceholder from "../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    const logoutConfirmation = confirm(
      "Você tem certeza que deseja sair do sistema?",
    );
    if (logoutConfirmation) {
      navigate("/");
      signOut();
    } else {
      return;
    }
  }

  return (
    <div className="flex items-center justify-between space-x-8 border-b-2 border-zinc-800 px-40 py-6">
      <h1 className="font-robotoSlab text-3xl font-bold text-green-400">
        RocketMovies
      </h1>

      <div className="flex  items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="font-robotoSlab font-semibold text-zinc-200">
            {user.name}
          </span>
          <button
            className="cursor-pointer font-robotoSlab text-zinc-400"
            onClick={handleSignOut}
          >
            sair
          </button>
        </div>

        <Link to="/profile">
          <img
            src={avatarUrl}
            alt="Foto do Usuário"
            className="aspect-square w-12 rounded-full object-cover outline outline-2 outline-offset-2 outline-green-600"
          />
        </Link>
      </div>
    </div>
  );
}
