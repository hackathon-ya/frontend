import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.tsx';
import { Outlet } from 'react-router-dom';
import Candidates from './pages/Candidates/Candidates.tsx';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Candidates />
    </>
  );
}

export default App;
