import React, { useState } from "react";
import PropertyPage from "./PropertyPage"; // Import PropertyPage component

const Results = ({ results }) => {
  const [selectedProperty, setSelectedProperty] = useState(null); // Store the selected property

  const handlePropertyClick = (property) => {
    setSelectedProperty(property); // Set the selected property when clicked
  };

  return (
    <div className="row">
      {results.map((property) => (
        <div key={property.id} className="col-md-6 mb-4">
          <div className="card" onClick={() => handlePropertyClick(property)}>
            <img
              src={property.picture}
              alt={property.type}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{property.type}</h5>
              <p className="card-text">{property.location}</p>
              <p className="card-text">£{property.price}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Conditionally render the PropertyPage component */}
      {selectedProperty && <PropertyPage property={selectedProperty} />}
    </div>
  );
};

export default Results;
