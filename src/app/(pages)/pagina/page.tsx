import Conteudo from "@/components/Conteudo/Conteudo";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";

export default function Pagina(){
  return(
    <div className="flex h-screen">
     <Menu />
     <div className="flex flex-col flex-1">
     <Header />
     <Conteudo />
     <Footer />
     </div>


    </div>
  )
}