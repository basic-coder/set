import React from "react";
import './personal.css'


const Personal = () => {
  return (
    <form action="#" className="personal-container">
      <h3>Personal Information</h3>
      <h4>Tell us about yourself</h4>
      <div className="personal-box">
        <div className="personal-inputs">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="personal-inputs">
          <label>Email</label>
          <input type="text" />
        </div>
      </div>
      <button type="submit" className="personal-save">Save</button>
    </form>
  );
};

export default Personal;
