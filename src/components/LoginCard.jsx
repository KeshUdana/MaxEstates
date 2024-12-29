import React from "react";

function LoginCard() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div 
        className="card border rounded shadow" 
        style={{ width: "30rem", backgroundColor: "#f8f9fa", borderColor: "#ccc" }}
      >
        <div className="card-body text-center">
          <h5 className="card-title mb-3">Sign in to streamline your search</h5>
          <p className="card-text">
            Save properties, create alerts and keep track of the enquiries you send to agents.
          </p>
          <button className="btn btn-primary mt-3" type="submit">
            Sign in or create account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
