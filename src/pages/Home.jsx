import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { MovieCard } from "../components/MovieCard";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleAddButton() {
    navigate(`/new`);
  }

  return (
    <div>
      <Header />

      <div>
        <div className="mt-10 flex justify-between px-40">
          <h1 className="font-robotoSlab text-4xl font-semibold text-zinc-200">
            Meus filmes
          </h1>
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
        <MovieCard
          title="Interestellar"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur quos, fugit nam est accusamus voluptatem consequatur quod, amet odit optio? Sit officiis, dolores ipsum numquam nulla odio quos fugiat."
          onClick={() => handleDetails(123)}
        />
        <MovieCard
          title="Interestellar"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur quos, fugit nam est accusamus voluptatem consequatur quod, amet odit optio? Sit officiis, dolores ipsum numquam nulla odio quos fugiat."
        />
      </div>
    </div>
  );
}
