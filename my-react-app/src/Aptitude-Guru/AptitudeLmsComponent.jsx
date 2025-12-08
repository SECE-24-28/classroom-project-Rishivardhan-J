import React from "react";
import { useState } from "react";
import { AptitudeLmsStyle } from "./AptitudeLmsStyle";

const AptitudeLmsComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    passoutYear: "2024",
    department: "CSE",
    programType: "UG",
    email: "",
    countryCode: "IND",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LMS Form Data :", formData);
  };

  return (
    <AptitudeLmsStyle>
      <div className="page-wrapper">
        <div className="title-block">
          <p className="welcome-text">Welcome to</p>
          <h1 className="main-title">
            <span className="title-black">Aptitude Guru Hem</span>{" "}
            <span className="title-red">LMS</span>
          </h1>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="two-column-row">
              <div className="field-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={updateField}
                />
              </div>

              <div className="field-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={updateField}
                />
              </div>
            </div>

            <div className="two-column-row">
              <div className="field-group">
                <label htmlFor="college">Select College</label>
                <select
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={updateField}
                >
                  <option value="">Select college</option>
                  <option value="AGH B2C">AGH B2C</option>
                  <option value="AGH Main">AGH Main</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="passoutYear">Select Passout Year</label>
                <select
                  id="passoutYear"
                  name="passoutYear"
                  value={formData.passoutYear}
                  onChange={updateField}
                >
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
            </div>

            <div className="two-column-row">
              <div className="field-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={updateField}
                >
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="MECH">MECH</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="programType">Ug or Pg</label>
                <select
                  id="programType"
                  name="programType"
                  value={formData.programType}
                  onChange={updateField}
                >
                  <option value="UG">UG</option>
                  <option value="PG">PG</option>
                </select>
              </div>
            </div>

            <div className="two-column-row">
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={updateField}
                />
              </div>

              <div className="field-group">
                <label htmlFor="mobile">Mobile</label>
                <div className="mobile-wrapper">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={updateField}
                    className="country-select"
                  >
                    <option value="IND">IND</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter Mobile number"
                    value={formData.mobile}
                    onChange={updateField}
                    className="mobile-input"
                  />
                </div>
              </div>
            </div>

            <div className="two-column-row">
              <div className="field-group">
                <div className="label-with-action">
                  <label htmlFor="password">Password</label>
                  <button
                    type="button"
                    className="show-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    Show
                  </button>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter the password"
                  value={formData.password}
                  onChange={updateField}
                />
              </div>

              <div className="field-group">
                <div className="label-with-action">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <button
                    type="button"
                    className="show-btn"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    Show
                  </button>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter the confirm password"
                  value={formData.confirmPassword}
                  onChange={updateField}
                />
              </div>
            </div>

            <div className="password-rules">
              <ul>
                <li>minimum 8 character</li>
                <li>one lowercase character</li>
                <li>one special character</li>
                <li>one uppercase character</li>
                <li>one number</li>
              </ul>
            </div>

            <div className="submit-row">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </AptitudeLmsStyle>
  );
};

export default AptitudeLmsComponent;