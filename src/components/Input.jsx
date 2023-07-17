export function Input({ icon: Icon, ...rest }) {
  return (
    <div className="flex w-full items-center space-x-4 rounded-md bg-zinc-800 p-4 font-roboto text-zinc-300">
      {Icon && <div className="text-zinc-400">{Icon}</div>}
      <input
        className="w-full border-none bg-transparent outline-none"
        {...rest}
      />
    </div>
  );
}
