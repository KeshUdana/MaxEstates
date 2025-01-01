import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/Searchbar';
import NavigationBar from './components/NavigationBar';
import SearchFilter from './components/SearchFilter';
import Carousel from './components/Carousel';
import LoginCard from './components/LoginCard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [filters, setFilters] = useState(null); // State to store filters

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <NavigationBar />
        </header>
        <main>
          <div className="HomePageCard">
          <div className="SearchFilter">
              {/* Pass setFilters to SearchFilter component */}
              <SearchFilter setFilters={setFilters} />
            </div>
            <div className="SearchBar">
              {/* Pass setFilters function to SearchBar */}
              <SearchBar setFilters={setFilters} />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center vh-80">
            <LoginCard />
          </div>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
