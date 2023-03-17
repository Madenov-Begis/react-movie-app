import { useContext, useEffect, useState } from "react";
import { APIKEY } from "../context/Index";
import Carusel, { CaruselMovies, CaruselSeries } from "../Components/AliceCarusel/AliceCarusel"
import { Container } from "react-bootstrap";
import TypeTitle from "../Components/TypeTitle/TypeTitle";


function Home() {
    const api_key = useContext(APIKEY)
    const [trends, setTrends] = useState([])
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getTrendsMovie()
        getMovies()
        getSeries()
    }, [currentPage])

    async function getTrendsMovie() {
        await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1&language=ru-Ru
        `)
            .then(res => res.json())
            .then(data => {
                setTrends(data.results)
            })
            .catch(err => console.log(err))

    }
    async function getMovies() {
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&language=ru-Ru`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
            })
            .catch(err => console.log(err))

    }
    async function getSeries() {
        await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&language=ru-Ru`)
            .then(res => res.json())
            .then(data => {
                setSeries(data.results)
            })
            .catch(err => console.log(err))

    }
    return(
        <div>
        <Container>
            <div className="main">
                <TypeTitle title="Тренды" category="trends"/ >
                <Carusel content={trends}/>
            </div>
        </Container>
        <Container>
            <div className="main">
                <TypeTitle title="Фильмы" category="movies"/>
                <CaruselMovies movies={movies}/>
            </div>
        </Container>
        <Container>
            <div className="main">
                <TypeTitle title="Сериалы" category="series"/>
                <CaruselSeries series={series}/>
            </div>
        </Container>

        </div>
    )
}

export default Home