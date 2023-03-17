import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import Actors from "../Components/Actors/Actors"
import { Wrap } from "../Components/Wrap"
import { APIKEY } from "../context/Index"
import "./SinglePage.css"

function SinglePage() {
    const api_key = useContext(APIKEY)
    const {category} = useParams()
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getSinglePage()
    },[]) 

    async function getSinglePage() {
        await fetch(`https://api.themoviedb.org/3/${category}/${id}?api_key=${api_key}&language=ru-RU`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="main">
            <Wrap bg={movie.lenth !== 0 ? (
                 `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`
            ): "Loading" }>
                <div className="roww">
                    <div className="row-left">
                        <img src={movie.lenth!==0 ? (
                            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`) : "Loading" }
                             alt="" />
                    </div>
                    <div className="row-right">
                        <div className="content">
                            <h2>{movie.title}</h2>
                            <h4>Рейтинг</h4>
                            <span>{Math.round(movie.vote_average*10)}%</span>
                            <h5>Обзор</h5>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </Wrap>
            <Actors category={category}/>
        </div>
    )
}

export default  SinglePage