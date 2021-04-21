import React from "react";
import "./index.css";
import Videomodal from "../Videomodal";


const Banner = ({ name, email, data }) => {
  const { id, url, description, about } = data;

  return (
    <div className="row section-banner">
        <div className="col-md-6 hb-bannner">
        <div>
            <p className="hb-small-title">About</p>
            <h3 className="hb-titler">{`Welcome ${name} to hb-portfolio an my email is  ${email}`}</h3>
            <p className="hb-description">The point of using lorem ipsum is that it has a more-or-less normal distribution of 
                letters a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its self layout the point of using is that it 
                has a more-or-less packages and web page editors.</p>
            <button className="btn-5"><a href="/company">About us</a></button>
        </div>
        </div>

        <div className="col-md-6 hb-bannner">
        <div>
            < Videomodal />
        </div>
        </div>
    </div>

  );
  
};

export default Banner;