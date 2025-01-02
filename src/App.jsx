import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/Searchbar";
import NavigationBar from "./components/NavigationBar";
import SearchFilter from "./components/SearchFilter";
import Carousel from "./components/Carousel";
import LoginCard from "./components/LoginCard";
import Results from "./components/Results"; // Import Results component
import Footer from "./components/Footer";
import PropertyPage from "./components/PropertyPage"; // Import PropertyPage as a component
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [filters, setFilters] = useState(null); // State to store filters
  const [filteredResults, setFilteredResults] = useState([]); // Store filtered data
  const [selectedProperty, setSelectedProperty] = useState(null); // Track selected property for PropertyPage

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property); // Set the clicked property to show in PropertyPage
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <NavigationBar />
        </header>
        <main>
          <div className="HomePageCard">
            <Routes>
              <Route
                path="/"
                element={<SearchFilter setFilters={setFilters} setResults={setFilteredResults} />}
              />
            </Routes>
          </div>

          {filters && (
            <div className="results-grid mt-4">
              {/* Display Results component when filters are applied */}
              <Results results={filteredResults} onPropertyClick={handlePropertyClick} />
            </div>
          )}

          {selectedProperty && (
            <div className="property-page-container">
              {/* Conditionally render PropertyPage when a property is selected */}
              <PropertyPage property={selectedProperty} />
            </div>
          )}

          <div className="d-flex justify-content-center align-items-center vh-80">
            <LoginCard />
          </div>

          <footer className="footer">
            <Footer />
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;
