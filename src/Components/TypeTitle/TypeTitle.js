import { Link, useParams } from "react-router-dom"
import "./TypeTitle.css"

function TypeTitle({title, category}) {
 
    return (
        <div className="type-title">
            <Link to={`/${category}/1`} className="title">{title}</Link>
        </div>
    )   
}

export default TypeTitle