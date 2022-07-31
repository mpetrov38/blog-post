import './home.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Home = () => {

    return (
        <section id="viewCatalog" className="background-img">
            <div className="added-posts">
               
                    {/* <Link to={""}  className="added-hotel">
                        <img src="" alt="" className="picture-added-hotel" />
                        <h3></h3>
                        <span>Free rooms: </span>
                    </Link> */}
               
                    <div className="guest">
                        { true ? "Loading..." : "There are no Hotels found..." }
                    </div>
                
            </div>
        </section>
    );
}

export default Home;

