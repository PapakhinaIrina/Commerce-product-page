import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './components/Header/Header';
import './App.css';


function App() {
  return (
  <>
    <Header/>
    <main className='py-3'>
      <Container>
        <h1> Welcome to shop. Let's buy SNEAKERS.</h1>
      </Container>
    </main>
    <Footer/>
  </>
  );
}

export default App;
