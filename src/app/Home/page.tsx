import lixos from '../assets/lixo-mar.jpg'
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";


export default function Home() {
  return (
    <>
    <Header/>
    <Banner titulo="Plásticos nos oceanos" img={lixos}>Os oceanos são tesouros vitais para nosso planeta,
    proporcionando oxigênio, alimento, regulação do clima e uma fonte inestimável de beleza
    e inspiração. No entanto, estão enfrentando uma crise urgente: a poluição por plásticos.
    Milhões de toneladas de plástico são despejadas nos oceanos a cada ano, causando danos
    irreparáveis aos ecossistemas marinhos e à vida selvagem que depende deles.</Banner>
    </>
  );
}
