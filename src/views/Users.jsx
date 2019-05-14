import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <ul>
                {users.map(user => <li key={user.id} user={user}>
                    <Link to={"/" + user.id}>{user.name}</Link>
                </li>)}
            </ul>
        </>
    );
}

export default Users;