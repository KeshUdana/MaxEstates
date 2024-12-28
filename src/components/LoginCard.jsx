import React from "react";


function LoginCard() {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5>Sign in to streamline your search</h5>
          <p>Save properties, create alerts and keep track of the enquiries you send to agents.</p>
          <button className="LoginButton" type="submit">Sign in or create account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
