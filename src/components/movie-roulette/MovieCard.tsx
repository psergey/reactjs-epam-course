import React, {FC} from "react";
import ContextMenu from "./ContextMenu";
import "./MovieCard.css";

interface Props {
    posterUrl: string,
    name: string,
    genre: string,
    releaseYear: number
}

const MovieCard : FC<Props> = ({posterUrl, name, genre, releaseYear}) => {
    throw new Error("error");
    return (
        <>
            <ul className="card">
                <li className="poster">
                    <div className="menu"><ContextMenu /></div>
                    <img src={posterUrl}></img>
                </li>
                <li>
                    <div className="movie-name">
                        <span className="name">{name}</span><span className="year">{releaseYear}</span>
                    </div>
                </li>
                <li><span className="genre">{genre}</span></li>
            </ul>
        </>
    )
}

export default MovieCard;