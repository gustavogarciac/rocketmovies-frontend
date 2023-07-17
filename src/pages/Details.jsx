import { ArrowLeft, Clock, StarIcon } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import avatarPlaceholder from "../assets/avatar_placeholder.svg";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

import { useAuth } from "../hooks/auth";

export function Details() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const params = useParams();
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  async function handleDeleteMovie() {
    try {
      const userConfirmation = confirm(
        "Você tem certeza que deseja deletar o filme?",
      );
      if (!userConfirmation) {
        return;
      }
      alert("Filme deletado com sucesso.");
      navigate("/");
      await api.delete(`/movies/${data.id}`);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível deletar o filme.");
      }
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);

      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <div>
      <Header />

      <main className="mt-10 space-y-6 px-40">
        <div className="flex justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-robotoSlab text-lg font-bold text-green-400"
          >
            <ArrowLeft />
            Voltar
          </Link>

          <div className="max-w-[250px] flex-1">
            <Button onClick={handleDeleteMovie} title="Deletar filme" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <h1 className="font-robotoSlab text-4xl font-bold text-zinc-200">
            {data && data.title}
          </h1>
          <div className="flex space-x-1 text-green-400">
            {data &&
              [...Array(data.rating)].map((rating, index) => (
                <StarIcon key={String(index)} />
              ))}
          </div>
        </div>
        <div className="flex space-x-2 text-zinc-400">
          <img
            src={avatarUrl}
            alt="Foto de Usuário"
            className="w-6 rounded-full object-cover"
          />
          <span>Por {user && user.name}</span>
          <Clock className="text-green-400" />
          <span>{data && data.created_at}</span>
        </div>

        <div className="flex flex-wrap space-x-4">
          {data &&
            data.tags.map((tag) => (
              <span className="rounded-md bg-green-200 px-2 py-1" key={tag.id}>
                {tag.name}
              </span>
            ))}
        </div>

        <p className="text-justify text-zinc-300">{data && data.description}</p>
      </main>
    </div>
  );
}
