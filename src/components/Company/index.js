import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <h3>Leave us a reply</h3>
      <p>We would love to hear from you</p>

      <Link to="/">back homw</Link>
    </div>
  );
};

export default Contact;