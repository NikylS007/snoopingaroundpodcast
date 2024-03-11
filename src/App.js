import logo from './assets/logo.svg';
import './App.css';
import Header from './component/header/header';
import Home from './pages/home/home';
import Episodes from './pages/episodes/episodes';
import { Routes, Route } from "react-router-dom";
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Footer from './component/footer/footer';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import MobileHeader from './component/mobileHeader/mobileHeader';

function App() {
  const pathname = window.location.pathname
  const location = useLocation();

  return (
    <>
    
      {isMobile ? <MobileHeader /> : <Header />}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      {location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;
