import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";


const Characters = (props) => {
    const [characters, setCharacters] = useState(null);

    const [page, setPage] = useState(1);

    const [showFilms, setShowFilms] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`, {
            params: {
                page: page
            }
        }).then((response) => {
            //setPage(response.data.next);
            setCharacters(response.data.results);
        })
    }, [page]);

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    return (
        <div className="body">
            {console.log(props.episode)}
            {characters ?
                <div className="characters">
                    {characters.map((i) => {
                        if (i.films.find(elem => elem === `https://swapi.dev/api/films/${props.episode}/`)) {
                            console.log("Hola");
                        }

                        if(i.name === props.character){
                            console.log("Character found")
                        }

                        return (
                            <div className="character">
                                <p className="name">Name: {i.name}</p>
                                <p className="mass">Mass: {i.mass}</p>
                                <p className="height">Height: {i.height}</p>
                                <p className="birth">Date of Birth: {i.birth_year}</p>
                                <p className="gender">Gender: {i.gender}</p>
                                <p className="planet">Planet: {i.homeworld}</p>
                                <p className="films" onClick={() => setShowFilms(!showFilms)}>Films</p>
                                {showFilms ?
                                    i.films.map(elem => {
                                        return (
                                            <p>{elem}</p>
                                        )

                                    })

                                    : null}
                            </div>
                        )
                    })}
                </div>
                : null}
            <div className="pages">
                {page > 1 ?
                    <p className="previous" onClick={() => prevPage()}>Previous</p>
                    : null}
                <p className="currentpage">{page} / 9</p>
                {page < 9 ?
                    <p className="next" onClick={() => nextPage()}>Next</p>
                    : null}

            </div>

        </div>
    )

}

export default Characters;

/* */