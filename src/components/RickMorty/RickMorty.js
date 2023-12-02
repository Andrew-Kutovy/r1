import React from 'react';

const RickMorty = ({ char }) => {
    return (
        <div style={{ display: 'flex', width: '45vw' }}>
            <div style={{ width: '20vw' }}>
                <p>id: {char.id}</p>
                <p>name: {char.name}</p>
                <p>status: {char.status}</p>
                <p>species: {char.species}</p>
                <p>gender: {char.gender}</p>
            </div>
            <div style={{ maxWidth: '20vw', maxHeight: '20vh', overflow: 'hidden' }}>
                <img
                    src={char.image}
                    alt={char.name}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default RickMorty;
