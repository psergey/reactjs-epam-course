import { FC, ReactElement } from "react";
import "./MovieCount.css";

const MovieCount : FC = () : ReactElement => {
    return <p className="movieCount"><span className="bold">39</span> movies found</p>
}

export default MovieCount;