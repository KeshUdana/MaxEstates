import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertyPage = ({ property, addToFavourites }) => {
  if (!property) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading property details...</span>
        </div>
      </div>
    );
  }

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
          <button
            onClick={() => addToFavourites(property)}
            className="btn btn-primary"
          >
            Add to Favourites
          </button>
        </div>
      </div>

      {/* React Tabs Section */}
      <Tabs>
        {/* Tab List */}
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Google Map</Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>
        <TabPanel>
          <img
            src={property.floorPlan}
            alt="Floor Plan"
            className="img-fluid rounded"
          />
        </TabPanel>
        <TabPanel>
          <iframe
            src={`https://www.google.com/maps?q=${property.latitude},${property.longitude}&output=embed`}
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="rounded"
          ></iframe>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PropertyPage;
