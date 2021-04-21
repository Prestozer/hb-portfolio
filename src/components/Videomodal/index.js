import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from "react-modal-video";
import "./index.css";
import video from "./video.png";
import {FaPlay} from "react-icons/fa";

const Videomodal = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
        <div className="vd-holder">
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="XHOmBV4js_E" onClose={() => setOpen(false)} />
                <a className="hb-video" onClick={()=> setOpen(true)}>
                    <img src={video} className="video-overlay" alt="video-overlay" />
                    <div className="vd-overlay">
                        <a href="#" className="vd-icon" title="User Profile">
                            <FaPlay />
                        </a>
                    </div>
                </a>

        </div>
    </React.Fragment>
  );
};
export default Videomodal;