import React, {useEffect, useState} from 'react';
import UserCard from "./UserCard";
import {Outlet, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../router/AppRoutes";

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

    const info = 'some info ' // example of useOutletContext

    // const navigate = useNavigate()
    // setTimeout(()=>{
    //      navigate(AppRoutes.RickMorty)
    // }, 3000)

    return (
        <div>
            <Outlet context={info} />
            { users?.map((user) =>
                <div style={{border: "1px solid black"}} key={user.id}><UserCard  user={user} /> </div>
            )}

        </div>
    );
};

export default UserComponent;