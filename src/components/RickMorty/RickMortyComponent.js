import React, {useEffect, useState} from 'react';

import RickMorty from "./RickMorty";
import styles from "./RickMortyComponent.module.css";

const RickMortyComponent = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getCharacters();
        }

        fetchData();
    }, []);

    const getCharacters = async () => {
        try {
            let response = await fetch('https://rickandmortyapi.com/api/character');
            let data = await response.json();

            setCharacters(data.results)
        } catch {
        }
    }

    return (
        <div className={styles.wrapper}>
            { characters?.map((char) =>
                <div className={styles.card} key={char.id}>
                    <RickMorty  char={char}/>
                </div>
            )}
        </div>
    );
};

export default RickMortyComponent;