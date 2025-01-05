import React from "react";
import propertiesData from "../data/properties.json";
import "bootstrap/dist/css/bootstrap.min.css";

const BuyPage = () => (
  <div className="container mt-4">
    <h1 className="text-center mb-4">Buy Properties</h1>
    <div className="row">
      {propertiesData.properties.map((property) => (
        <div className="col-md-4 mb-4" key={property.id}>
          <div className="card h-100 shadow-sm">
            <img
              src={property.picture}
              className="card-img-top"
              alt={property.type}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
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
              <p className="card-text text-truncate" title={property.description}>
                {property.description}
              </p>
            </div>
            <div className="card-footer bg-transparent text-center">
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
