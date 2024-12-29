import React from 'react';
import { Link } from 'react-router-dom';
import properties from '../data/properties.json';

const RentPage = () => (
  <div>
    <h1>Buy Properties</h1>
    <ul>
      {propertiesData.properties.map((property) => (
        <li key={property.id}>
          <Link to={`/properties/${property.id}`}>
            {property.type} in {property.location}
          </Link>
        </li>,
        <li key={property.id}>
          <Link to={`/properties/${property.id}`}>
            {property.type} in {property.location}
          </Link>
        </li>,
        <li key={property.id}>
          <Link to={`/properties/${property.id}`}>
            {property.type} in {property.location}
          </Link>
        </li>,
        <li key={property.id}>
        <Link to={`/properties/${property.id}`}>
          {property.type} in {property.location}
        </Link>
      </li>,
      <li key={property.id}>
      <Link to={`/properties/${property.id}`}>
        {property.type} in {property.location}
      </Link>
    </li>,
    <li key={property.id}>
    <Link to={`/properties/${property.id}`}>
      {property.type} in {property.location}
    </Link>
  </li>,
  <li key={property.id}>
  <Link to={`/properties/${property.id}`}>
    {property.type} in {property.location}
  </Link>
</li>,
<li key={property.id}>
          <Link to={`/properties/${property.id}`}>
            {property.type} in {property.location}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default RentPage;
