import { FC, ReactElement } from "react";
import RouletteLabel from "../roulette-label/RouletteLabel";
import "./Search.css"

const Search : FC = () : ReactElement => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="flex-row">
                    <RouletteLabel />
                    <button className="addMovie">
                        + Add Movie
                    </button>
                </div>
                <div className="flex-column">
                    <div><span className="search">Find your movie</span></div>
                    <div>
                        <div><input placeholder="What do you want to watch?" className="search"></input></div>
                        <div><button className="search">Search</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;