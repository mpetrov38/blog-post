import { useEffect, useState, Fragment, useContext } from 'react';
import './details.css';
import {Link} from "react-router-dom"


const Details = () => {
    return (
        <section id="viewpost Details">
            <h2>Details</h2>
            <div className="post-ticket">
                <div className="post-left">
                    <img src="" alt="fa" />
                </div>
                <div className="post-right">
                    <div>
                        <h3>{}</h3>
                    </div>
                    <div>{}</div>
                    <p><span >Post creator{}</span> </p>

                            {/* <Link to={`/edit`} className="edit">Edit</Link> */}
                            <button className="button, remove" >Delete</button>
                    
                            <p><span className="green">Description</span> </p>
                            {/* <Link to="/book" className="book" >Book</Link> */}

                </div>
            </div>
        </section>
    );
}

export default Details;
