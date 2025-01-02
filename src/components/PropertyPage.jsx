import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertyPage = ({ property, addToFavourites }) => {
  const [activeTab, setActiveTab] = useState("description");

  if (!property) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading property details...</span>
        </div>
      </div>
    );
  }

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="container py-4">
      {/* Carousel Section */}
      <div id="propertyCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {property.images?.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image}
                alt={`Property Image ${index + 1}`}
                className="d-block w-100 rounded"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#propertyCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#propertyCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Card Section */}
      <div className="card mb-4">
        <img
          src={property.picture}
          alt={property.type}
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h5 className="card-title">{property.type}</h5>
          <p className="card-text text-muted">{property.location}</p>
          <p className="card-text fw-bold">£{property.price}</p>
          <p className="card-text">{property.description}</p>
          <button
            onClick={() => addToFavourites(property)}
            className="btn btn-primary"
          >
            Add to Favourites
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <ul className="nav nav-tabs mb-3" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "description" ? "active" : ""}`}
            onClick={() => handleTabChange("description")}
          >
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "floorplan" ? "active" : ""}`}
            onClick={() => handleTabChange("floorplan")}
          >
            Floor Plan
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "map" ? "active" : ""}`}
            onClick={() => handleTabChange("map")}
          >
            Google Map
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "description" && <p>{property.description}</p>}
        {activeTab === "floorplan" && (
          <img
            src={property.floorPlan}
            alt="Floor Plan"
            className="img-fluid rounded"
          />
        )}
        {activeTab === "map" && (
          <iframe
            src={`https://www.google.com/maps?q=${property.latitude},${property.longitude}&output=embed`}
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="rounded"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default PropertyPage;
