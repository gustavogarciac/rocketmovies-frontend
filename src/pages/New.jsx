import { ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

import { Link } from "react-router-dom";
import { MarkerItem } from "../components/MarkerItem";

import { api } from "../services/api";
import { useState } from "react";

export function New() {
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleNewMovie() {
    if (newTag) {
      return alert("Você esqueceu de adicionar um marcador!");
    }

    api
      .post("/movies", { title, rating, description, tags })
      .then(() => {
        alert("Filme cadastrado com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar este filme.");
        }
      });
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  return (
    <div>
      <Header />

      <main className="mt-10 space-y-6 px-40">
        <Link
          to="/"
          className="flex items-center gap-2 font-robotoSlab text-lg font-bold text-green-400"
        >
          <ArrowLeft />
          Voltar
        </Link>

        <h1 className="font-robotoSlab text-3xl font-bold text-zinc-200">
          Novo Filme
        </h1>

        <form>
          <div className="flex gap-4">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <textarea
            className="mt-5 w-full resize-none rounded-lg bg-zinc-800 p-4 text-zinc-400 outline-none"
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <div>
            <h2 className="mt-10 font-robotoSlab text-2xl font-bold text-zinc-400">
              Marcadores
            </h2>

            <div className="my-5 flex flex-wrap space-x-4 rounded-md bg-zinc-950 p-4">
              {tags.map((tag, index) => (
                <MarkerItem
                  value={tag}
                  key={String(index)}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <MarkerItem
                isNew
                placeholder="Novo marcador"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </div>

          <div className="flex max-w-[200px] gap-4">
            <Button
              title="Salvar alterações"
              onClick={handleNewMovie}
              type="button"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
