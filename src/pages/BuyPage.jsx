import React from "react";
import propertiesData from "../data/properties.json";
import "bootstrap/dist/css/bootstrap.min.css";

const BuyPage = () => (
  <div className="container mt-4">
    <h1 className="text-center mb-4">Buy Properties</h1>
    <div className="list-group">
      {propertiesData.properties.map((property) => (
        <div
          className="card mb-4 shadow-sm d-flex flex-row"
          key={property.id}
          style={{ overflow: "hidden" }}
        >
          {/* Property Image */}
          <img
            src={property.picture}
            alt={property.type}
            className="card-img-left"
            style={{
              width: "200px",
              objectFit: "cover",
            }}
          />

          {/* Property Information */}
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{property.type}</h5>
            <p className="card-text">
              <strong>Location:</strong> {property.location}
            </p>
            <p className="card-text">
              <strong>Price:</strong> £{property.price.toLocaleString()}
            </p>
            <p className="card-text">
              <strong>Bedrooms:</strong> {property.bedrooms}
            </p>
            <p className="card-text">
              <strong>Tenure:</strong> {property.tenure}
            </p>
            <p className="card-text">{property.description}</p>
            <div className="mt-auto">
              <a
                href={property.url}
                className="btn btn-primary btn-sm w-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BuyPage;
