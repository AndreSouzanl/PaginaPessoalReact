import Conteudo from "../Conteudo/Conteudo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Pagina(props: any) {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex flex-col flex-1">
        <Header titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
        <Footer />
      </div>
    </div>
  );
}
