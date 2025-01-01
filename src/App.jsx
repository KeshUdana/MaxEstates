import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/Searchbar';
import NavigationBar from './components/NavigationBar';
import SearchFilter from './components/SearchFilter';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginCard from './components/LoginCard';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <Router>
      <header className="header">
        <NavigationBar />
      </header>
      <body>
      <main>
        {!isMobile && ( <div className="MainCarousel"><Carousel /></div>)}
        <div className="HomePageCard">
          <div className="SearchBar">
            <SearchBar />
          </div>
          <div className="SearchFilter">
            <SearchFilter />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center vh-80%">
          <LoginCard />
        </div>
      </main>
      </body>

      <footer className='footer'><Footer/></footer>
    </Router>
    </>
  );
}

export default App;
