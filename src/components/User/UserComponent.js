import React, {useEffect} from 'react';
import UserCard from "./UserCard";
import {userActions} from "../../redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";

const UserComponent = () => {
    const dispatch = useDispatch()
    const users = useSelector((store)=> store.users.usersArray)
    console.log(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(userActions.setUsers(data)))
    }, []);


    return (
        <div>
            { users?.map((user) =>
                <div style={{border: "1px solid black"}} key={user.id}><UserCard  user={user} /> </div>
            )}
        </div>
    );
};

export default UserComponent;