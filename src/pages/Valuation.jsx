import React from "react";

function Valuation() {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4">Get a Property Valuation</h1>
                <p className="text-center mb-5">Fill out the form below to receive a valuation for your property.</p>

                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="ownerName" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="ownerName" placeholder="Enter your name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="propertyAddress" className="form-label">Property Address</label>
                        <input type="text" className="form-control" id="propertyAddress" placeholder="Enter your property address" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="propertyType" className="form-label">Property Type</label>
                        <select id="propertyType" className="form-select">
                            <option defaultValue>Choose...</option>
                            <option>Apartment</option>
                            <option>Bungalow</option>
                            <option>Townhouse</option>
                            <option>Villa</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="additionalDetails" className="form-label">Additional Details</label>
                        <textarea className="form-control" id="additionalDetails" rows="4" placeholder="Provide any additional information about your property..."></textarea>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary">Get Valuation</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Valuation;
