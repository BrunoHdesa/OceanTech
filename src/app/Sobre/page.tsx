import sobre from '../assets/chris-surfista.jpeg'
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";



export default function Sobre() {
  return (
    <>
    <Header/>
    <Banner titulo="Quem somos?" img={sobre}>Somos um trio de universitários do curso
     de Análise e Desenvolvimento de Sistemas com o objetivo de educar crianças sobre 
     a importância dos oceanos e o descarte correto do lixo para evitar a contaminação 
     dos mares. Focamos nas crianças por serem mais fáceis de educar, pois ainda não têm 
     hábitos viciosos. Planejamos desenvolver materiais educativos interativos, como aplicativos, 
     jogos e vídeos, além de organizar aulas e workshops lúdicos. No futuro, pretendemos criar soluções 
     tecnológicas para limpar os oceanos e gerenciar resíduos nas cidades, utilizando ferramentas modernas 
     como IoT e robôs de limpeza. Nossa missão é garantir um futuro sustentável através da conscientização 
     e inovação tecnológica.</Banner>

    </>
  );
}
