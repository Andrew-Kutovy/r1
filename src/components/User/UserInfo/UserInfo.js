import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
    const { userId } = useParams();
    const [info, setInfo] = useState({});

    const getUserById = async (userId) => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            let data = await response.json();

            setInfo(data);
        } catch (e) {
            console.error('Error fetching Users', e);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getUserById(userId);
        };
        fetchData();
    }, [userId]);

    return (
        <div>
            <h1>User id: {userId} Info:</h1>
            <p>Name: {info.name}</p>
            <p>username: {info.username}</p>
            <p>email: {info.email}</p>
            <p>phone: {info.phone}</p>
        </div>
    );
};

export default UserInfo;
