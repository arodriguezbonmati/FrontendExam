import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";

import Characters from "./Characters"

const Header = (props) => {

    const [character, setCharacter] = useState(null);
    const [response, setResponse] = useState(null);
    const [episode, setEpisode] = useState(null);


    /*useEffect(() => {
        if (character != null) {
            axios.get(`https://swapi.dev/api/people/${character}/`
            ).then((response) => {
                setResponse(response.data.results);
            })
        }

    }, [character])*/


    //{document.getElementById("search").value ? setCharacter(document.getElementById("search").value) : null}
    return (
        <div className="body">
            <div className="lookup">
                <input type="text" className="input_name" id="search" placeholder="Luke Skywalker" />
                <button className="search" onClick={() => setCharacter(document.getElementById("search").value) }>Search</button>
                {console.log(character)}
            </div>
            <div className="espisodesButtons">
                <button className="ep" onClick={() => setEpisode(null)}>All</button>
                <button className="ep" onClick={() => setEpisode(1)}>Episode 1</button>
                <button className="ep" onClick={() => setEpisode(2)}>Episode 2</button>
                <button className="ep" onClick={() => setEpisode(3)}>Episode 3</button>
                <button className="ep" onClick={() => setEpisode(4)}>Episode 4</button>
                <button className="ep" onClick={() => setEpisode(5)}>Episode 5</button>
                <button className="ep" onClick={() => setEpisode(6)}>Episode 6</button>
            </div>
            <div className="content">
                <Characters episode={episode} character={character}/>
            </div>
        </div>

    )

}

export default Header;