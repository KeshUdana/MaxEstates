import React from 'react';
import { useParams } from 'react-router-dom';
import properties from './data/properties.json';

const PropertyPage = () => {
  const { id } = useParams<{ id: string }>(properties.id);
  const property = properties.properties.find((prop) => prop.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>{property.type}</h1>
      <img src={property.picture} alt={property.type} />
      <p>{property.description}</p>
      <p>Price: £{property.price}</p>
      <p>Location: {property.location}</p>
      <p>Tenure: {property.tenure}</p>
      <p>Bedrooms: {property.bedrooms}</p>
    </div>
  );
};

export default PropertyPage;
