import React, { useState, useEffect } from "react";
// import "./index.css";
import Banner from "../Banner";
import Navigation from "../Navigation";
import Slider from "../Slider";
import Iconer from "../Iconer";


const Home = () => {
  const [name, setName] = useState("Marlone");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://thatcopy.pw/catapi/rest/", {})
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  return (  
    <div>
        <div className="hb-header"><Navigation /></div>
        <div>
            <Slider />
        </div>
        <div><Iconer /></div>
        <div className="container">
            <div className="col-md-12"><Banner name={name} email={email} data={data} /></div>
        </div>
        
    </div>
  );
};

export default Home;
