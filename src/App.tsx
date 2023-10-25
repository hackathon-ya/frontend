import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.tsx';
import { Outlet } from 'react-router-dom';
import CandidatesInfo from './components/CandidatesInfo/CandidatesInfo.tsx';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CandidatesInfo />
    </>
  );
}

export default App;
