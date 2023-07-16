export function Input({ icon: Icon, type, placeholderText }) {
  return (
    <div className="flex w-full items-center space-x-4 rounded-md bg-zinc-800 p-4 font-roboto text-zinc-300">
      {Icon && <div className="text-zinc-400">{Icon}</div>}
      <input
        type={type}
        placeholder={placeholderText}
        className="w-full border-none bg-transparent outline-none"
      />
    </div>
  );
}
