import React, { useState } from "react";
import PropertyPage from "./PropertyPage"; // Import PropertyPage component
import "bootstrap/dist/css/bootstrap.min.css";

const Results = ({ results }) => {
  const [selectedProperty, setSelectedProperty] = useState(null); // Store the selected property

  const handlePropertyClick = (property) => {
    setSelectedProperty(property); // Set the selected property when clicked
  };

  const handleClose = () => {
    setSelectedProperty(null); // Close the modal
  };

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {results.map((property) => (
          <div key={property.id} className="col-md-6 col-lg-4">
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => handlePropertyClick(property)}
            >
              <img
                src={property.picture}
                alt={property.type}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{property.type}</h5>
                <p className="card-text text-muted">{property.location}</p>
                <p className="card-text fw-bold">£{property.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal for PropertyPage */}
      {selectedProperty && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProperty.type}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <PropertyPage property={selectedProperty} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
