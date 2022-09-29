import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import './components/Header/Header';
import './App.css';


function App() {
  return (
  <>
    <Header/>
    <main className='py-3'>
      <Container>
        <Slider/>
      </Container>
    </main>
    <Footer/>
  </>
  );
}

export default App;
