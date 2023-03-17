import React, { useContext } from "react";
import { Link } from "react-router-dom"
import "./SinglePage.css"
import { unavailable } from "../../assets/assets";

function SingleContent({ item, category }) {
    const rate = item.vote_average
    return(
            <Link to={`/${category}/${item.id}`} className="single">
                    <div className="single_page">
                        <div className="single_page-img">
                            <img src={(item.poster_path||item.profile_path) ? `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path || item.profile_path}` : unavailable} alt="" />
                        </div> 
                        {/* <span className={rate*10 > 75 ? "rate rate-high" : "rate rate-medium"}>
                            {
                                Math.round(rate*10) + "%"
                            }
                        </span> */}
                        <div className="single_page-body">
                            <h5 className="single_page-title">{item.title || item.name}</h5>
                            <p className="date">{item.release_date || item.first_air_date}</p> 
                        </div>
                    </div>       
            </Link>
    )
}

export default SingleContent