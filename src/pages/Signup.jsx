import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    bio: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, bio, confirmPassword } = formData;

    // Basic validation for password matching
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Display success message
    alert('Account created successfully!');

    // Reset form data after submission
    setFormData({
      email: '',
      password: '',
      bio: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Bio input */}
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio</label>
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            rows="3"
            placeholder="Tell us about yourself"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        {/* Password and confirm password */}
        <div className="row g-3 align-items-center mb-3">
          <div className="col-md-6">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
