import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Section from './components/Section';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Section type={"about"} img={"https://fondosmil.com/fondo/38780.jpg"}/>
      <Section type={"course"} img={"https://www.xtrafondos.com/descargar.php?id=5771&resolucion=1280x720"}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
