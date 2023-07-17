export function Tag({ title, ...rest }) {
  return (
    <span className="rounded-md bg-green-200 px-2 py-1 font-semibold" {...rest}>
      {title}
    </span>
  );
}
