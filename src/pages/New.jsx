import { ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

import { Link } from "react-router-dom";
import { MarkerItem } from "../components/MarkerItem";

export function New() {
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
            <Input placeholderText="Título" />
            <Input placeholderText="Sua nota (de 0 a 5)" />
          </div>

          <textarea
            className="mt-5 w-full resize-none rounded-lg bg-zinc-800 p-4 text-zinc-400 outline-none"
            placeholder="Observações"
          />

          <div>
            <h2 className="mt-10 font-robotoSlab text-2xl font-bold text-zinc-400">
              Marcadores
            </h2>

            <div className="my-5 flex space-x-4 rounded-md bg-zinc-950 p-4">
              <MarkerItem isNew />
              <MarkerItem value="React" />
            </div>
          </div>

          <div className="flex gap-4">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </form>
      </main>
    </div>
  );
}
