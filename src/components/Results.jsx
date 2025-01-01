import React from "react";

function Results({ results }) {
  return (
    <div className="container">
      <div className="row">
        {results.map((result, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={result.image} className="card-img-top" alt={result.name} />
              <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p className="card-text">
                  Price: {result.price} <br />
                  Type: {result.type} <br />
                  Bedrooms: {result.bedrooms}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
