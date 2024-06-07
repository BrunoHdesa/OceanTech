import Lixos from '../assets/lixo-mar.jpg'
import Placenta from '../assets/microplasticos-placenta.jpeg'
import tartaruga from '../assets/foto-tartaruga.jpg'
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Bannerinverse from '../components/Bannerinverse/Bannerinverse';
import Footer from '../components/Footer/Footer';
import Image from "next/image"
import style from '../Home/page.module.css'

import Aquecimento from '../assets/aquecimento-global.jpg'
import Microplastico from '../assets/microplastico.jpg'
import Impacto from '../assets/impacto-vida-marinha.jpg'
import Explore from '../assets/explore-filmes.jpg'

export default function Home() {
  return (
    <>
    <Header/>
    <Banner titulo="Plásticos nos oceanos" img={Lixos}>Os oceanos são tesouros vitais para nosso planeta,
    proporcionando oxigênio, alimento, regulação do clima e uma fonte inestimável de beleza
    e inspiração. No entanto, estão enfrentando uma crise urgente: a poluição por plásticos.
    Milhões de toneladas de plástico são despejadas nos oceanos a cada ano, causando danos
    irreparáveis aos ecossistemas marinhos e à vida selvagem que depende deles.</Banner>

    <Bannerinverse titulo="Protegendo Nosso Oceano" img={tartaruga}>O oceano é um tesouro vasto e vital para 
    a saúde do nosso planeta. Mas, infelizmente, tem sido tratado como um depósito de lixo, especialmente 
    quando se trata de plásticos. Porém, a questão vai muito além de apenas poluir a paisagem marinha. 
    Aqui estão algumas razões convincentes para não jogar plásticos no oceano:</Bannerinverse>

    <section className={style.container}>
          <div className={style.fotosContainer}>
                  <div className={style.subContainerFotos}>
                      <Image src={Aquecimento} alt="Aquecimento global" className={style.foto}/>
                      <span>Aquecimento global</span>
                      <p> A produção, transporte e descarte de plásticos contribuem para as emissões de 
                          gases de efeito estufa, agravando o problema das mudanças climáticas e seus impactos 
                          no oceano, como o aumento da acidificação e o derretimento do gelo polar.</p>
                  </div>
                  <div className={style.subContainerFotos}>
                      <Image src={Impacto} alt="Impacto na vida marinha" className={style.foto}/>
                      <span>Impacto na vida marinha</span>
                      <p>Os plásticos podem ser confundidos com comida por animais marinhos, levando 
                          à ingestão acidental e à morte por sufocamento ou bloqueio digestivo. Isso afeta 
                          desde pequenos peixes até grandes mamíferos marinhos.</p>
                  </div>
                  <div className={style.subContainerFotos}>
                      <Image src={Microplastico} alt="Microplastico nos animais" className={style.foto}/>
                      <span>Poluição microplástica</span>
                      <p>Além dos grandes pedaços de plástico visíveis, há também o problema dos 
                          microplásticos, que são pequenas partículas de plástico que podem ser ingeridas 
                          por organismos marinhos e entrar na cadeia alimentar, com consequências ainda desconhecidas 
                          para a saúde humana e ambiental.</p>
                  </div>
          </div>
    </section>
    <Banner titulo="Microplásticos nas placentas" img={Placenta}>Estudo analisou 62 placentas e detectou microplásticos em todas as amostras 
    os microplásticos, partículas plásticas de pequena dimensão, estão praticamente por todo o lado. Alguns estudos já detectaram 
    a presença de microplásticos na placenta, no leite materno, no sangue, na água e no ar. Numa nova investigação, levada a cabo 
    pela Universidade do Novo México, foram analisadas 62 amostras de placenta e foram detectados microplásticos em todas elas. 
    O estudo foi publicado a 17 de Fevereiro na revista científica Toxicological Sciences.</Banner>
    
    <Bannerinverse titulo="Explore o Mundo Subaquático!" img={Explore}>Cliquem na aba Filmes e venham explorar o maravilhoso mundo 
      subaquático com a gente. Tem muito a descobrir, aprender e se divertir. Vamos mergulhar nessa aventura juntos! Esperamos vocês 
      para essa jornada pelo fundo do mar. Preparem a pipoca, chamem os amigos e embarquem nessa viagem incrível pelos oceanos. Vai 
      ser uma experiência inesquecível!</Bannerinverse>
    <Footer/>
    </>
  );
}
