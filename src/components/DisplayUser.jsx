import React, { useState, useEffect } from 'react';

const DisplayUser = () => {

    const [user, setUser] = useState([]);

    const userId = this.props.match.params.id;

    const getUser = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users" + userId);
        const user = await res.json();
        setUser(user);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{user.name}</div>
            <div className="card-body">
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>
                <p>Phone Number: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company}</p>


            </div>
        </div>
    )

}

export default DisplayUser;