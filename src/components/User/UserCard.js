import React from 'react';

const UserCard = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default UserCard;