import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { APIKEY } from "../../context/Index";
import Carusel, { CaruselActors } from "../AliceCarusel/AliceCarusel";
import "./Actors.css"

function Actors({category}) {
    const api_key = useContext(APIKEY)
    const { id } = useParams()
    // const { category } = useParams
    const [actors, setActors] = useState([])

    useEffect(() => {
        getActors()
    }, [])

    async function getActors() {
        await fetch(`https://api.themoviedb.org/3/${category}/${id}/credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => (
                console.log(data),
                setActors(data.cast)
            ))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h3 className="actors_title">В главных ролях</h3>
            <CaruselActors contents={actors}>
            </CaruselActors>
        </div>
    )
}

export default Actors