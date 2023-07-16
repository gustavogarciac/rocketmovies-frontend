export function MovieCard({ title, excerpt, ...rest }) {
  return (
    <div
      {...rest}
      className="cursor-pointer space-y-4 rounded-lg bg-green-900 p-8 font-robotoSlab"
    >
      <h1 className="text-2xl font-bold leading-relaxed text-zinc-200">
        {title}
      </h1>
      <p className="text-zinc-400">{excerpt}</p>

      <div className="flex flex-wrap space-x-4">
        <span className="rounded-md bg-green-200 px-2 py-1 font-semibold">
          Ficção Científica
        </span>
        <span className="rounded-md bg-green-200 px-2 py-1 font-semibold">
          Drama
        </span>
        <span className="rounded-md bg-green-200 px-2 py-1 font-semibold">
          Família
        </span>
      </div>
    </div>
  );
}
