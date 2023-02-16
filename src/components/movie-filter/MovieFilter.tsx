import { FC, ReactElement } from "react"
import "./MovieFilter.css"

const MovieFilter : FC = () : ReactElement => {
    return (
        <>
            <ul className="filter">
                <li><a className="link">All</a></li>
                <li><a className="link">Documentary</a></li>
                <li><a className="link">Comedy</a></li>
                <li><a className="link">Horror</a></li>
                <li><a className="link">Crime</a></li>
            </ul>
        </>
    )
}

export default MovieFilter;