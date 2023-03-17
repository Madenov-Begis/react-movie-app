import { useContext, useEffect, useState } from "react";
import { APIKEY } from "../context/Index";
import CustomPagination from "../Components/CustomPagination";
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router";
import SingleContent from "../Components/SinglePage/SingleContent";

function Trends() {
    const api_key = useContext(APIKEY)
    const {page} = useParams()
    const [trends, setTrends] = useState([])
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(page)

    useEffect(() => {
        getTrendsMovie()
    }, [currentPage])

    async function getTrendsMovie() {
        await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${currentPage}&language=ru-Ru
        `)
            .then(res => res.json())
            .then(data => {
                setTotalPage(data.total_pages)
                setTrends(data.results)
            })
            .catch(err => console.log(err))

    }
    return(
        <div className="trends main">
            <Container>
                <Row >
                        {
                            trends.length !==0 ? 
                                (trends.map((item, index) => {
                                    return (
                                        <Col key={index} xs="12" sm="6" md="4" xl="3" >
                                            <SingleContent 
                                                category="movie"
                                                item={item}
                                            />
                                        </Col>
                                )
                            })) : <h3>Loading...</h3>
                            
                        }
                </Row>
            </Container>           
            <CustomPagination 
                media_type="trends"
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
                currentPage={+page}
            />
        </div>
    )
}

export default Trends