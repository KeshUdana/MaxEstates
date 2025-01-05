import React from 'react';


const Mortgage = () => {
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h1 className="display-4 text-primary">Get a Mortgage</h1>
          <p className="lead">
            Find the best mortgage options tailored to your needs. We help make home ownership achievable.
          </p>
          <button className="btn btn-primary btn-lg">Contact Us</button>
        </div>
        <div className="col-lg-6 col-md-12">
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loanAmount" className="form-label">
                Loan Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="loanAmount"
                placeholder="Enter desired loan amount"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="propertyType" className="form-label">
                Property Type
              </label>
              <select className="form-select" id="propertyType">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="investment">Investment</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Mortgage;
