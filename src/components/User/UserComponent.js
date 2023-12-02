import React, {useEffect, useState} from 'react';
import UserCard from "./UserCard";
import {Outlet} from "react-router-dom";

const UserComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await getUsers();
        }
        fetchData();
    }, []);

    const getUsers = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await response.json();

            setUsers(data)
        } catch (e) {
            console.error("Error fetching Users", e)
        }
    }

    return (
        <div>
            <Outlet />
            { users?.map((user) =>
                <div style={{border: "1px solid black"}} key={user.id}><UserCard  user={user} /> </div>
            )}

        </div>
    );
};

export default UserComponent;