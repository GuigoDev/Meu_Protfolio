import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import './styles/global.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;