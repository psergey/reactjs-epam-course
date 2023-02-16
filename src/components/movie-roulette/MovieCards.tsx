import {FC, ReactElement} from "react";
import MovieCard from "./MovieCard";
import MovieCount from "./MovieCount";
import "./MovieCards.css"

const MovieCards : FC = () : ReactElement => {
    return (<>
        <MovieCount />
        <ul className="movies">
            {[1,2,3,4].map(item => {
                return  <li key={item}>
                    <MovieCard 
                        name="Pulp Fiction"
                        releaseYear={2004}
                        genre="Action & Adventure"
                        posterUrl="https://www.miramax.com/assets/Pulp-Fiction1.png" />
                </li>
            })}
        </ul>
    </>)
}

export default MovieCards;