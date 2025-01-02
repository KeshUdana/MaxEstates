import React from "react";

// PropertyPage component that displays the details of a selected property
const PropertyPage = ({ property }) => {
  if (!property) {
    return <div>Loading property details...</div>; // In case the property is not available
  }

  return (
    <div className="property-page">
      <div className="card">
        <img
          src={property.picture}
          alt={property.type}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{property.type}</h5>
          <p className="card-text">{property.location}</p>
          <p className="card-text">£{property.price}</p>
          <p className="card-text">{property.description}</p> {/* Add any extra details you want */}
          {/* Add other information like amenities, property features, etc. */}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
