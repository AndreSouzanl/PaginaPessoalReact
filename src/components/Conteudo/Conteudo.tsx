interface ConteudoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div className=" bg-zinc-900 flex flex-1 gap-2 justify-start text-base p-5">
      {props.children}
    </div>
  );
}
