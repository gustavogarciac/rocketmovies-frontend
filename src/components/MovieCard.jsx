import { StarIcon } from "lucide-react";
import { Tag } from "../components/Tag";

export function MovieCard({ data, ...rest }) {
  return (
    <div
      {...rest}
      className="cursor-pointer space-y-4 rounded-lg bg-green-900 p-8 font-robotoSlab"
    >
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold leading-relaxed text-zinc-200">
          {data && data.title}
        </h1>
        <div className="flex space-x-1 text-xs text-green-400">
          {data &&
            [...Array(data.rating)].map((rating, index) => (
              <StarIcon key={String(index)} />
            ))}
        </div>
      </div>
      <p className="text-zinc-400">{data.description}</p>

      <div className="flex flex-wrap space-x-4">
        {data &&
          data.tags.map((tag, index) => (
            <Tag title={tag.name} key={String(index)} />
          ))}
      </div>
    </div>
  );
}
