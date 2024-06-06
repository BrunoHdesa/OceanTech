import Nemo from '../assets/nemo-filme.jpg'
import Dory from '../assets/dory-filme.jpeg'
import Sereia from '../assets/sereia-filme.jpg'
import Onda from '../assets/onda-filme.jpg'
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";



export default function Filmes() {
  return (
    <>
    <Header/>
    <Banner titulo="Procurando Nemo (2003)" img={Nemo}>Este clássico da Pixar segue a jornada de um peixe-palhaço 
    chamado Marlin em busca de seu filho, Nemo, que foi capturado por mergulhadores e levado para um aquário. A maior 
    parte da história se passa no oceano, apresentando uma grande variedade de criaturas marinhas.</Banner>

    <Banner titulo="A Pequena Sereia (1989)" img={Sereia}>Um clássico da Disney que conta a história de Ariel, 
    uma sereia que sonha em viver na terra firme. Grande parte da história se passa no fundo do mar, apresentando uma 
    variedade de criaturas marinhas e os desafios enfrentados por Ariel em busca de seu desejo.</Banner>

    <Banner titulo="Procurando Dory (2016)" img={Dory}>Sequência de "Procurando Nemo", este filme se concentra
     na peixe cirurgião Dory, enquanto ela embarca em uma jornada para encontrar sua família perdida. Mais uma vez, 
     o oceano desempenha um papel importante na narrativa, com várias aventuras subaquáticas.</Banner>

    <Banner titulo="O Filme Tá Dando Onda" img={Onda}>Acompanhamos a história de Cody Maverick, um pinguim 
    que sonha em se tornar um grande surfista. Ele parte em uma aventura para participar de uma competição de surf 
    na ilha de Pen Gu, onde faz novos amigos e aprende importantes lições sobre coragem, amizade e autenticidade. 
    O filme é uma divertida jornada que celebra a paixão pelo surf e a conexão com o oceano.</Banner>
    <Footer/>
    </>
  );
}