import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { MovieCard } from "../components/MovieCard";
import { Input } from "../components/Input";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { api } from "../services/api";

export function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleAddButton() {
    navigate(`/new`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <div>
      <Header />

      <div>
        <div className="mt-10 flex items-center justify-between gap-12 px-40">
          <h1 className="font-robotoSlab text-4xl font-semibold text-zinc-200">
            Meus filmes
          </h1>

          <div className="flex flex-1 items-center gap-2">
            <Input
              type="text"
              placeholder="Pesquisar pelo título"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="max-w-[200px]">
            <Button
              title="Adicionar filme"
              icon={<Plus />}
              onClick={handleAddButton}
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col space-y-4 overflow-auto px-40">
        {movies.map((movie) => (
          <MovieCard
            data={movie}
            key={movie.id}
            onClick={() => handleDetails(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
