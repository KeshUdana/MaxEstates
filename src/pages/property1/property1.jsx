import React from "react";
import NavigationBar from "../../components/NavigationBar";

function PropertyPage() {
  const properties = [
    {
      id: 1,
      image: "property1.jpg",
      title: "Modern Family Home",
      location: "123 Main St, New York, NY",
      price: "$750,000",
      bedrooms: 4,
      bathrooms: 3,
      size: "2,400 sq ft",
    },
    {
      id: 2,
      image: "property2.jpg",
      title: "Cozy Apartment",
      location: "456 Elm St, San Francisco, CA",
      price: "$550,000",
      bedrooms: 2,
      bathrooms: 1,
      size: "1,200 sq ft",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Properties for Sale</h1>
      <div className="row g-4">
        {properties.map((property) => (
          <div className="col-md-6 col-lg-4" key={property.id}>
            <div className="card shadow-sm h-100">
              <img
                src={property.image}
                className="card-img-top"
                alt={property.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">
                  <strong>Location:</strong> {property.location}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> {property.price}
                </p>
                <p className="card-text">
                  <strong>Bedrooms:</strong> {property.bedrooms} |{" "}
                  <strong>Bathrooms:</strong> {property.bathrooms}
                </p>
                <p className="card-text">
                  <strong>Size:</strong> {property.size}
                </p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyPage;
