import { useContext, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import CustomPagination from "../Components/CustomPagination"
import SingleContent from "../Components/SinglePage/SingleContent"
import { APIKEY } from "../context/Index"

function Series() {
    const api_key = useContext(APIKEY)
    const {page} = useParams()
    const [series, setSeries] = useState([])
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(page)

    useEffect(() => {
        getSeries()
    },[currentPage])

    async function getSeries() {
        await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&language=ru-Ru`)
            .then(res => res.json())
            .then(data => (
                setSeries(data.results),
                setTotalPage(data.total_page),
                console.log(data.results)
            ))
            .catch(err => console.log(err))
    }
    return(
        <div className="series main">
            <Container>
                <Row>
                    {
                        series.length !== 0 ? (
                            series.map((item, index) => {
                                return(
                                <Col key={index} xs="12" sm="6" md="4" xl="3">
                                    <SingleContent 
                                        category = "tv" 
                                        item={item}
                                    />
                                </Col>)
                            })
                        ) : <h3>Loading...</h3>
                    }
                </Row>
            </Container>
            <CustomPagination 
                media_type="series"
                totalPage={totalPage}
                setCurrentPage={setCurrentPage}
                currentPage = {+page}
            />
        </div>
    )
}
export default Series