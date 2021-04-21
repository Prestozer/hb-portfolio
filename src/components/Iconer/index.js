import React from "react";
import { FaHardHat} from "react-icons/fa";
import { FaHandRock} from "react-icons/fa";
import { FaHotel} from "react-icons/fa";
import { FaLeaf} from "react-icons/fa";

export default function Iconer() {
    return(
        <div className="hb-iconer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 pad-0 hb-first">
                        <div class="introbox">
                            <div class="introbox-icon">
                                <FaHardHat />
                            </div>
                            <div class="introbox_content">
                                <p class="introbox_small_heading">Sustainable</p>
                                <h3 class="introbox_text">
                                Warehousing Services
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 pad-0">
                        <div class="introbox">
                            <div class="introbox-icon">
                                <FaHandRock />
                            </div>
                            <div class="introbox_content">
                                <p class="introbox_small_heading">Sustainable</p>
                                <h3 class="introbox_text">
                                Warehousing Services
                                </h3>
                            </div>
                        </div>
                    </div>   

                    <div className="col-md-3 pad-0">
                        <div class="introbox">
                            <div class="introbox-icon">
                                <FaHotel/>
                            </div>
                            <div class="introbox_content">
                                <p class="introbox_small_heading">Sustainable</p>
                                <h3 class="introbox_text">
                                Warehousing Services
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 pad-0 hb-last">
                        <div class="introbox">
                            <div class="introbox-icon">
                                <FaLeaf/>
                            </div>
                            <div class="introbox_content">
                                <p class="introbox_small_heading">Sustainable</p>
                                <h3 class="introbox_text">
                                Warehousing Services
                                </h3>
                            </div>
                        </div>
                    </div>                                

                </div>
            </div>
        </div>
    );
};
