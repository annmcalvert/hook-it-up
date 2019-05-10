import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const DisplayUser = (props) => {

    const statePlaceholder = {
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
        },
        phone: "",
        website: "",
        company: {
            name: ""
        }
    }

    const [user, setUser] = useState({ statePlaceholder });

    const userId = props.match.params.id;

    const getUser = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
        const user = await res.json();
        setUser(user);
    }

    useEffect(() => {
        getUser();
    }, []);

    console.log(user);

    if (Array.isArray(user)) return null;
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{user.name}</div>
            <div className="card-body">
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                {/* <p>Address: {user.address}</p> */}
                <p>Phone Number: {user.phone}</p>
                <p>Website: {user.website}</p>
                {/* <p>Company: {user.company.name}</p> */}


            </div>
        </div>
    )
}

export default withRouter(DisplayUser);