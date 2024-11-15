interface HeaderProps {
  titulo: string;
  subtitulo: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div
      className="flex flex-col text-base p-4 h-20 justify-start px-4  bg-zinc-700 border-b-2
    border-zinc-700"
    >
      <h1 className="text-xl">{props.titulo}</h1>
      <h2 className="text-zinc-400">{props.subtitulo}</h2>
    </div>
  );
}
