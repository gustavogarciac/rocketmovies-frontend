import { ArrowLeft, Clock } from "lucide-react";
import { Header } from "../components/Header";

import { Link } from "react-router-dom";

export function Details() {
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

        <h1 className="font-robotoSlab text-4xl font-bold text-zinc-200">
          Interestellar
        </h1>
        <div className="flex space-x-2 text-zinc-400">
          <img
            src="https://github.com/gustavogarciac.png"
            alt="Foto de Usuário"
            className="w-6 rounded-full object-cover"
          />
          <span>Por Gustavo Garcia</span>
          <Clock className="text-green-400" />
          <span>23/05/22 às 08:00</span>
        </div>

        <div className="flex flex-wrap space-x-4">
          <span className="rounded-md bg-green-200 px-2 py-1">
            Ficção Científica
          </span>
          <span className="rounded-md bg-green-200 px-2 py-1">Drama</span>
          <span className="rounded-md bg-green-200 px-2 py-1">Família</span>
        </div>

        <p className="text-justify text-zinc-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias
          rerum ullam distinctio, minus doloribus? Veritatis laudantium ut
          aperiam porro voluptatem ipsa doloribus quia, alias eos. Rem
          accusantium veniam et?
        </p>

        <p className="text-justify text-zinc-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          rerum dolorum molestiae, id autem modi praesentium cupiditate
          accusamus laudantium ipsum veritatis eos cumque assumenda quasi culpa
          voluptate asperiores sequi ab.
        </p>
      </main>
    </div>
  );
}
