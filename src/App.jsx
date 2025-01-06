import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import SearchFilter from "./components/SearchFilter";
import Results from "./components/Results";
import Footer from "./components/Footer";
import PropertyPage from "./components/PropertyPage";
import BuyPage from "./pages/BuyPage";
import RentPage from "./pages/RentPage";
import Valuation from "./pages/Valuation";
import Carousel from "./components/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mortgage from "./pages/mortgage";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [filters, setFilters] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <NavigationBar />
        </header>
        <main>
          <div>
            <Carousel />
          </div>
          <Routes>
            {/* Home Page Route */}
            <Route
              path="/"
              element={
                <SearchFilter
                  setFilters={setFilters}
                  setResults={setFilteredResults}
                />
              }
            />

            {/* Buy Page Route */}
            <Route path="/buy" element={<BuyPage />} />
            {/* Rent Page Route */}
            <Route path="/rent" element={<RentPage />} />
            {/* Valuation Page */}
            <Route path="/val" element={<Valuation />} />
            {/* Mortgage Page */}
            <Route path="/mortgage" element={<Mortgage />} />

            {/* Render selected property details */}
            {selectedProperty && (
              <Route
                path={`/properties/${selectedProperty.id}`}
                element={<PropertyPage property={selectedProperty} />}
              />
            )}
          </Routes>

          {/* Render Results based on filters */}
          {filters && (
            <div className="results-grid mt-4">
              <Results
                results={filteredResults}
                onPropertyClick={handlePropertyClick}
              />
            </div>
          )}

         
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
