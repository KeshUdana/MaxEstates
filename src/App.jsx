import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import SearchFilter from "./components/SearchFilter";
import LoginCard from "./components/LoginCard";
import Results from "./components/Results";
import Footer from "./components/Footer";
import PropertyPage from "./components/PropertyPage";
import BuyPage from "./pages/BuyPage";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [filters, setFilters] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1;
      setFooterVisible(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

          {/* Login Card */}
          <div className="d-flex justify-content-center align-items-center vh-80">
            <LoginCard />
          </div>

          {/* Footer */}
          <footer className={`footer ${footerVisible ? "footer-visible" : ""}`}>
            <Footer />
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;
