export function Button({ title, isLoading, icon: Icon, ...rest }) {
  return (
    <button
      className="flex w-full cursor-pointer items-center justify-center rounded-md bg-green-500 px-2 py-3 font-robotoSlab font-semibold text-zinc-950 hover:bg-green-700"
      {...rest}
    >
      {Icon && Icon}
      {isLoading ? "Carregando..." : title}
    </button>
  );
}
