import { X, Plus } from "lucide-react";

export function MarkerItem({ isNew, value, onClick, ...rest }) {
  return (
    <div
      className={`flex items-center rounded-md px-3 font-robotoSlab ${
        isNew ? "border border-dashed border-zinc-400" : "bg-zinc-600"
      }`}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        className={`w-fit bg-transparent py-2 text-zinc-200 outline-none`}
      />

      <button type="button" className="text-green-400" onClick={onClick}>
        {isNew ? <Plus /> : <X />}
      </button>
    </div>
  );
}
