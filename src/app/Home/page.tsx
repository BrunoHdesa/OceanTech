import lixos from '../assets/lixo-mar.jpg'
import tartaruga from '../assets/foto-tartaruga.jpg'
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Conscientizar from '../components/Conscientizar/Conscientizar';
import Footer from '../components/Footer/Footer';


export default function Home() {
  return (
    <>
    <Header/>
    <Banner titulo="Plásticos nos oceanos" img={lixos}>Os oceanos são tesouros vitais para nosso planeta,
    proporcionando oxigênio, alimento, regulação do clima e uma fonte inestimável de beleza
    e inspiração. No entanto, estão enfrentando uma crise urgente: a poluição por plásticos.
    Milhões de toneladas de plástico são despejadas nos oceanos a cada ano, causando danos
    irreparáveis aos ecossistemas marinhos e à vida selvagem que depende deles.</Banner>

    <Conscientizar titulo="Protegendo Nosso Oceano" img={tartaruga}>O oceano é um tesouro vasto e vital para 
    a saúde do nosso planeta. Mas, infelizmente, tem sido tratado como um depósito de lixo, especialmente 
    quando se trata de plásticos. Porém, a questão vai muito além de apenas poluir a paisagem marinha. 
    Aqui estão algumas razões convincentes para não jogar plásticos no oceano:</Conscientizar>
    <Footer/>
    </>
  );
}
